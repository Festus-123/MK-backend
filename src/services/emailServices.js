import nodemailer from 'nodemailer';

const email = process.env.EMAIL_USER;
const password = process.env.EMAIL_PASSWORD;

// console.log('Email User:', email, 'Email Password', password);

export const sendOrderConfirmationEmail = async ({
  customerEmail,
  customerName,
  orderId,
  totalAmount,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,

      auth: {
        user: email,
        pass: password,
      },
    });

    await transporter.verify();
    console.log('SMTP Connection success');

    await transporter.sendMail({
      from: `"M&K Clothing" <${email}>`,
      to: [email, customerEmail],
      subject: `Your Order Has Been Confirmed • ${orderId}`,
      html: `
      <div style="
        font-family: Arial, Helvetica, sans-serif;
        max-width:650px;
        margin:auto;
        background:#ffffff;
        border:1px solid #ececec;
        border-radius:12px;
        overflow:hidden;
      ">

        <!-- Header -->
        <div style="
          background:#8b4a1f;
          color:#fff;
          padding:30px;
          text-align:center;
        ">
          <h1 style="margin:0;font-size:28px;">
            M&K Clothing
          </h1>

          <p style="margin-top:8px;opacity:.9;">
            Order Successfully Received
          </p>
        </div>

        <!-- Body -->
        <div style="
          padding:35px;
          color:#444;
          line-height:1.8;
        ">

          <h2 style="
            margin-top:0;
            color:#8b4a1f;
          ">
            Hello ${customerName},
          </h2>

          <p>
            Thank you for shopping with
            <strong>M&K Clothing</strong>.
          </p>

          <p>
            We've successfully received your order and payment.
            Your purchase has been recorded and our fulfillment team
            will begin preparing it shortly.
          </p>

          <table style="
            width:100%;
            border-collapse:collapse;
            margin:30px 0;
          ">

            <tr style="background:#f8f8f8;">
              <td style="
                padding:12px;
                border:1px solid #eee;
              ">
                <strong>Order Reference</strong>
              </td>

              <td style="
                padding:12px;
                border:1px solid #eee;
              ">
                ${orderId}
              </td>
            </tr>

            <tr>
              <td style="
                padding:12px;
                border:1px solid #eee;
              ">
                <strong>Total Paid</strong>
              </td>

              <td style="
                padding:12px;
                border:1px solid #eee;
                color:#8b4a1f;
                font-weight:bold;
              ">
                ₦${Number(totalAmount).toLocaleString()}
              </td>
            </tr>

            <tr>
              <td style="
                padding:12px;
                border:1px solid #eee;
              ">
                <strong>Current Status</strong>
              </td>

              <td style="
                padding:12px;
                border:1px solid #eee;
                color:#16a34a;
                font-weight:bold;
              ">
                ✅ Order Confirmed
              </td>
            </tr>

          </table>

          <div style="
            background:#faf7f4;
            border-left:4px solid #8b4a1f;
            padding:18px;
            margin:30px 0;
          ">

            <strong>What happens next?</strong>

            <ul style="margin-top:12px;">

              <li>✔ Your payment has been confirmed.</li>

              <li>✔ Your order has been registered.</li>

              <li>⏳ Our team will begin processing your order.</li>

              <li>📦 You'll receive another email once your package enters production.</li>

            </ul>

          </div>

          <p>
            We'll keep you updated throughout every stage of your order,
            from processing to shipment and final delivery.
          </p>

          <p>
            If you have any questions, simply reply to this email and
            our support team will be happy to assist you.
          </p>

          <p style="margin-top:40px;">
            Thank you for choosing
            <strong>M&K Clothing.</strong>
          </p>

          <p>
            Kind regards,<br>
            <strong>M&K Clothing Team</strong>
          </p>

        </div>

        <!-- Footer -->
        <div style="
          background:#f8f8f8;
          padding:20px;
          text-align:center;
          color:#888;
          font-size:13px;
        ">
          © ${new Date().getFullYear()} M&K Clothing. All rights reserved.
        </div>

      </div>
      `,
    });

    console.log('Order confirmation email dispatched successfully.');

    return {
      success: true,
    };
  } catch (error) {
    console.error('Order confirmation email error:', error);

    return {
      success: false,
      error: error.message,
    };
  }
};

