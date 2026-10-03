export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: 'Invalid request' };
  }

  if (!process.env.ADMIN_PASSWORD || body.password !== process.env.ADMIN_PASSWORD) {
    return { statusCode: 401, body: 'Unauthorized' };
  }

  const siteId = process.env.NETLIFY_SITE_ID;
  const token = process.env.NETLIFY_ACCESS_TOKEN;

  if (!siteId || !token) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'NETLIFY_SITE_ID and NETLIFY_ACCESS_TOKEN must be set.' }),
    };
  }

  // Fetch all submissions for the site, filtered to the rsvp form
  const res = await fetch(
    `https://api.netlify.com/api/v1/sites/${siteId}/submissions?per_page=100`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  if (!res.ok) {
    return {
      statusCode: res.status,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: `Netlify API error: ${res.status} ${res.statusText}` }),
    };
  }

  const all = await res.json();
  const rsvps = all.filter((s) => s.form_name === 'rsvp');

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rsvps),
  };
}
