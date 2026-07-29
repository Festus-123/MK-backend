export const orderConfirmationTemplate = ({
  customerName,
  orderId,
  totalAmount,
}) => `
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
      Kind regards,<br/>
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
`;