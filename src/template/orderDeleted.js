export const orderDeletedTemplate = async ({
  customerEmail,
  customerName,
  orderId,
  reason,
}) => `
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
      `