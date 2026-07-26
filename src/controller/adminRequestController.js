import { supabase } from '../config/supabaseClient.js';
import { sendAdminApprovalRequestEmail } from '../services/emailServices.js';

/**
 * Create a new admin request
 */
export const createAdminRequest = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'User ID is required.',
      });
    }

    // Ensure the user exists
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('id, full_name, email, role')
      .eq('id', userId)
      .single();

    if (profileError || !profile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found.',
      });
    }

    // Already an admin
    if (profile.role === 'admin') {
      return res.status(400).json({
        success: false,
        message: 'User is already an admin.',
      });
    }

    // Prevent duplicate requests
    const { data: existing } = await supabase
      .from('admin_requests')
      .select('id')
      .eq('user_id', userId)
      .eq('status', 'pending')
      .maybeSingle();

    if (existing) {
      return res.status(409).json({
        success: false,
        message: 'Admin request already exists.',
      });
    }

    
    const { error } = await supabase.from('admin_requests').insert({
        user_id: profile.id,
        full_name: profile.full_name,
        email: profile.email,
        status: 'pending',
    });
    
    if (error) throw error;
    
    // Promote user
    const { error: roleError } = await supabase
      .from('profiles')
      .update({
        role: 'pending_request',
      })
      .eq('id', userId);

    if (roleError) throw roleError;


    await sendAdminApprovalRequestEmail({
      applicantName: profile.full_name,
      applicantEmail: profile.email,
    });

    return res.status(201).json({
      success: true,
      message: 'Admin request submitted successfully.',
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/**
 * Approve an admin request
 */
export const approveAdminRequest = async (req, res) => {
  try {
    const { requestId } = req.params;

    // Find request
    const { data: request, error } = await supabase
      .from('admin_requests')
      .select('*')
      .eq('id', requestId)
      .single();

    if (error || !request) {
      return res.status(404).json({
        success: false,
        message: 'Request not found.',
      });
    }

    // Promote user
    const { error: roleError } = await supabase
      .from('profiles')
      .update({
        role: 'admin',
      })
      .eq('id', request.user_id);

    if (roleError) throw roleError;

    // Mark request approved
    const { error: updateError } = await supabase
      .from('admin_requests')
      .update({
        status: 'approved',
        approved_at: new Date().toISOString(),
      })
      .eq('id', requestId);

    if (updateError) throw updateError;

    return res.json({
      success: true,
      message: 'Admin approved successfully.',
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
