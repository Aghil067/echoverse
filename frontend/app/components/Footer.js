import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="bg-gradient-to-r from-[#020617] to-[#0f172a] text-slate-300 text-center p-4">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-sky-400 font-semibold">EchoVerse</span>. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Made with <span className="text-red-400">❤️</span> by <span className="text-sky-400">EchoVerse Team</span>
        </p>
      </div>
      <div className="bg-[#020617] border-t border-sky-500/30 text-slate-500 text-center text-xs p-2">
        Privacy Policy | Terms of Service
      </div>
    </footer>
  );
};

export default Footer;
