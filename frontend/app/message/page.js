'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function FeedPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/posts');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-20">
      <div className="flex justify-between items-center mb-6">
        <Link href="/create">
          <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5">
            ➕ Create Post
          </button>
        </Link>
      </div>

      <div className="space-y-4">
        {posts.length === 0 && (
          <p className="text-gray-500">No posts yet. Be the first to post!</p>
        )}

        {posts.map((post) => (
          <div key={post._id} className="bg-white p-5 rounded shadow">
            <h2 className="text-lg font-bold text-gray-800">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              by {post.username || 'Anonymous'} • {new Date(post.createdAt).toLocaleString()}
            </p>
            <p className="text-gray-700 line-clamp-3">{post.content}</p>

            <div className="mt-4">
              <Link href={`/message/${post._id}`}>
                <button className="text-blue-600 hover:underline font-medium text-sm">
                  💬 Reply
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