export const sendOrderProcessingEmail = async ({
  customerEmail,
  customerName,
  orderId,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,

      auth: {
        user: email,
        pass: password,
      },
    });

    await transporter.verify();
    console.log('SMTP Connection success');

    await transporter.sendMail({
      from: `"M&K Clothing" <${email}>`,
      to: [email, customerEmail],
      subject: `Your M&K Order is Now Being Processed • #${orderId}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 650px; margin:auto; background:#ffffff; border:1px solid #ececec; border-radius:12px; overflow:hidden;">

          <!-- Header -->
          <div style="background:#8b4a1f; color:white; padding:28px; text-align:center;">
            <h1 style="margin:0; font-size:26px;">M&K Clothing</h1>
            <p style="margin-top:8px; opacity:.9;">
              Order Status Update
            </p>
          </div>

          <!-- Body -->
          <div style="padding:35px; color:#444; line-height:1.8;">

            <h2 style="margin-top:0; color:#8b4a1f;">
              Hello ${customerName},
            </h2>

            <p>
              Great news! We've successfully received your order and our team has
              started preparing it for dispatch.
            </p>

            <p>
              Our production and fulfillment team is currently verifying your
              order details, packaging your selected items, and performing a
              final quality inspection before shipment.
            </p>

            <table style="width:100%; border-collapse:collapse; margin:30px 0;">
              <tr style="background:#f8f8f8;">
                <td style="padding:12px; border:1px solid #eee;">
                  <strong>Order Reference</strong>
                </td>
                <td style="padding:12px; border:1px solid #eee;">
                  #${orderId}
                </td>
              </tr>

              <tr>
                <td style="padding:12px; border:1px solid #eee;">
                  <strong>Current Status</strong>
                </td>
                <td style="padding:12px; border:1px solid #eee; color:#d97706; font-weight:bold;">
                  🟡 Processing
                </td>
              </tr>
            </table>

            <p>
              You don't need to do anything at this stage. Once your package has
              been dispatched, we'll send you another email with your updated
              shipping status.
            </p>

            <div style="background:#faf7f4; border-left:4px solid #8b4a1f; padding:18px; margin:30px 0;">
              <strong>What's happening now?</strong>
              <ul style="margin-top:12px;">
                <li>✔ Order verified</li>
                <li>✔ Items being prepared</li>
                <li>⏳ Packaging in progress</li>
                <li>⏳ Awaiting shipment</li>
              </ul>
            </div>

            <p>
              Thank you for choosing <strong>M&K Clothing</strong>.
              We appreciate your trust and can't wait for you to receive your order.
            </p>

            <p>
              If you have any questions regarding your order, simply reply to
              this email and our support team will be happy to assist you.
            </p>

            <p style="margin-top:40px;">
              Kind regards,<br/>
              <strong>M&K Clothing Team</strong>
            </p>

          </div>

          <!-- Footer -->
          <div style="background:#f8f8f8; padding:20px; text-align:center; color:#888; font-size:13px;">
            © ${new Date().getFullYear()} M&K Clothing. All rights reserved.
          </div>

        </div>
      `,
    });

    console.log('Processing email dispatched successfully.');

    return {
      success: true,
    };
  } catch (error) {
    // console.error('Processing email error:', error);
    console.error('Message:', error.message);
    console.error('Code:', error.code);
    console.error('Response:', error.response);
    console.error(error);

    return {
      success: false,
      error: error.message,
    };
  }
};

