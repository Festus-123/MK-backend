export const adminApprovalRequestTemplate = async ({
  applicantName,
  applicantEmail,
}) => `
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
      `