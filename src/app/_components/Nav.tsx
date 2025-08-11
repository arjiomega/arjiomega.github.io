"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const Nav = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <a href="/" className="inline-flex items-center">
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            Richard Joseph Omega
          </span>
        </a>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li><a href="#profile" className="font-medium tracking-wide text-gray-700 hover:text-purple-600">About</a></li>
          <li><a href="#experience" className="font-medium tracking-wide text-gray-700 hover:text-purple-600">Experience</a></li>
          <li><a href="#projects" className="font-medium tracking-wide text-gray-700 hover:text-purple-600">Projects</a></li>
          <li><a href="#contacts" className="font-medium tracking-wide text-gray-700 hover:text-purple-600">Contact</a></li>
        </ul>
        <div className="lg:hidden z-50 relative">
          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="p-2 transition duration-200 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Open Menu"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg className="w-7 h-7 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border rounded shadow-lg z-50 animate-fade-in">
              <div className="flex justify-between items-center px-4 pt-4 pb-2">
                <span className="text-lg font-bold text-gray-800">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 transition duration-200 rounded hover:bg-gray-200"
                  aria-label="Close Menu"
                >
                  <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="py-2 px-4 space-y-2">
                <li><a href="#profile" onClick={() => setIsMenuOpen(false)} className="block font-medium tracking-wide text-gray-700 hover:text-purple-600">About</a></li>
                <li><a href="#experience" onClick={() => setIsMenuOpen(false)} className="block font-medium tracking-wide text-gray-700 hover:text-purple-600">Experience</a></li>
                <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className="block font-medium tracking-wide text-gray-700 hover:text-purple-600">Projects</a></li>
                <li><a href="#contacts" onClick={() => setIsMenuOpen(false)} className="block font-medium tracking-wide text-gray-700 hover:text-purple-600">Contact</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
