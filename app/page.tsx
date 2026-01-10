import Link from "next/link";

export const metadata = {
  title: "Hana the Hyena – The Hyena Who Went To Dinner | Official Site",
  description:
    "Official site for The Hyena Who Went To Dinner by Joseph Afolabi and Feven Teshome. Meet Hana the Hyena, discover the story, and explore free activities and resources for children, parents, and teachers.",
};

export default function HomePage() {
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
                Official site for <em>The Hyena Who Went To Dinner</em>
              </p>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm font-medium text-stone-700 sm:flex">
            <Link
              href="/the-story"
              className="hover:text-amber-700 transition-colors"
            >
              The Story
            </Link>
            <Link
              href="/meet-hana"
              className="hover:text-amber-700 transition-colors"
            >
              Meet Hana
            </Link>
            <Link
              href="/play"
              className="hover:text-amber-700 transition-colors"
            >
              Play &amp; Activities
            </Link>
            <Link
              href="/parents-teachers"
              className="hover:text-amber-700 transition-colors"
            >
              For Parents &amp; Teachers
            </Link>
          </nav>

          {/* Mobile nav placeholder (simple link to Play for now) */}
          <div className="flex items-center gap-2 sm:hidden">
            <Link
              href="/play"
              className="rounded-full bg-amber-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-amber-700"
            >
              Play with Hana
            </Link>
          </div>
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

      {/* About the Book */}
      <section className="border-b border-amber-100 bg-white/90">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.4fr,1fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
                About the book
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-800">
                In <em>The Hyena Who Went To Dinner</em>, Hana the Hyena, a young
                hyena from Harar, dreams of visiting Addis Ababa. When she
                finally reaches the big city, everything feels loud, fast, and
                unfamiliar. For a moment, she wonders if she made a mistake.
              </p>
              <p className="mt-3 text-base leading-relaxed text-stone-800">
                Everything changes when a kind family notices her, smiles, and
                invites her to share their dinner table. Around soft injera,
                spicy doro wat, and tender gomen besiga, Hana discovers new
                flavours, new friends, and a new kind of courage. By sharing her
                own traditions too, she learns that even when we are different,
                we can still belong.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-amber-100 bg-amber-50/60 p-5 text-sm text-stone-800">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-800">
                Why children (and adults) love it
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-amber-700" />
                  <span>
                    A brave, funny animal character children can root for.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-amber-700" />
                  <span>
                    Repeating lines and rhythm that invite children to join in.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-amber-700" />
                  <span>
                    A gentle way to explore courage, kindness, and trying new
                    things.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-amber-700" />
                  <span>
                    Rich Ethiopian setting that brings real places and food
                    into children&apos;s imaginations.
                  </span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/the-story"
                  className="inline-flex text-sm font-semibold text-amber-800 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                >
                  Learn more about the story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight sections: Meet Hana / Play / Parents & Teachers */}
      <section className="border-b border-emerald-100 bg-emerald-50/40">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            Explore Hana&apos;s world
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-stone-700">
            Whether you are a child, a parent, or a teacher, there is more to
            discover. Meet Hana, play through her adventure, and use the free
            resources to bring the story to life.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Meet Hana */}
            <article className="flex flex-col rounded-2xl border border-emerald-100 bg-white/90 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-stone-900">
                Meet Hana
              </h3>
              <p className="mt-2 text-sm text-stone-700">
                Find out who Hana is, what she dreams about, and why she decides
                to leave Harar for the bright lights of Addis Ababa.
              </p>
              <div className="mt-4">
                <Link
                  href="/meet-hana"
                  className="text-sm font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-900"
                >
                  Meet Hana →
                </Link>
              </div>
            </article>

            {/* Play & Activities */}
            <article className="flex flex-col rounded-2xl border border-emerald-100 bg-white/90 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-stone-900">
                Play &amp; Activities
              </h3>
              <p className="mt-2 text-sm text-stone-700">
                Download free colouring pages, puzzles, and creative worksheets
                based on Hana&apos;s journey from Harar to Addis Ababa.
              </p>
              <div className="mt-4">
                <Link
                  href="/play"
                  className="text-sm font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-900"
                >
                  Visit the play page →
                </Link>
              </div>
            </article>

            {/* Parents & Teachers */}
            <article className="flex flex-col rounded-2xl border border-emerald-100 bg-white/90 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-stone-900">
                For Parents &amp; Teachers
              </h3>
              <p className="mt-2 text-sm text-stone-700">
                Access a one-page discussion guide, theme ideas, and simple
                activities to support learning about courage, belonging, and
                Ethiopian culture.
              </p>
              <div className="mt-4">
                <Link
                  href="/parents-teachers"
                  className="text-sm font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-900"
                >
                  See the guide →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Call to action / Book link */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="rounded-3xl border border-amber-100 bg-amber-50/70 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-stone-900 sm:text-2xl">
                  Ready to share <em>The Hyena Who Went To Dinner</em>?
                </h2>
                <p className="mt-2 text-sm text-stone-700">
                  Bring Hana the Hyena&apos;s adventure into your home or
                  classroom, then return here for free activities, discussion
                  ideas, and future adventures with Hana.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:items-end">
                <a
                  href="https://www.amazon.com/s?k=the+hyena+who+went+to+dinner&i=stripbooks-intl-ship&crid=1DQDFPI1HMPRQ&sprefix=the+hyena+who+went+to+dinner%2Cstripbooks-intl-ship%2C209&ref=nb_sb_noss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-amber-300/50 transition hover:bg-amber-700"
                >
                  View the book on Amazon
                  <span aria-hidden className="ml-2">
                    ↗
                  </span>
                </a>
                <p className="text-[11px] text-stone-500">
                  Link will open in a new tab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-stone-300 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <p className="font-semibold text-stone-100">
              Hana the Hyena · The Hyena Who Went To Dinner
            </p>
            <p className="mt-1 text-[11px] text-stone-400">
              Created by Joseph Afolabi &amp; Feven Teshome. Published by{" "}
              <a
                href="https://habeshapress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 underline underline-offset-2 hover:text-amber-200"
              >
                Habesha Press
              </a>
              .
            </p>
          </div>
          <div className="text-[11px] text-stone-500">
            © {new Date().getFullYear()} Habesha Press. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
