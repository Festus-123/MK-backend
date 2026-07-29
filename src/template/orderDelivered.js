export const orderDeliveredTemplate = ({
    customerName,
    orderId,
    totalAmount,
}) => `
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
      `