import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../components/MobileMenu";

export const metadata = {
  title: "For Parents & Teachers | Hana the Hyena",
  description:
    "Discussion questions, curriculum links, and free printable resources to use The Hyena Who Went To Dinner at home or in the classroom.",
};

export default function ParentsTeachersPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header - Consistent with other pages */}
      <header className="sticky top-0 z-30 border-b-2 border-violet-300/50 bg-gradient-to-r from-violet-50 via-pink-50 to-cyan-50 backdrop-blur-md shadow-lg shadow-violet-200/30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
          <Link
            href="/"
            className="group flex items-center gap-4 transition-transform hover:scale-105 active:scale-95"
          >
            <div className="relative">
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-400 via-pink-400 to-cyan-400 p-1 shadow-xl shadow-violet-400/50 group-hover:shadow-2xl group-hover:shadow-violet-400/70 transition-all group-hover:rotate-3">
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500 via-pink-500 to-cyan-500">
                  <Image
                    src="/HanaTheHyena website inside logo.png"
                    alt="Hana the Hyena"
                    width={80}
                    height={80}
                    className="h-full w-full object-contain p-2"
                    priority
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                Hana the Hyena
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-3 sm:flex">
            <Link
              href="/the-story"
              className="group relative rounded-full bg-gradient-to-r from-violet-500 to-purple-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-violet-400/50 transition-all hover:scale-110"
            >
              📚 The Story
            </Link>
            <Link
              href="/meet-hana"
              className="group relative rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-pink-400/50 transition-all hover:scale-110"
            >
              🦁 Meet Hana
            </Link>
            <Link
              href="/play"
              className="group relative rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-400/50 transition-all hover:scale-110"
            >
              🎨 Play
            </Link>
            <Link
              href="/parents-teachers"
              className="group relative rounded-full border-2 border-indigo-300 bg-gradient-to-r from-indigo-50 to-purple-50 px-5 py-2.5 text-sm font-bold text-indigo-700 shadow-md transition-all hover:scale-110"
            >
              👩‍🏫 For Grown-ups
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <MobileMenu />
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 pt-16 pb-10">
        <p className="text-sm font-semibold tracking-wide text-emerald-300 uppercase mb-3">
          For parents &amp; teachers
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Share Hana's story with your children and students
        </h1>
        <p className="text-slate-200 max-w-3xl">
          <span className="italic">The Hyena Who Went To Dinner</span> gently
          explores courage, belonging, kindness, and Ethiopian culture. This
          page collects resources to help you use the story at home, in
          classrooms, or in small groups.
        </p>
      </section>

      {/* Resource cards */}
      <section className="max-w-4xl mx-auto px-4 pb-16 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl bg-slate-900/80 border border-slate-700 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Free Activity Pack (PDF)
            </h2>
            <p className="text-sm text-slate-200 mb-3">
              A ready-to-print bundle of colouring pages, puzzles, and writing
              prompts based on key scenes from the book. Ideal for follow-up
              sessions after reading.
            </p>
            <ul className="text-xs text-slate-300 space-y-1 mb-3">
              <li>• Supports discussion of feelings and friendships</li>
              <li>• Introduces Ethiopian food, places, and culture</li>
              <li>• Suitable for ages 6+</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-3 mt-3">
            <a
              href="/activities/hana-activity-pack-all-in-one.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2 text-slate-950 text-sm font-semibold hover:bg-emerald-300 transition"
            >
              Download Activity Pack
            </a>
          </div>
        </article>

        <article className="rounded-2xl bg-slate-900/80 border border-slate-700 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              One-page Discussion Guide
            </h2>
            <p className="text-sm text-slate-200 mb-3">
              A simple, one-page guide with open questions about courage,
              feeling small and brave, hospitality, and trying new things. Use
              it after reading or alongside the Activity Pack.
            </p>
            <ul className="text-xs text-slate-300 space-y-1 mb-3">
              <li>• Helps children reflect on Hana's feelings</li>
              <li>• Encourages empathy and inclusion</li>
              <li>• Works for whole-class, small groups, or 1-to-1</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-3 mt-3">
            <a
              href="/activities/hana-discussion-guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-2 text-slate-950 text-sm font-semibold hover:bg-amber-300 transition"
            >
              Download Discussion Guide
            </a>
          </div>
        </article>
      </section>

      {/* Link back to play page */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="rounded-2xl bg-slate-900/70 border border-slate-700 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-1">
              Looking for the children's view?
            </h2>
            <p className="text-sm text-slate-200">
              Visit the Play &amp; Activities page to see the resources the way
              children do—colourful icons, simple instructions, and big
              download buttons.
            </p>
          </div>
          <a
            href="/play"
            className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-2 text-slate-950 text-sm font-semibold hover:bg-sky-300 transition"
          >
            Go to Play &amp; Activities
          </a>
        </div>
      </section>

    </main>
  );
}
