import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../components/MobileMenu";

const singleActivities = [
  {
    id: "dream-bubbles",
    title: "Hana's Dream Bubbles – Colouring",
    description:
      "Colour Hana dreaming under the night sky and draw your own pictures inside her dream bubbles.",
    pdf: "/activities/hana-dream-bubbles-colouring.pdf",
    bestFor: "Ages 6+ · imagination & prediction",
  },
  {
    id: "dinner-table",
    title: "Hana's Ethiopian Dinner – Colouring",
    description:
      "Colour the big dinner scene with injera, doro wat, gomen besiga, and Hana's new friends.",
    pdf: "/activities/hana-dinner-table-colouring.pdf",
    bestFor: "Ages 6+ · food & culture",
  },
  {
    id: "journey-maze",
    title: "Forest to City Journey Maze",
    description:
      "Help Hana find her way from Harar to Addis Ababa through forests, rivers, and hills.",
    pdf: "/activities/hana-journey-maze.pdf",
    bestFor: "Ages 6–9 · problem solving",
  },
  {
    id: "spot-difference",
    title: "Spot the Difference – Forest to City",
    description:
      "Compare Hana's quiet home with the busy city and see how many differences you can find.",
    pdf: "/activities/hana-spot-the-difference-journey.pdf",
    bestFor: "Ages 6–9 · observation skills",
  },
  {
    id: "feelings-timeline",
    title: "Hana's Feelings Timeline",
    description:
      "Track how Hana feels at each stage of her journey and talk about times you've felt the same.",
    pdf: "/activities/hana-feelings-timeline.pdf",
    bestFor: "Ages 7+ · PSHE & wellbeing",
  },
  {
    id: "postcard",
    title: "Postcard from Addis Ababa",
    description:
      "Write a postcard as Hana, telling a friend all about her big-city adventure and new friends.",
    pdf: "/activities/hana-postcard-from-addis.pdf",
    bestFor: "Ages 7+ · writing & reflection",
  },
];

export const metadata = {
  title: "Play & Activities | Hana the Hyena",
  description:
    "Free colouring pages, puzzles, and printable activities based on The Hyena Who Went To Dinner.",
};

export default function PlayPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
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

      <section className="max-w-5xl mx-auto px-4 pt-16 pb-10">
        <p className="text-sm font-semibold tracking-wide text-amber-300 uppercase mb-3">
          Free printables
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Play &amp; Activities with Hana the Hyena
        </h1>
        <p className="text-slate-200 max-w-3xl">
          Download free colouring pages, puzzles, and writing prompts inspired
          by{" "}
          <span className="italic">The Hyena Who Went To Dinner</span>. Perfect
          for homes, classrooms, and libraries.
        </p>
      </section>

      {/* Highlighted pack + discussion guide */}
      <section className="max-w-5xl mx-auto px-4 pb-6 grid gap-6 md:grid-cols-[1.6fr,1.1fr]">
        <div className="rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-pink-500 p-[1px] shadow-xl">
          <div className="h-full rounded-2xl bg-slate-950/95 p-6 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">
                Hana the Hyena Activity Pack (All-in-One)
              </h2>
              <p className="text-slate-200 mb-3">
                Get all the activities in one easy PDF bundle: colouring pages,
                maze, spot-the-difference, feelings timeline, and postcard
                writing.
              </p>
              <p className="text-sm text-amber-200 mb-4">
                Includes a one-page <span className="font-semibold">
                  Discussion Guide
                </span>{" "}
                for adults with questions to help you talk about courage,
                belonging, and kindness.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/activities/hana-activity-pack-all-in-one.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-2 text-slate-950 font-semibold shadow-md hover:bg-amber-300 transition"
                >
                  Download Activity Pack
                </a>
                <a
                  href="/activities/hana-discussion-guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-amber-300/80 px-5 py-2 text-amber-100 text-sm hover:bg-amber-300/10 transition"
                >
                  View Discussion Guide only
                </a>
              </div>
            </div>
            {/* Activity Pack cover image */}
            <div className="w-full md:w-40 h-40 rounded-xl border border-slate-700 overflow-hidden bg-slate-900 flex items-center justify-center">
              <Image
                src="/activities/Hana The Hyena - Activity pack front cover.png"
                alt="Hana the Hyena Activity Pack Cover"
                width={160}
                height={160}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-900/70 border border-slate-700/70 p-5">
          <h3 className="text-lg font-semibold mb-2 text-amber-200">
            How to use the pack
          </h3>
          <ul className="space-y-2 text-sm text-slate-200">
            <li>• Print in black &amp; white or colour.</li>
            <li>• Use one page at a time or the full pack.</li>
            <li>• Great for rainy days, reading corners, or homework.</li>
          </ul>
        </div>
      </section>

      {/* Individual activities */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-bold mb-4">Download individual pages</h2>
        <p className="text-sm text-slate-300 mb-6 max-w-3xl">
          Prefer to pick and choose? You can also download each activity on its
          own below.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {singleActivities.map((activity) => (
            <article
              key={activity.id}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-5 flex flex-col justify-between shadow-sm"
            >
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  {activity.title}
                </h3>
                <p className="text-sm text-slate-200 mb-2">
                  {activity.description}
                </p>
                <p className="text-xs text-slate-400">{activity.bestFor}</p>
              </div>
              <div className="mt-4">
                <a
                  href={activity.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-slate-950 text-sm font-semibold hover:bg-emerald-300 transition"
                >
                  Download PDF
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
