import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import MobileMenu from "./components/MobileMenu";

const WhereIsHana = dynamic(() => import("./components/WhereIsHana"), {
  ssr: false,
  loading: () => (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-sky-900 via-sky-950 to-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Where is Hana?
          </h2>
        </div>
      </div>
    </section>
  ),
});

export const metadata = {
  title: "Hana the Hyena – The Hyena Who Went To Dinner | Official Site",
  description:
    "Official site for The Hyena Who Went To Dinner by Joseph Afolabi and Feven Teshome. Meet Hana the Hyena, discover the story, and explore free activities and resources for children, parents, and teachers.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-green-50/40 to-amber-50/30 text-stone-900">
      {/* Header - Colorful & Child-Friendly - BIGGER! */}
      <header className="sticky top-0 z-30 border-b-2 border-green-300/50 bg-gradient-to-r from-green-50 via-sky-50 to-amber-50 backdrop-blur-md shadow-lg shadow-green-200/30">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
          {/* Logo Section - BIGGER & More Playful */}
          <Link href="/" className="group flex items-center gap-4 transition-transform hover:scale-105 active:scale-95">
            <div className="relative">
              <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-green-400 via-sky-400 to-orange-400 p-1 shadow-xl shadow-green-400/50 group-hover:shadow-2xl group-hover:shadow-green-400/70 transition-all group-hover:rotate-3">
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 via-sky-500 to-orange-500 animate-float">
                  <Image
                    src="/HanaTheHyena website inside logo.png"
                    alt="Hana the Hyena"
                    width={96}
                    height={96}
                    className="h-full w-full object-contain p-2"
                    priority
                  />
                </div>
              </div>
              {/* BIGGER Floating sparkle effects */}
              <div className="absolute -right-1 -top-1 h-4 w-4 sm:h-5 sm:w-5 animate-sparkle rounded-full bg-orange-400 shadow-xl shadow-orange-400/70" />
              <div className="absolute -bottom-1 -left-1 h-3.5 w-3.5 sm:h-4 sm:w-4 animate-sparkle delay-75 rounded-full bg-green-400 shadow-lg shadow-green-400/60" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-green-600 via-sky-600 to-orange-600 bg-clip-text text-transparent group-hover:from-green-500 group-hover:via-sky-500 group-hover:to-orange-500 transition-all">
                Hana the Hyena
              </p>
              <p className="text-sm sm:text-base font-medium text-green-600 animate-pulse mt-0.5">
                Adventure awaits! 🌟
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - BIGGER Colorful Pills */}
          <nav className="hidden items-center gap-4 sm:flex">
            <Link
              href="/the-story"
              className="group relative rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-green-400/50 transition-all hover:scale-110 hover:shadow-xl hover:shadow-green-400/70"
            >
              <span className="relative z-10 flex items-center gap-2 text-lg">
                📚 The Story
              </span>
            </Link>
            <Link
              href="/meet-hana"
              className="group relative rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-400/50 transition-all hover:scale-110 hover:shadow-xl hover:shadow-orange-400/70"
            >
              <span className="relative z-10 flex items-center gap-2 text-lg">
                <Image
                  src="/HanaTheHyena website inside logo.png"
                  alt="Hana"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
                Meet Hana
              </span>
            </Link>
            <Link
              href="/play"
              className="group relative rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-sky-400/50 transition-all hover:scale-110 hover:shadow-xl hover:shadow-sky-400/70"
            >
              <span className="relative z-10 flex items-center gap-2 text-lg">
                🎨 Play
              </span>
            </Link>
            <Link
              href="/parents-teachers"
              className="group relative rounded-full border-2 border-green-300 bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-3.5 text-base font-bold text-green-700 shadow-md transition-all hover:scale-110 hover:border-green-400 hover:bg-gradient-to-r hover:from-green-100 hover:to-emerald-100"
            >
              <span className="relative z-10 flex items-center gap-2 text-lg">
                👩‍🏫 For Grown-ups
              </span>
            </Link>
          </nav>

          {/* Mobile Navigation - BIGGER Fun Hamburger Style */}
          <MobileMenu />
        </div>

        {/* BIGGER Decorative bottom border with animated stars */}
        <div className="relative h-2 overflow-hidden bg-gradient-to-r from-transparent via-green-300/60 via-sky-300/40 via-orange-300/40 to-transparent">
          <div className="absolute inset-0 flex items-center justify-center gap-4">
            <span className="text-base animate-sparkle">✨</span>
            <span className="text-sm animate-sparkle delay-75">⭐</span>
            <span className="text-base animate-sparkle delay-150">💫</span>
            <span className="text-sm animate-sparkle delay-75">⭐</span>
            <span className="text-base animate-sparkle">✨</span>
          </div>
        </div>
      </header>

      {/* HERO – Night-sky adventure style */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 text-white">
        {/* subtle star field */}
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute right-10 top-0 h-52 w-52 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 h-40 w-40 rounded-full bg-emerald-400/15 blur-3xl" />
          {/* dotted stars */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff33_1px,_transparent_0)] bg-[size:24px_24px] opacity-40" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:px-8">
          {/* Left: text + CTAs */}
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Hana the Hyena · An Ethiopian children&apos;s story
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              The Hyena Who Went To Dinner
            </h1>
            <p className="mt-3 text-xl sm:text-2xl font-semibold text-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,0.4)]">
              A heartwarming Ethiopian tale of courage, friendship &amp; food.
            </p>

            <p className="mt-5 max-w-xl text-sm sm:text-base text-slate-100/90">
              In <em>The Hyena Who Went To Dinner</em>, curious young Hana the Hyena leaves her quiet home in Harar for the bright
              lights of Addis Ababa, everything feels huge, loud, and unfamiliar.
              Just when she starts to feel very small, a kind family invites her home
              for dinner – and everything changes.
            </p>

            <p className="mt-3 max-w-xl text-xs sm:text-sm text-slate-200/80">
              Hana&apos;s story gently explores belonging, hospitality, and the joy of sharing
              food and culture.
            </p>

            {/* hero buttons like in the Rosie example */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/the-story"
                className="inline-flex items-center rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(34,197,94,0.5)] hover:bg-green-400 transition"
              >
                Read the story
                <span aria-hidden className="ml-2">📖</span>
              </Link>

              <Link
                href="/play"
                className="inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.55)] hover:bg-orange-400 transition"
              >
                Play &amp; activities
                <span aria-hidden className="ml-2">🎨</span>
              </Link>

              <Link
                href="/parents-teachers"
                className="inline-flex items-center rounded-full border border-sky-300/70 bg-sky-600/40 px-5 py-2.5 text-xs sm:text-sm font-semibold text-sky-50 shadow-[0_8px_20px_rgba(14,165,233,0.4)] hover:bg-sky-500/60 transition"
              >
                For parents &amp; teachers
              </Link>
            </div>

            <p className="mt-4 text-[11px] text-slate-300/80">
              For children aged 6+ · Perfect for bedtime, classrooms, and libraries.
            </p>
          </div>

          {/* Right: book / Hana illustration panel */}
          <div className="flex-1">
            <div className="relative mx-auto w-full max-w-md rounded-[32px] bg-slate-950/40 p-1 shadow-[0_24px_60px_rgba(0,0,0,0.7)] backdrop-blur-md">
              <div className="flex w-full flex-col overflow-hidden rounded-[28px] bg-gradient-to-b from-sky-700 via-sky-800 to-slate-950">
                {/* top tag */}
                <div className="flex items-center justify-between px-4 pt-4">
                  <span className="rounded-full bg-orange-500/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm">
                    Hana&apos;s big-city adventure
                  </span>
                  <span className="text-xl">🐾</span>
                </div>

                {/* Video hero content */}
                <div className="mt-4 flex flex-1 items-center justify-center px-4 pb-4">
                  <div className="relative w-full max-h-[480px] aspect-square overflow-hidden rounded-3xl bg-slate-900/80">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-contain"
                    >
                      <source src="/HanaTheHyena website hero section.mp4?v=2" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* meta */}
                <div className="flex items-center justify-between border-t border-sky-600/40 bg-slate-950/50 px-4 py-3 text-[11px] text-slate-200">
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
      <section className="border-b border-green-100 bg-white/90">
        <div className="mx-auto w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr,auto,1fr] lg:items-center">
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

            {/* Book Cover - Middle Column */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
                <div className="relative animate-book-float" style={{ backgroundColor: 'transparent' }}>
                  <Image
                    src="/The Hyena Who Went To Dinner - 3D cover.png"
                    alt="The Hyena Who Went To Dinner book cover"
                    width={360}
                    height={540}
                    className="w-full h-auto transition-transform hover:scale-105"
                    style={{
                      backgroundColor: 'transparent',
                      filter: 'drop-shadow(0 25px 50px -12px rgba(0, 0, 0, 0.25))',
                    }}
                    priority={false}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-green-100 bg-green-50/60 p-5 text-sm text-stone-800">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-green-800">
                Why children (and adults) love it
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-green-700" />
                  <span>
                    A brave, funny animal character children can root for.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-green-700" />
                  <span>
                    Repeating lines and rhythm that invite children to join in.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-green-700" />
                  <span>
                    A gentle way to explore courage, kindness, and trying new
                    things.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-green-700" />
                  <span>
                    Rich Ethiopian setting that brings real places and food
                    into children&apos;s imaginations.
                  </span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/the-story"
                  className="inline-flex text-sm font-semibold text-green-800 underline decoration-green-400 underline-offset-4 hover:text-green-900"
                >
                  Learn more about the story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight sections: Meet Hana / Play / Parents & Teachers */}
      <section className="border-b border-green-100 bg-green-50/40">
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
            <article className="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-orange-200/80 bg-gradient-to-br from-orange-50 via-amber-50/50 to-white p-6 shadow-lg shadow-orange-200/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-300/50 animate-slide-up">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-orange-200/40 to-amber-200/40 blur-2xl transition-all duration-500 group-hover:scale-150" />
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 p-2 shadow-lg shadow-orange-300/50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Image
                      src="/HanaTheHyena website inside logo.png"
                      alt="Hana"
                      width={32}
                      height={32}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Meet Hana
                  </h3>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-stone-700">
                  Find out who Hana is, what she dreams about, and why she decides
                  to leave Harar for the bright lights of Addis Ababa.
                </p>
                <Link
                  href="/meet-hana"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-300/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-400/60"
                >
                  Meet Hana
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </article>

            {/* Play & Activities */}
            <article className="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-sky-200/80 bg-gradient-to-br from-sky-50 via-blue-50/50 to-white p-6 shadow-lg shadow-sky-200/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-300/50 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-sky-200/40 to-blue-200/40 blur-2xl transition-all duration-500 group-hover:scale-150" />
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 text-2xl shadow-lg shadow-sky-300/50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    🎨
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Play &amp; Activities
                  </h3>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-stone-700">
                  Download free colouring pages, puzzles, and creative worksheets
                  based on Hana&apos;s journey from Harar to Addis Ababa.
                </p>
                <Link
                  href="/play"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-300/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-400/60"
                >
                  Visit the play page
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </article>

            {/* Parents & Teachers */}
            <article className="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-green-200/80 bg-gradient-to-br from-green-50 via-emerald-50/50 to-white p-6 shadow-lg shadow-green-200/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-300/50 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-green-200/40 to-emerald-200/40 blur-2xl transition-all duration-500 group-hover:scale-150" />
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 text-2xl shadow-lg shadow-green-300/50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    👩‍🏫
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    For Parents &amp; Teachers
                  </h3>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-stone-700">
                  Access a one-page discussion guide, theme ideas, and simple
                  activities to support learning about courage, belonging, and
                  Ethiopian culture.
                </p>
                <Link
                  href="/parents-teachers"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-green-300/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/60"
                >
                  See the guide
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Where is Hana / ballpit mini-game */}
      <WhereIsHana />

      {/* Call to action / Book link */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="rounded-3xl border border-green-200 bg-gradient-to-br from-green-50 via-sky-50 to-orange-50 p-6 sm:p-8">
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
                  className="inline-flex items-center justify-center rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-green-300/50 transition hover:bg-green-700"
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
                className="text-cyan-300 underline underline-offset-2 hover:text-cyan-200"
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