export const sendOrderShippedEmail = async ({
  customerEmail,
  customerName,
  orderId,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: password,
      },
    });

    await transporter.sendMail({
      from: `"M&K Clothing" <${email}>`,
      to: [email, customerEmail],
      subject: `Your M&K Order Has Been Shipped 🚚 • #${orderId}`,
      html: `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width:650px; margin:auto; background:#fff; border:1px solid #ececec; border-radius:12px; overflow:hidden;">

        <!-- Header -->
        <div style="background:#8b4a1f; color:white; padding:28px; text-align:center;">
          <h1 style="margin:0;font-size:26px;">M&K Clothing</h1>
          <p style="margin-top:8px;opacity:.9;">
            Shipping Confirmation
          </p>
        </div>

        <!-- Body -->
        <div style="padding:35px;color:#444;line-height:1.8;">

          <h2 style="margin-top:0;color:#8b4a1f;">
            Hello ${customerName},
          </h2>

          <p>
            Excellent news! Your order has now been packaged and dispatched.
          </p>

          <p>
            Your parcel is currently on its way to your delivery address.
            Depending on your location, delivery should arrive within the
            estimated delivery window communicated during checkout.
          </p>

          <table style="width:100%;border-collapse:collapse;margin:30px 0;">
            <tr style="background:#f8f8f8;">
              <td style="padding:12px;border:1px solid #eee;">
                <strong>Order Reference</strong>
              </td>
              <td style="padding:12px;border:1px solid #eee;">
                #${orderId}
              </td>
            </tr>

            <tr>
              <td style="padding:12px;border:1px solid #eee;">
                <strong>Current Status</strong>
              </td>
              <td style="padding:12px;border:1px solid #eee;color:#2563eb;font-weight:bold;">
                🚚 Shipped
              </td>
            </tr>
          </table>

          <div style="background:#eef6ff;border-left:4px solid #2563eb;padding:18px;margin:30px 0;">
            <strong>Your Order Journey</strong>

            <ul style="margin-top:12px;">
              <li>✔ Order Received</li>
              <li>✔ Order Processed</li>
              <li>✔ Package Prepared</li>
              <li>✔ Shipped</li>
              <li>⏳ Awaiting Delivery</li>
            </ul>
          </div>

          <p>
            Please ensure someone is available to receive the package upon
            delivery.
          </p>

          <p>
            Once your package has successfully arrived, we'll send one final
            confirmation email letting you know your order has been delivered.
          </p>

          <p>
            Thank you for shopping with
            <strong>M&K Clothing</strong>.
          </p>

          <p style="margin-top:40px;">
            Best Regards,<br/>
            <strong>M&K Clothing Team</strong>
          </p>

        </div>

        <!-- Footer -->
        <div style="background:#f8f8f8;padding:20px;text-align:center;color:#888;font-size:13px;">
          © ${new Date().getFullYear()} M&K Clothing. All rights reserved.
        </div>

      </div>
      `,
    });

    console.log('Shipped email dispatched successfully.');

    return {
      success: true,
    };
  } catch (error) {
    console.error('Shipped email error:', error);

    return {
      success: false,
      error: error.message,
    };
  }
};

