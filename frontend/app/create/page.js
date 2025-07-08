'use client';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const CreatePostPage = () => {
  const [form, setForm] = useState({ title: '', content: '' });
  const { data: session } = useSession();
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!session) return;

    try {
      const res = await fetch('https://echoverse-3j45.onrender.com/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: form.title,
          content: form.content,
          username: session.user.name,
        }),
      });

      if (res.ok) {
        alert('Post created!');
        router.push('/message');
      } else {
        alert('Error creating post');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 flex justify-center items-center">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-6 sm:p-10 border border-blue-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-700">📝 Create a New Post</h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            id="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter title"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            id="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Enter content"
            rows={5}
            className="border border-gray-300 p-3 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Save Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
