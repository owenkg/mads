// Triggered automatically by Netlify for every form submission.
export async function handler(event) {
  let payload;
  try {
    ({ payload } = JSON.parse(event.body));
  } catch {
    return { statusCode: 400 };
  }

  if (payload.form_name !== 'rsvp') return { statusCode: 200 };

  const { name, email, 'event-title': eventTitle, 'event-rsvp-deadline': deadline } = payload.data;

  if (!email) return { statusCode: 200 };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return { statusCode: 200 };
  }

  const deadlineText = deadline
    ? new Date(deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : 'a week before the event';

  const html = buildEmail({ name, eventTitle, deadlineText });

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Meridian at Dusk <hello@meridianatdusk.com>',
      to: [email],
      subject: `RSVP received — ${eventTitle ?? 'Meridian at Dusk Sessions'}`,
      html,
    }),
  });

  return { statusCode: 200 };
}

function buildEmail({ name, eventTitle, deadlineText }) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#1A0C04;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#1A0C04;">
  <tr>
    <td align="center" style="padding:48px 20px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#F2E0C0;">

        <!-- Header -->
        <tr>
          <td style="padding:40px 40px 28px;border-bottom:1px solid rgba(61,31,10,0.12);">
            <p style="margin:0 0 10px 0;font-family:Courier,monospace;font-size:9px;letter-spacing:0.3em;text-transform:uppercase;color:#C4412A;">
              Meridian at Dusk Sessions
            </p>
            <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:30px;font-weight:400;color:#1A0C04;line-height:1.2;">
              You're on the list.
            </h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px 40px 8px;">
            <p style="margin:0 0 20px;font-size:15px;line-height:1.75;color:#3D1F0A;">
              Hi ${name ? escapeHtml(name) : 'there'},
            </p>
            <p style="margin:0 0 28px;font-size:15px;line-height:1.75;color:#3D1F0A;">
              Your request for <strong>${eventTitle ? escapeHtml(eventTitle) : 'the next session'}</strong> has been received.
              We review all requests and confirm attendance by email — spaces are limited to 20 guests.
            </p>

            <!-- Details card -->
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid rgba(61,31,10,0.15);margin-bottom:28px;">
              <tr>
                <td style="padding:18px 24px;border-bottom:1px solid rgba(61,31,10,0.08);">
                  <p style="margin:0 0 5px;font-family:Courier,monospace;font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:#8A6040;">Session</p>
                  <p style="margin:0;font-size:14px;color:#1A0C04;">${eventTitle ? escapeHtml(eventTitle) : '—'}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:18px 24px;">
                  <p style="margin:0 0 5px;font-family:Courier,monospace;font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:#8A6040;">Confirmation by</p>
                  <p style="margin:0;font-size:14px;color:#C4412A;">${escapeHtml(deadlineText)}</p>
                </td>
              </tr>
            </table>

            <!-- House rules -->
            <p style="margin:0 0 14px;font-family:Courier,monospace;font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:#8A6040;">
              House Rules
            </p>
            <p style="margin:0 0 8px;font-size:13px;color:#3D1F0A;">· Invite only — your spot is non-transferable</p>
            <p style="margin:0 0 8px;font-size:13px;color:#3D1F0A;">· Valid photo ID required at entry</p>
            <p style="margin:0 0 8px;font-size:13px;color:#3D1F0A;">· No phones on the dance floor</p>
            <p style="margin:0 0 32px;font-size:13px;color:#3D1F0A;">· Comfortable shoes — we'll be outside</p>

            <p style="margin:0 0 8px;font-size:14px;line-height:1.7;color:#8A6040;">
              Questions? Reply to this email.
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px 28px;border-top:1px solid rgba(61,31,10,0.12);">
            <p style="margin:0;font-family:Courier,monospace;font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:#8A6040;">
              Pitch Blends &middot; Kampala, Uganda
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
