'use client';
import React from 'react';
import Image from 'next/image';
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-indigo-300 to-indigo-400 px-4 py-10">
      <div className="w-full max-w-5xl bg-white/30 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        {/* Left Illustration */}
        <div className="relative w-full md:w-1/2 h-48 md:h-auto">
          <Image
            src="https://media.istockphoto.com/id/1365816972/vector/speech-bubble-conversation-layered-abstract-background.jpg?s=612x612&w=0&k=20&c=9uHYdIZj7yG6f5dN89DUTm0t9QurDawbbzJrYnB72J8="
            alt="Login Illustration"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 md:p-14 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 drop-shadow-sm">
            Welcome Back
          </h1>
          <p className="text-sm sm:text-base text-gray-700 mb-8 sm:mb-10">
            Sign in to continue to your account and explore more.
          </p>

          <button
            onClick={() => signIn('google')}
            className="flex items-center justify-center gap-3 w-full sm:w-auto bg-white text-gray-800 font-medium px-5 sm:px-6 py-3 rounded-lg shadow-md hover:shadow-lg border border-gray-200 transition hover:scale-105 active:scale-95"
          >
            <FcGoogle className="text-xl sm:text-2xl" />
            <span className="text-sm sm:text-base">Sign in with Google</span>
          </button>

          <p className="text-xs sm:text-sm text-gray-500 mt-6 sm:mt-8 leading-relaxed">
            By continuing, you agree to our{" "}
            <a href="#" className="text-indigo-700 hover:underline">Terms</a> and{" "}
            <a href="#" className="text-indigo-700 hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
