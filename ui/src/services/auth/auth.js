const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8001';

export async function sendOTP(email) {
  try {
    const res = await fetch(`${API_BASE}/api/auth/send-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (!res.ok) {
      return { error: data.error || 'Failed to send OTP' };
    }
    return data;
  } catch (err) {
    console.error('sendOTP error', err);
    return { error: 'Network error' };
  }
}

export async function verify(payload) {
  try {
    const res = await fetch(`${API_BASE}/api/auth/verify-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      return { error: data.error || 'Invalid OTP' };
    }
    return data;
  } catch (err) {
    console.error('verify error', err);
    return { error: 'Network error' };
  }
}
