'use client';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="backdrop-blur-md bg-white/5 border-b border-sky-500/30 shadow-md shadow-sky-900/20 px-8 py-4 flex justify-between items-center fixed w-full z-50">
      <div className="flex items-center gap-2">
        <MessageCircle className="text-sky-400 w-6 h-6 animate-pulse" />
        <Link href="/" className="text-2xl font-bold text-sky-400 hover:text-sky-300 transition duration-300">
          EchoVerse
        </Link>
      </div>

      <div className="relative flex items-center gap-6">
        <Link href="/" className="text-sm font-medium hover:text-sky-400 transition">Home</Link>
        <Link href="/" className="text-sm font-medium hover:text-sky-400 transition">About</Link>
        <Link href="/" className="text-sm font-medium hover:text-sky-400 transition">Contact</Link>

        {session?.user && (
          <div className="relative">
            <Image
              src={session.user.image}
              alt="profile"
              width={36}
              height={36}
              className="rounded-full border-2 border-sky-500 cursor-pointer"
              onClick={toggleDropdown}
            />

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4 z-50">
                <p className="text-sm font-semibold">{session.user.name}</p>
                <p className="text-xs text-gray-500">{session.user.email}</p>
                <button
                  onClick={() => signOut()}
                  className="mt-3 w-full bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
