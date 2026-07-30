
// import * as Brevo from "@getbrevo/brevo";
// import apiInstance from "../config/emailClient.js";

// import { orderConfirmationTemplate } from "../template/orderConfirmation.js";
// import { orderProcessingTemplate } from "../template/orderProcessing.js";
// import { orderShippedTemplate } from "../template/orderShipped.js";
// import { orderDeliveredTemplate } from "../template/orderDelivered.js";
// import { orderDeletedTemplate } from "../template/orderDeleted.js";
// import { adminApprovalRequestTemplate } from "../template/adminApproval.js";


// export const sendOrderConfirmationEmail = async ({
//   customerEmail,
//   customerName,
//   orderId,
//   totalAmount,
// }) => {
//   try {
//     const email = new Brevo.SendSmtpEmail();

//     email.sender = {
//       name: "M&K Clothing",
//       email: process.env.BREVO_SENDER_EMAIL,
//     };

//     // Send to customer
//     email.to = [
//       {
//         email: customerEmail,
//         name: customerName,
//       },
//     ];

//     // Optional: Send a copy to your business inbox
//     email.bcc = [
//       {
//         email: process.env.BREVO_SENDER_EMAIL,
//         name: "M&K Clothing",
//       },
//     ];

//     email.subject = `Your Order Has Been Confirmed • ${orderId}`;

//     email.htmlContent = orderConfirmationTemplate({
//       customerName,
//       orderId,
//       totalAmount,
//     });

//     await apiInstance.sendTransacEmail(email);

//     console.log("Order confirmation email dispatched successfully.");

//     return {
//       success: true,
//     };
//   } catch (error) {
//     console.error("Order confirmation email error:", error);

//     return {
//       success: false,
//       error: error.message,
//     };
//   }
// };

// export const sendOrderProcessingEmail = async ({
//   customerEmail,
//   customerName,
//   orderId,
// }) => {
//   try {
//     const email = new Brevo.SendSmtpEmail();

//     email.sender = {
//       name: "M&K Clothing",
//       email: process.env.BREVO_SENDER_EMAIL,
//     };

//     email.to = [
//       {
//         email: customerEmail,
//         name: customerName,
//       },
//     ];

//     email.bcc = [
//       {
//         email: process.env.BREVO_SENDER_EMAIL,
//         name: "M&K Clothing",
//       },
//     ];

//     email.subject = `Your Order is Being Processed • ${orderId}`;

//     email.htmlContent = orderProcessingTemplate({
//       customerName,
//       orderId,
//     });

//     await apiInstance.sendTransacEmail(email);

//     console.log("Order processing email dispatched successfully.");

//     return {
//       success: true,
//     };
//   } catch (error) {
//     console.error("Order processing email error:", error);

//     return {
//       success: false,
//       error: error.message,
//     };
//   }
// };

// export const sendOrderShippedEmail = async ({
//   customerEmail,
//   customerName,
//   orderId,
// }) => {
//   try {
//     const email = new Brevo.SendSmtpEmail();

//     email.sender = {
//       name: "M&K Clothing",
//       email: process.env.BREVO_SENDER_EMAIL,
//     };

//     email.to = [
//       {
//         email: customerEmail,
//         name: customerName,
//       },
//     ];

//     email.bcc = [
//       {
//         email: process.env.BREVO_SENDER_EMAIL,
//         name: "M&K Clothing",
//       },
//     ];

//     email.subject = `Your Order Has Been Shipped • ${orderId}`;

//     email.htmlContent = orderShippedTemplate({
//       customerName,
//       orderId,
//     });

//     await apiInstance.sendTransacEmail(email);

//     console.log("Order shipped email dispatched successfully.");

//     return {
//       success: true,
//     };
//   } catch (error) {
//     console.error("Order shipped email error:", error);

//     return {
//       success: false,
//       error: error.message,
//     };
//   }
// };

// export const sendDeletedOrderEmail = async ({
//   customerEmail,
//   customerName,
//   orderId,
//   reason,
// }) => {
//   try {
//     const email = new Brevo.SendSmtpEmail();

