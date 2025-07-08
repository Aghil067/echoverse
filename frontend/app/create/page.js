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
      const res = await fetch('http://localhost:5000/api/posts', {
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
    <div className="min-h-screen bg-white px-4 py-12 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white/60 backdrop-blur-xl border border-sky-200 shadow-xl text-gray-800 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-sky-800">📝 Create a New Post</h2>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            id="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter title"
            className="border p-2 rounded"
          />
          <textarea
            id="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Enter content"
            className="border p-2 rounded"
          />
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
