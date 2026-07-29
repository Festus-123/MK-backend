export const orderShippedTemplate = ({
    customerName,
    orderId,
    totalAmount,
}) => `
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
      `