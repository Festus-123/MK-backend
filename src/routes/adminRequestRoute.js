import express from 'express';
import {
  createAdminRequest,
  getAdminRequests,
  approveAdminRequest,
  rejectAdminRequest,
} from '../controller/adminRequestController.js';

const router = express.Router();

// Create a new admin request
router.post('/', createAdminRequest);

// Get all admin requests (super admin only)
router.get('/', getAdminRequests);

// Approve admin request (super admin only)
router.patch('/:requestId/approve', approveAdminRequest);

// Reject admin request (super admin only)
router.patch('/:requestId/reject', rejectAdminRequest);

export default router;