export const sendOrderDeliveredEmail = async ({
  customerEmail,
  customerName,
  orderId,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: password,
      },
    });

    await transporter.sendMail({
      from: `"M&K Clothing" <${email}>`,
      to: [email, customerEmail],
      subject: `Your M&K Order Has Been Delivered 🎉 • #${orderId}`,
      html: `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width:650px; margin:auto; background:#ffffff; border:1px solid #ececec; border-radius:12px; overflow:hidden;">

        <!-- Header -->
        <div style="background:#16a34a; color:white; padding:28px; text-align:center;">
          <h1 style="margin:0;font-size:26px;">M&K Clothing</h1>
          <p style="margin-top:8px;opacity:.9;">
            Delivery Confirmation
          </p>
        </div>

        <!-- Body -->
        <div style="padding:35px;color:#444;line-height:1.8;">

          <h2 style="margin-top:0;color:#16a34a;">
            Hello ${customerName},
          </h2>

          <p>
            Great news! According to our records, your order has been successfully delivered.
          </p>

          <p>
            We sincerely hope everything arrived safely and that you're completely satisfied with your purchase.
          </p>

          <table style="width:100%;border-collapse:collapse;margin:30px 0;">
            <tr style="background:#f8f8f8;">
              <td style="padding:12px;border:1px solid #eee;">
                <strong>Order Reference</strong>
              </td>
              <td style="padding:12px;border:1px solid #eee;">
                #${orderId}
              </td>
            </tr>

            <tr>
              <td style="padding:12px;border:1px solid #eee;">
                <strong>Current Status</strong>
              </td>
              <td style="padding:12px;border:1px solid #eee;color:#16a34a;font-weight:bold;">
                ✅ Delivered
              </td>
            </tr>
          </table>

          <div style="background:#f0fdf4;border-left:4px solid #16a34a;padding:18px;margin:30px 0;">
            <strong>Your Order Journey</strong>

            <ul style="margin-top:12px;">
              <li>✔ Order Received</li>
              <li>✔ Processing Completed</li>
              <li>✔ Package Shipped</li>
              <li>✔ Successfully Delivered</li>
            </ul>
          </div>

          <h3 style="color:#16a34a;">Need Assistance?</h3>

          <p>
            If your order arrived damaged, incomplete, or you have any concerns,
            simply reply to this email and our support team will gladly assist you.
          </p>

          <p>
            We'd also love to hear your feedback! Your experience helps us continue
            improving the quality of our products and service.
          </p>

          <div style="margin:35px 0;padding:20px;background:#faf7f4;border-radius:10px;text-align:center;">
            <h3 style="margin-top:0;color:#8b4a1f;">
              Thank You for Choosing M&K Clothing ❤️
            </h3>

            <p style="margin-bottom:0;">
              We truly appreciate your trust in our brand and look forward to serving you again.
            </p>
          </div>

          <p style="margin-top:40px;">
            Warm Regards,<br/>
            <strong>M&K Clothing Team</strong>
          </p>

        </div>

        <!-- Footer -->
        <div style="background:#f8f8f8;padding:20px;text-align:center;color:#888;font-size:13px;">
          © ${new Date().getFullYear()} M&K Clothing. All rights reserved.
        </div>

      </div>
      `,
    });

    console.log('Delivered email dispatched successfully.');

    return {
      success: true,
    };
  } catch (error) {
    console.error('Delivered email error:', error);

    return {
      success: false,
      error: error.message,
    };
  }
};

export const sendDeletedOrderEmail = async ({
  customerEmail,
  customerName,
  orderId,
  reason,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: password,
      },
    });

    await transporter.sendMail({
      from: `"M&K Clothing" <${email}>`,
      to: [email, customerEmail],
      subject: `Your M&K Order Has Been Cancelled • #${orderId}`,
      html: `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:650px;margin:auto;background:#ffffff;border:1px solid #ececec;border-radius:12px;overflow:hidden;">

        <!-- Header -->
        <div style="background:#dc2626;color:white;padding:28px;text-align:center;">
          <h1 style="margin:0;font-size:26px;">
            M&K Clothing
          </h1>

          <p style="margin-top:8px;opacity:.9;">
            Order Cancellation Notice
          </p>
        </div>

        <!-- Body -->
        <div style="padding:35px;color:#444;line-height:1.8;">

          <h2 style="margin-top:0;color:#dc2626;">
            Hello ${customerName},
          </h2>

          <p>
            We regret to inform you that your recent order has been cancelled by our team.
          </p>

          <p>
            We sincerely apologize for any inconvenience this may cause.
            Below are the details of the cancelled order.
          </p>

          <table style="width:100%;border-collapse:collapse;margin:30px 0;">

            <tr style="background:#f8f8f8;">
              <td style="padding:12px;border:1px solid #eee;">
                <strong>Order Reference</strong>
              </td>

              <td style="padding:12px;border:1px solid #eee;">
                #${orderId}
              </td>
            </tr>

            <tr>
              <td style="padding:12px;border:1px solid #eee;">
                <strong>Status</strong>
              </td>

              <td style="padding:12px;border:1px solid #eee;color:#dc2626;font-weight:bold;">
                ❌ Cancelled
              </td>
            </tr>

          </table>

          <div style="background:#fef2f2;border-left:4px solid #dc2626;padding:18px;margin:30px 0;">

            <h3 style="margin-top:0;color:#dc2626;">
              Reason for Cancellation
            </h3>

            <p style="margin-bottom:0;">
              ${reason}
            </p>

          </div>

          <div style="background:#faf7f4;border-radius:10px;padding:20px;margin-top:30px;">

            <h3 style="margin-top:0;color:#8b4a1f;">
              Need Assistance?
            </h3>

            <p>
              If you believe this cancellation was made in error or you would
              like further clarification, simply reply to this email and our
              support team will gladly assist you.
            </p>

            <p style="margin-bottom:0;">
              We appreciate your understanding and hope to serve you again soon.
            </p>

          </div>

          <p style="margin-top:40px;">
            Kind Regards,<br/>
            <strong>M&K Clothing Team</strong>
          </p>

        </div>

        <!-- Footer -->
        <div style="background:#f8f8f8;padding:20px;text-align:center;color:#888;font-size:13px;">
          © ${new Date().getFullYear()} M&K Clothing. All rights reserved.
        </div>

      </div>
      `,
    });

    console.log('Deleted order email dispatched successfully.');

    return {
      success: true,
    };
  } catch (error) {
    console.error('Deleted order email error:', error);

    return {
      success: false,
      error: error.message,
    };
  }
};

