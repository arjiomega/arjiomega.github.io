"use client"
import React, { useState } from "react";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <a href="#about" className="inline-flex items-center">
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
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 transition duration-200 rounded hover:bg-gray-200"
            aria-label="Open Menu"
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-50">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex justify-between mb-4">
                  <span className="text-xl font-bold text-gray-800">Menu</span>
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
                <ul className="space-y-4">
                  <li><a href="#profile" onClick={() => setIsMenuOpen(false)}>About</a></li>
                  <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
                  <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                  <li><a href="#contacts" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
