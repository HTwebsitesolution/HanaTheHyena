"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Navigation - BIGGER Fun Hamburger Style */}
      <div className="flex items-center gap-3 sm:hidden">
        <Link
          href="/play"
          className="relative rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-400/50 transition-all active:scale-95"
        >
          🎨 Play
        </Link>
        <button
          aria-label="Menu"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-orange-500 text-white shadow-lg transition-all active:scale-95"
        >
          <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-b-2 border-green-300/50 bg-gradient-to-b from-green-50 via-sky-50 to-orange-50 shadow-xl sm:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4">
            <Link
              href="/the-story"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-3 text-center text-sm font-bold text-white shadow-lg shadow-green-400/50 transition-all active:scale-95"
            >
              📚 The Story
            </Link>
            <Link
              href="/meet-hana"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 text-center text-sm font-bold text-white shadow-lg shadow-orange-400/50 transition-all active:scale-95"
            >
              🦁 Meet Hana
            </Link>
            <Link
              href="/play"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-5 py-3 text-center text-sm font-bold text-white shadow-lg shadow-sky-400/50 transition-all active:scale-95"
            >
              🎨 Play
            </Link>
            <Link
              href="/parents-teachers"
              onClick={() => setIsOpen(false)}
              className="rounded-full border-2 border-green-300 bg-gradient-to-r from-green-50 to-emerald-50 px-5 py-3 text-center text-sm font-bold text-green-700 shadow-md transition-all active:scale-95"
            >
              👩‍🏫 For Grown-ups
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
