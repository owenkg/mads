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

  const formId = process.env.NETLIFY_FORM_ID;
  const token = process.env.NETLIFY_ACCESS_TOKEN;

  if (!formId || !token) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'NETLIFY_FORM_ID and NETLIFY_ACCESS_TOKEN must be set in environment variables.' }),
    };
  }

  const res = await fetch(
    `https://api.netlify.com/api/v1/forms/${formId}/submissions?per_page=100`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  if (!res.ok) {
    return {
      statusCode: res.status,
      body: JSON.stringify({ error: `Netlify API error: ${res.status} ${res.statusText}` }),
    };
  }

  const submissions = await res.json();
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(submissions),
  };
}
