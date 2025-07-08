'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

export default function PostDetailPage() {
  const { id } = useParams();
  const { data: session } = useSession();
  const [post, setPost] = useState(null);
  const [reply, setReply] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`https://echoverse-3j45.onrender.com/api/posts/${id}`);
      const data = await res.json();
      setPost(data);
    };
    fetchPost();
  }, [id]);

  const handleReply = async () => {
    if (!reply.trim()) return;
    await fetch(`http://localhost:5000/api/posts/${id}/reply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: session?.user.name, text: reply }),
    });
    setReply('');
    const res = await fetch(`http://localhost:5000/api/posts/${id}`);
    const data = await res.json();
    setPost(data);
  };

  if (!post) return <p className="p-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-20">
      <div className="bg-white p-6 rounded shadow max-w-3xl mx-auto">
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p className="text-sm text-gray-500">by {post.username} • {new Date(post.createdAt).toLocaleString()}</p>
        <p className="mt-4 text-gray-800">{post.content}</p>

        <hr className="my-6" />

        <h3 className="text-lg font-semibold mb-2">Replies:</h3>
        <div className="space-y-2">
          {post.replies.length > 0 ? (
            post.replies.map((reply, idx) => (
              <div key={idx} className="bg-gray-100 p-2 rounded">
                <p className="text-sm"><strong>{reply.username}:</strong> {reply.text}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No replies yet.</p>
          )}
        </div>

        <div className="mt-6 flex gap-2">
          <input
            type="text"
            placeholder="Write a reply..."
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="flex-1 px-4 py-2 border rounded"
          />
          <button
            onClick={handleReply}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}