//     email.sender = {
//       name: "M&K Clothing",
//       email: process.env.BREVO_SENDER_EMAIL,
//     };

//     email.to = [
//       {
//         email: customerEmail,
//         name: customerName,
//       },
//     ];

//     email.bcc = [
//       {
//         email: process.env.BREVO_SENDER_EMAIL,
//         name: "M&K Clothing",
//       },
//     ];

//     email.subject = `Your Order Has Been Deleted • ${orderId}`;

//     email.htmlContent = orderDeletedTemplate({
//       customerName,
//       orderId,
//       reason,
//     });

//     await apiInstance.sendTransacEmail(email);

//     console.log("Order Deleted email dispatched successfully.");

//     return {
//       success: true,
//     };
//   } catch (error) {
//     console.error("Order Deleted email error:", error);

//     return {
//       success: false,
//       error: error.message,
//     };
//   }
// };

// export const sendOrderDeliveredEmail = async ({
//   customerEmail,
//   customerName,
//   orderId,
// }) => {
//   try {
//     const email = new Brevo.SendSmtpEmail();

//     email.sender = {
//       name: "M&K Clothing",
//       email: process.env.BREVO_SENDER_EMAIL,
//     };

//     email.to = [
//       {
//         email: customerEmail,
//         name: customerName,
//       },
//     ];

//     email.bcc = [
//       {
//         email: process.env.BREVO_SENDER_EMAIL,
//         name: "M&K Clothing",
//       },
//     ];

//     email.subject = `Your Order Has Been Delivered • ${orderId}`;

//     email.htmlContent = orderDeliveredTemplate({
//       customerName,
//       orderId,
//     });

//     await apiInstance.sendTransacEmail(email);

//     console.log("Order delivered email dispatched successfully.");

//     return {
//       success: true,
//     };
//   } catch (error) {
//     console.error("Order delivered email error:", error);

//     return {
//       success: false,
//       error: error.message,
//     };
//   }
// };

// export const sendAdminApprovalRequestEmail = async ({
//   applicantName,
//   applicantEmail,
// }) => {
//   try {
//     const email = new Brevo.SendSmtpEmail();

//     email.sender = {
//       name: "M&K Clothing",
//       email: process.env.BREVO_SENDER_EMAIL,
//     };

//     // Send to the store owner/admin
//     email.to = [
//       {
//         email: process.env.BREVO_SENDER_EMAIL,
//         name: "M&K Clothing",
//       },
//     ];

//     // Keep a copy with the applicant
//     email.bcc = [
//       {
//         email: applicantEmail,
//         name: applicantName,
//       },
//     ];

//     email.subject = `New Administrator Request • ${applicantName}`;

//     email.htmlContent = adminApprovalRequestTemplate({
//       applicantName,
//       applicantEmail,
//     });

//     await apiInstance.sendTransacEmail(email);

//     console.log("Admin approval request email dispatched successfully.");

//     return {
//       success: true,
//     };
//   } catch (error) {
//     console.error("Admin approval request email error:", error);

//     return {
//       success: false,
//       error: error.message,
//     };
//   }
// };

import { sendEmail } from "../config/emailClient.js";

import { orderConfirmationTemplate } from "../template/orderConfirmation.js";
import { orderProcessingTemplate } from "../template/orderProcessing.js";
import { orderShippedTemplate } from "../template/orderShipped.js";
import { orderDeliveredTemplate } from "../template/orderDelivered.js";
import { orderDeletedTemplate } from "../template/orderDeleted.js";
import { adminApprovalRequestTemplate } from "../template/adminApproval.js";

const sender = {
  name: "M&K Clothing",
  email: process.env.BREVO_SENDER_EMAIL,
};

const adminBcc = [
  {
    email: process.env.BREVO_SENDER_EMAIL,
    name: "M&K Clothing",
  },
];

/* ======================================================
   ORDER CONFIRMATION
====================================================== */

