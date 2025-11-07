export const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000';

export type RegisterPayload = { name: string, email: string; password: string };
export type RegisterResponse = {
  message: string;
  data: { id: string; name: string; email: string; createdAt: string };
};

export async function registerUser(payload: RegisterPayload): Promise<RegisterResponse> {
  const res = await fetch(`${API_BASE}/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.message ?? 'Registration failed');
  }
  return res.json();
}
