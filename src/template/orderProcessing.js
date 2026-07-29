export const orderProcessingTemplate = ({
    customerName,
    orderId,
    totalAmount,
}) => `
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
      `