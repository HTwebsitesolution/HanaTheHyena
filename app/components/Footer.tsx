import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-green-200/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-900/5 to-transparent" />
      
      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {/* Brand Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 via-sky-500 to-orange-500 p-1 shadow-lg">
                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-600 to-orange-600">
                  <Image
                    src="/HanaTheHyena website inside logo.png"
                    alt="Hana the Hyena"
                    width={32}
                    height={32}
                    className="h-full w-full object-contain p-1"
                  />
                </div>
              </div>
              <div>
                <p className="font-bold text-base text-white">
                  Hana the Hyena
                </p>
                <p className="text-xs text-stone-400">
                  The Hyena Who Went To Dinner
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-stone-400">
              A heartwarming Ethiopian children&apos;s story about courage, friendship, and belonging.
            </p>
          </div>

          {/* Authors & Publisher */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">About</h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p>
                Created by <span className="font-semibold text-stone-300">Joseph Afolabi</span> &amp;{" "}
                <span className="font-semibold text-stone-300">Feven Teshome</span>
              </p>
              <p>
                Published by{" "}
                <a
                  href="https://habeshapress.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-green-400 underline underline-offset-2 transition-colors hover:text-green-300"
                >
                  Habesha Press
                </a>
              </p>
              <p className="pt-2 text-stone-500">
                © {new Date().getFullYear()} Habesha Press. All rights reserved.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">Explore</h4>
            <nav className="flex flex-col gap-2 text-xs">
              <Link
                href="/the-story"
                className="text-stone-400 transition-colors hover:text-green-400"
              >
                The Story →
              </Link>
              <Link
                href="/meet-hana"
                className="text-stone-400 transition-colors hover:text-orange-400"
              >
                Meet Hana →
              </Link>
              <Link
                href="/play"
                className="text-stone-400 transition-colors hover:text-sky-400"
              >
                Play &amp; Activities →
              </Link>
              <Link
                href="/parents-teachers"
                className="text-stone-400 transition-colors hover:text-green-400"
              >
                For Parents &amp; Teachers →
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 border-t border-stone-800/50 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-stone-500 sm:flex-row">
            <p className="text-center sm:text-left">
              Set in Ethiopia 🇪🇹 · For children aged 6+
            </p>
            <div className="flex items-center gap-4">
              <span className="text-stone-600">Made with</span>
              <span className="text-red-400 animate-pulse">❤️</span>
              <span className="text-stone-600">for young readers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
