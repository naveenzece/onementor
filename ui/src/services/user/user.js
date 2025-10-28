const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8001';

export async function createUser(userData) {
  try {
    const res = await fetch(`${API_BASE}/api/users/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('createUser error', err);
    return { message: 'Network error' };
  }
}