export const sendAdminApprovalRequestEmail = async ({
  applicantName,
  applicantEmail,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: password,
      },
    });

    await transporter.sendMail({
      from: `"M&K Clothing" <${email}>`,
      to: email, // Send only to the Super Admin

      subject: `New Admin Access Request • ${applicantName}`,

      html: `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:650px;margin:auto;background:#ffffff;border:1px solid #ececec;border-radius:12px;overflow:hidden;">

        <div style="background:#111827;padding:30px;text-align:center;color:white;">
          <h1 style="margin:0;">
            M&K Clothing
          </h1>

          <p style="margin-top:8px;color:#d1d5db;">
            Administrator Access Request
          </p>
        </div>

        <div style="padding:35px;line-height:1.8;color:#444;">

          <h2 style="margin-top:0;">
            New Admin Registration Request
          </h2>

          <p>
            A new user has successfully verified their email address and is requesting
            administrator access to the M&K dashboard.
          </p>

          <table style="width:100%;border-collapse:collapse;margin:30px 0;">

            <tr style="background:#f8f8f8;">
              <td style="padding:12px;border:1px solid #eee;">
                <strong>Name</strong>
              </td>

              <td style="padding:12px;border:1px solid #eee;">
                ${applicantName}
              </td>
            </tr>

            <tr>
              <td style="padding:12px;border:1px solid #eee;">
                <strong>Email</strong>
              </td>

              <td style="padding:12px;border:1px solid #eee;">
                ${applicantEmail}
              </td>
            </tr>

            <tr style="background:#f8f8f8;">
              <td style="padding:12px;border:1px solid #eee;">
                <strong>Status</strong>
              </td>

              <td style="padding:12px;border:1px solid #eee;color:#d97706;font-weight:bold;">
                Pending Approval
              </td>
            </tr>

          </table>

          <div style="background:#fffbeb;border-left:4px solid #f59e0b;padding:18px;margin:30px 0;">

            <h3 style="margin-top:0;color:#b45309;">
              Action Required
            </h3>

            <p style="margin-bottom:0;">
              Review this request from the Admin Dashboard.
              If approved, the user's role will automatically be updated to
              <strong>Admin</strong>.
            </p>

          </div>

          <div style="text-align:center;margin:40px 0;">

            <a
              href="https://mkclothing-kna2.vercel.app/dashboard/admin-requests"
              style="
                display:inline-block;
                padding:14px 30px;
                background:#111827;
                color:#fff;
                text-decoration:none;
                border-radius:8px;
                font-weight:bold;
              "
            >
              Review Request
            </a>

          </div>

        </div>

        <div style="background:#f8f8f8;padding:20px;text-align:center;color:#888;font-size:13px;">
          © ${new Date().getFullYear()} M&K Clothing. All rights reserved.
        </div>

      </div>
      `,
    });

    console.log('Admin approval request email sent.');

    return {
      success: true,
    };
  } catch (error) {
    console.error('Admin approval request email error:', error);

    return {
      success: false,
      error: error.message,
    };
  }
};
