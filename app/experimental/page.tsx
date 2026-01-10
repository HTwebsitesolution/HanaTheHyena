import Link from "next/link";

export const metadata = {
  title: "Experimental Hero | Hana the Hyena",
  description: "Experimental hero section for testing new designs.",
};

export default function ExperimentalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-amber-50/40 text-stone-900">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-amber-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/90 text-lg font-bold text-white shadow-sm">
              H
            </div>
            <div>
              <p className="text-base font-semibold tracking-tight">
                Hana the Hyena
              </p>
              <p className="text-xs text-stone-500">
                Experimental Hero Section
              </p>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm font-medium text-stone-700 sm:flex">
            <Link
              href="/"
              className="hover:text-amber-700 transition-colors"
            >
              ← Back to Home
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO – Night-sky adventure with clear book title hierarchy */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-900 text-white">
        {/* subtle glow & stars */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute right-10 top-0 h-52 w-52 rounded-full bg-amber-400/18 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 h-40 w-40 rounded-full bg-emerald-400/18 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff33_1px,_transparent_0)] bg-[size:24px_24px] opacity-40" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:px-8">
          {/* LEFT – text and CTAs */}
          <div className="flex-1">
            {/* SMALL BRAND / SERIES LABEL */}
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Hana the Hyena · An Ethiopian children&apos;s story
            </p>

            {/* MAIN BOOK TITLE */}
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              The Hyena Who Went To Dinner
            </h1>

            {/* TAGLINE */}
            <p className="mt-3 text-lg sm:text-2xl font-semibold text-amber-300 drop-shadow-[0_0_18px_rgba(251,191,36,0.45)]">
              A heartwarming Ethiopian tale of courage, friendship &amp; food.
            </p>

            {/* INTRO PARAGRAPHS */}
            <p className="mt-5 max-w-xl text-sm sm:text-base text-slate-100/90">
              When curious young Hana leaves her quiet home in Harar for the bright
              lights of Addis Ababa, everything feels huge, loud, and unfamiliar.
              Just when she starts to feel very small, a kind family invites her home
              for dinner – and everything changes.
            </p>

            <p className="mt-3 max-w-xl text-xs sm:text-sm text-slate-200/85">
              Based on the picture book <em>The Hyena Who Went To Dinner</em>, Hana&apos;s
              story gently explores belonging, hospitality, and the joy of sharing
              food and culture.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/the-story"
                className="inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(0,0,0,0.45)] hover:bg-amber-300 transition"
              >
                Read the story
                <span aria-hidden className="ml-2">📖</span>
              </Link>

              <Link
                href="/play"
                className="inline-flex items-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(236,72,153,0.55)] hover:bg-pink-400 transition"
              >
                Play &amp; activities
                <span aria-hidden className="ml-2">🎨</span>
              </Link>

              <Link
                href="/parents-teachers"
                className="inline-flex items-center rounded-full border border-emerald-300/80 bg-emerald-600/45 px-5 py-2.5 text-xs sm:text-sm font-semibold text-emerald-50 shadow-[0_8px_22px_rgba(16,185,129,0.45)] hover:bg-emerald-500/65 transition"
              >
                For parents &amp; teachers
              </Link>
            </div>

            <p className="mt-4 text-[11px] text-slate-300/80">
              For children aged 6+ · Perfect for bedtime, classrooms, and libraries.
            </p>
          </div>

          {/* RIGHT – hero card with video */}
          <div className="flex-1">
            <div className="relative mx-auto h-80 w-full max-w-md rounded-[32px] bg-slate-950/40 p-1 shadow-[0_24px_60px_rgba(0,0,0,0.75)] backdrop-blur-md">
              <div className="flex h-full w-full flex-col overflow-hidden rounded-[28px] bg-gradient-to-b from-indigo-700 via-indigo-800 to-slate-950">
                {/* top tag */}
                <div className="flex items-center justify-between px-4 pt-4">
                  <span className="rounded-full bg-pink-500/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm">
                    Hana&apos;s big-city adventure
                  </span>
                  <span className="text-xl">🐾</span>
                </div>

                {/* video illustration area */}
                <div className="mt-4 flex flex-1 items-center justify-center px-4 pb-4">
                  <div className="relative h-full w-full max-h-56 overflow-hidden rounded-3xl bg-slate-900/80">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-contain"
                    >
                      <source src="/HanaTheHyena website hero section.mp4?v=3" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {/* soft glow overlay to match video/illustration feel */}
                    <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_#facc1533_0,_transparent_60%)]" />
                  </div>
                </div>

                {/* meta strip */}
                <div className="flex items-center justify-between border-t border-indigo-600/45 bg-slate-950/70 px-4 py-3 text-[11px] text-slate-200">
                  <p>
                    By <span className="font-semibold">Joseph Afolabi</span> &amp;{" "}
                    <span className="font-semibold">Feven Teshome</span>
                  </p>
                  <p className="italic text-emerald-300">Set in Ethiopia 🇪🇹</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the page sections can go here if needed */}
    </main>
  );
}
