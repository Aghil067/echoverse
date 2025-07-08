'use client';
import React from 'react';
import Image from 'next/image';
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="pt-10 min-h-screen flex flex-col items-center justify-center bg-indigo-100 text-slate-800">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-lg h-110">
        <div className="hidden sm:block w-1/2 relative">
          <Image
            src="https://media.istockphoto.com/id/1365816972/vector/speech-bubble-conversation-layered-abstract-background.jpg?s=612x612&w=0&k=20&c=9uHYdIZj7yG6f5dN89DUTm0t9QurDawbbzJrYnB72J8="
            alt="Login Illustration"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full sm:w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-2">Welcome!</h1>
          <p className="mb-10 font-medium">Please login to continue.</p>
          <button onClick={() => signIn('google')} className="p-3 rounded-lg bg-indigo-700 text-white text-lg font-semibold hover:bg-indigo-800 active:bg-indigo-500 transition duration-300">
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
