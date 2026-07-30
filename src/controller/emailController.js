// import {
//   sendOrderConfirmationEmail,
//   sendOrderProcessingEmail,
//   sendOrderShippedEmail,
//   sendOrderDeliveredEmail,
//   sendDeletedOrderEmail
// } from '../services/emailServices.js';

// export const handleSendEmail = async (req, res) => {
//   const { emailType, customerEmail, customerName, customerOrderId, totalAmount, reason } =
//     req.body;

//     // console.log("req.body:", req.body)
//   // ==========================
//   // Validation
//   // ==========================

//   if (!emailType || !customerEmail || !customerName || !customerOrderId) {
//     return res.status(400).json({
//       success: false,
//       error:
//         'Missing required fields: emailType, customerEmail, customerName or customOrderId.',
//     });
//   }

//   try {
//     switch (emailType) {
//       case 'confirmation':
//         if (!totalAmount) {
//           return res.status(400).json({
//             success: false,
//             error: 'totalAmount is required for confirmation emails.',
//           });
//         }

//         await sendOrderConfirmationEmail({
//           customerEmail,
//           customerName,
//           orderId: customerOrderId,
//           totalAmount,
//         });

//         break;

//       case 'processing':
//         await sendOrderProcessingEmail({
//           customerEmail,
//           customerName,
//           orderId: customerOrderId,
//         });

//         break;

//       case 'shipped':
//         await sendOrderShippedEmail({
//           customerEmail,
//           customerName,
//           orderId: customerOrderId,
//         });

//         break;

//       case 'delivered':
//         await sendOrderDeliveredEmail({
//           customerEmail,
//           customerName,
//           orderId: customerOrderId,
//         });

//         break;
      
//       case 'deleted':
//         if (!reason) {
//           return res.status(400).json({
//             success: false,
//             error: 'totalAmount is required for confirmation emails.',
//           });
//         }
//         await sendDeletedOrderEmail({
//           customerEmail,
//           customerName,
//           orderId: customerOrderId,
//           reason
//         })

//         break;

//       default:
//         return res.status(400).json({
//           success: false,
//           error: `Unsupported email type: ${emailType}`,
//         });
//     }

//     return res.status(200).json({
//       success: true,
//       message: `${emailType} email sent successfully.`,
//     });
//   } catch (error) {
//     console.error('Email controller error:', error);

//     return res.status(500).json({
//       success: false,
//       error: error.message || 'Unable to send email.',
//     });
//   }
// };


import {
  sendOrderConfirmationEmail,
  sendOrderProcessingEmail,
  sendOrderShippedEmail,
  sendOrderDeliveredEmail,
  sendOrderDeletedEmial,
  sendAdminApprovalRequestEmail,
} from "../services/emailServices.js";  

export const handleSendEmail = async (req, res) => {
  const {
    emailType,

    customerEmail,
    customerName,
    customerOrderId,
    totalAmount,

    applicantEmail,
    applicantName,

    reason,
  } = req.body;

  try {
    if (!emailType) {
      return res.status(400).json({
        success: false,
        error: "emailType is required.",
      });
    }

    switch (emailType) {
      // ============================
      // ORDER CONFIRMATION
      // ============================

      case "confirmation": {
        if (
          !customerEmail ||
          !customerName ||
          !customerOrderId ||
          totalAmount === undefined
        ) {
          return res.status(400).json({
            success: false,
            error:
              "customerEmail, customerName, customerOrderId and totalAmount are required.",
          });
        }

        await sendOrderConfirmationEmail({
          customerEmail,
          customerName,
          orderId: customerOrderId,
          totalAmount,
        });

        break;
      }

      // ============================
      // ORDER PROCESSING
      // ============================

      case "processing": {
        if (
          !customerEmail ||
          !customerName ||
          !customerOrderId
        ) {
          return res.status(400).json({
            success: false,
            error:
              "customerEmail, customerName and customerOrderId are required.",
          });
        }

        await sendOrderProcessingEmail({
          customerEmail,
          customerName,
          orderId: customerOrderId,
        });

        break;
      }

      // ============================
      // ORDER SHIPPED
      // ============================

      case "shipped": {
        if (
          !customerEmail ||
          !customerName ||
          !customerOrderId
        ) {
          return res.status(400).json({
            success: false,
            error:
              "customerEmail, customerName and customerOrderId are required.",
          });
        }

        await sendOrderShippedEmail({
          customerEmail,
          customerName,
          orderId: customerOrderId,
        });

        break;
      }

      // ============================
      // ORDER DELIVERED
      // ============================

      case "delivered": {
        if (
          !customerEmail ||
          !customerName ||
          !customerOrderId
        ) {
          return res.status(400).json({
            success: false,
            error:
              "customerEmail, customerName and customerOrderId are required.",
          });
        }

        await sendOrderDeliveredEmail({
          customerEmail,
          customerName,
          orderId: customerOrderId,
        });

        break;
      }

      // ============================
      // ORDER CANCELLED
      // ============================

      case "deleted": {
        if (
          !customerEmail ||
          !customerName ||
          !customerOrderId ||
          !reason
        ) {
          return res.status(400).json({
            success: false,
            error:
              "customerEmail, customerName, customerOrderId and reason are required.",
          });
        }

        await sendOrderDeletedEmial({
          customerEmail,
          customerName,
          orderId: customerOrderId,
          reason,
        });

        break;
      }

      // ============================
      // ADMIN REQUEST
      // ============================

      case "admin_request": {
        if (!applicantEmail || !applicantName) {
          return res.status(400).json({
            success: false,
            error:
              "applicantEmail and applicantName are required.",
          });
        }

        await sendAdminApprovalRequestEmail({
          applicantEmail,
          applicantName,
        });

        break;
      }

      // ============================
      // UNKNOWN EMAIL TYPE
      // ============================

      default:
        return res.status(400).json({
          success: false,
          error: `Unsupported email type: ${emailType}`,
        });
    }

    return res.status(200).json({
      success: true,
      message: `${emailType} email sent successfully.`,
    });
  } catch (error) {
    console.error("Email controller error:", error);

    return res.status(500).json({
      success: false,
      error: error.message || "Unable to send email.",
    });
  }
};  