'use client';

import Navbar from '@/components/Navbar';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Link from 'next/link';

type LoginForm = { email: string; password: string };

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const [msg, setMsg] = useState<string | null>(null);

  return (
    <main>
      <Navbar />
      <section className="container mx-auto px-4 py-12 max-w-lg">
        <h1 className="text-3xl font-semibold mb-6">Welcome back</h1>
        <form
          onSubmit={handleSubmit(() => setMsg('Mock login success — redirecting…'))}
          className="space-y-4 bg-white p-6 rounded-2xl shadow"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="you@example.com"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Your password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-full bg-teal-900 text-white py-2.5 hover:bg-black transition"
          >
            Login
          </button>

          {msg && <p className="text-sm text-green-700">{msg}</p>}

          <p className="text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="underline text-teal-800">Create one</Link>
          </p>
        </form>
      </section>
    </main>
  );
}