export const sendOrderConfirmationEmail = async ({
  customerEmail,
  customerName,
  orderId,
  totalAmount,
}) => {
  try {
    await sendEmail({
      sender,
      to: [
        {
          email: customerEmail,
          name: customerName,
        },
      ],
      bcc: adminBcc,
      subject: `Your Order Has Been Confirmed • ${orderId}`,
      htmlContent: orderConfirmationTemplate({
        customerName,
        orderId,
        totalAmount,
      }),
    });

    console.log("✅ Order confirmation email sent.");

    return { success: true };
  } catch (error) {
    console.error("Order confirmation email:", error);

    return {
      success: false,
      error: error.message,
    };
  }
};

/* ======================================================
   ORDER PROCESSING
====================================================== */

export const sendOrderProcessingEmail = async ({
  customerEmail,
  customerName,
  orderId,
}) => {
  try {
    await sendEmail({
      sender,
      to: [
        {
          email: customerEmail,
          name: customerName,
        },
      ],
      bcc: adminBcc,
      subject: `Your Order is now being Processed • ${orderId}`,
      htmlContent: orderProcessingTemplate({
        customerName,
        orderId,
      }),
    });

    console.log("✅ Processing email sent.");

    return { success: true };
  } catch (error) {
    console.error("Processing email:", error);

    return {
      success: false,
      error: error.message,
    };
  }
};

/* ======================================================
   ORDER SHIPPED
====================================================== */

export const sendOrderShippedEmail = async ({
  customerEmail,
  customerName,
  orderId,
}) => {
  try {
    await sendEmail({
      sender,
      to: [
        {
          email: customerEmail,
          name: customerName,
        },
      ],
      bcc: adminBcc,
      subject: `Your Order Has Been Shipped • ${orderId}`,
      htmlContent: orderShippedTemplate({
        customerName,
        orderId,
      }),
    });

    console.log("✅ Shipping email sent.");

    return { success: true };
  } catch (error) {
    console.error("Shipping email:", error);

    return {
      success: false,
      error: error.message,
    };
  }
};

/* ======================================================
   ORDER DELIVERED
====================================================== */

export const sendOrderDeliveredEmail = async ({
  customerEmail,
  customerName,
  orderId,
}) => {
  try {
    await sendEmail({
      sender,
      to: [
        {
          email: customerEmail,
          name: customerName,
        },
      ],
      bcc: adminBcc,
      subject: `Order Delivered Successfully • ${orderId}`,
      htmlContent: orderDeliveredTemplate({
        customerName,
        orderId,
      }),
    });

    console.log("✅ Delivery email sent.");

    return { success: true };
  } catch (error) {
    console.error("Delivery email:", error);

    return {
      success: false,
      error: error.message,
    };
  }
};

export const sendOrderDeletedEmial = async ({
  customerEmail,
  customerName,
  orderId,
  reason
}) => {
  try {
    await sendEmail({
      sender,
      to: [
        {
          email: customerEmail,
          name: customerName,
        },
      ],
      bcc: adminBcc,
      subject: `Order Delivered Successfully • ${orderId}`,
      htmlContent: orderDeletedTemplate({
        customerName,
        orderId,
        reason
      }),
    });

    console.log("✅ Deleted email sent.");

    return { success: true };
  } catch (error) {
    console.error("Deleted email:", error);

    return {
      success: false,
      error: error.message,
    };
  }
};

/* ======================================================
   ADMIN APPROVAL REQUEST
====================================================== */

export const sendAdminApprovalRequestEmail = async ({
  customerName,
  customerEmail,
  customerPhone,
  deliveryAddress,
  orderId,
  totalAmount,
}) => {
  try {
    await sendEmail({
      sender,
      to: [
        {
          email: process.env.BREVO_SENDER_EMAIL,
          name: "M&K Clothing",
        },
      ],
      subject: `New Order Awaiting Approval • ${orderId}`,
      htmlContent: adminApprovalRequestTemplate({
        customerName,
        customerEmail,
        customerPhone,
        deliveryAddress,
        orderId,
        totalAmount,
      }),
    });

    console.log("✅ Admin approval request sent.");

    return { success: true };
  } catch (error) {
    console.error("Admin approval email:", error);

    return {
      success: false,
      error: error.message,
    };
  }
};