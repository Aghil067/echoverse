'use client';
import React from 'react';
import Image from 'next/image';
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-100 px-4 py-10">
      <div className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col sm:flex-row">
        <div className="relative w-full sm:w-1/2 h-60 sm:h-auto hidden sm:block">
          <Image
            src="https://media.istockphoto.com/id/1365816972/vector/speech-bubble-conversation-layered-abstract-background.jpg?s=612x612&w=0&k=20&c=9uHYdIZj7yG6f5dN89DUTm0t9QurDawbbzJrYnB72J8="
            alt="Login Illustration"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full sm:w-1/2 p-8 sm:p-12 flex flex-col justify-center text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">Welcome!</h1>
          <p className="text-sm text-gray-600 mb-8">Please login to continue.</p>

          <button
            onClick={() => signIn('google')}
            className="w-full sm:w-auto bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-600 transition px-6 py-3 text-white font-semibold rounded-lg"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
