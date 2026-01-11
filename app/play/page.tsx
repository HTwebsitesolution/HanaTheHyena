import Link from "next/link";

const activities = [
  {
    id: "dream-bubbles",
    title: "Hana's Big Dreams (Colouring Page)",
    description:
      "Colour Hana as she dreams about Addis Ababa, then draw your own dream in the empty bubble.",
    pdf: "/activities/hana-dream-bubbles-colouring.pdf",
    badge: "Colouring",
  },
  {
    id: "dinner-table",
    title: "Dinner with New Friends (Colouring Page)",
    description:
      "Colour the dinner table with injera, doro wat, and gomen besiga – and add your favourite food.",
    pdf: "/activities/hana-dinner-table-colouring.pdf",
    badge: "Colouring",
  },
  {
    id: "journey-maze",
    title: "Help Hana Find the City (Maze)",
    description:
      "Guide Hana from Harar to Addis Ababa through a fun, printable maze based on the story map.",
    pdf: "/activities/hana-journey-maze.pdf",
    badge: "Puzzle",
  },
  {
    id: "spot-difference",
    title: "Spot the Differences – On the Way to Addis",
    description:
      "Compare the two journey scenes, circle the 7 differences, then colour both pictures.",
    pdf: "/activities/hana-spot-the-difference-journey.pdf",
    badge: "Puzzle",
  },
  {
    id: "feelings-timeline",
    title: "Hana's Feelings Journey",
    description:
      "Match Hana's expressions to different moments in the story and talk about times you felt the same.",
    pdf: "/activities/hana-feelings-timeline.pdf",
    badge: "Feelings",
  },
  {
    id: "postcard-from-addis",
    title: "Postcard from Hana",
    description:
      "Write and draw a postcard from Hana to the hyenas in Harar, describing her big-city adventure.",
    pdf: "/activities/hana-postcard-from-addis.pdf",
    badge: "Writing",
  },
];

export const metadata = {
  title: "Play & Activities | Hana the Hyena",
  description:
    "Free colouring pages, puzzles, and printable activities based on The Hyena Who Went To Dinner.",
};

export default function PlayPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 via-sky-50 to-purple-50/30">
      {/* Hero section */}
      <section className="border-b border-cyan-200 bg-gradient-to-b from-cyan-50 to-sky-100/60">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:flex-row lg:items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Play & Activities with Hana
            </h1>
            <p className="mt-4 text-lg text-stone-700">
              Ready to go on an adventure with Hana the Hyena? Print these
              free colouring pages, puzzles, and creative activities to enjoy
              at home or in the classroom.
            </p>
            <p className="mt-3 text-sm text-stone-600">
              All activities are based on the picture book{" "}
              <em>The Hyena Who Went To Dinner</em>. Grown-ups: please help
              children download and print the PDFs.
            </p>
          </div>

          {/* Optional illustration placeholder */}
          <div className="flex-1">
            <div className="mx-auto h-40 w-40 rounded-3xl bg-white/70 shadow-md shadow-cyan-200/60 ring-1 ring-cyan-100 sm:h-48 sm:w-48 lg:ml-auto">
              {/* Replace this with an actual Hana illustration */}
              <div className="flex h-full items-center justify-center text-sm text-stone-400">
                Hana illustration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Pack Featured Section */}
      <section className="border-y border-violet-200 bg-gradient-to-br from-violet-100 via-pink-50 to-cyan-50">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border-2 border-violet-300 bg-white p-8 shadow-xl shadow-violet-200/50 ring-1 ring-violet-100 sm:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-800">
                    <span>⭐</span>
                    <span>Complete Activity Pack</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-stone-900 sm:text-3xl">
                    Hana Activity Pack
                  </h2>
                  <p className="mt-3 text-sm italic text-emerald-700 sm:text-base">
                    Includes a one-page Discussion Guide for parents and teachers to help you talk about courage, belonging, and kindness after reading Hana's story.
                  </p>
                  <p className="mt-3 text-base text-stone-700 sm:text-lg">
                    Get all 6 printable activities in one convenient PDF. Perfect
                    for teachers, parents, and anyone who wants everything in
                    one place.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-stone-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600" />
                      <span>
                        <strong>6 activities</strong> – colouring pages, puzzles,
                        and creative writing
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600" />
                      <span>
                        <strong>Ready to print</strong> – A4 format, black and
                        white, classroom-friendly
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600" />
                      <span>
                        <strong>Free forever</strong> – for personal and
                        classroom use
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/activities/hana-activity-pack-all-in-one.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-700 hover:shadow-xl hover:shadow-violet-600/40"
                    >
                      Download Complete Pack
                      <span aria-hidden="true" className="ml-2 text-lg">
                        ↓
                      </span>
                    </Link>
                    <Link
                      href="/parents-teachers"
                      className="inline-flex items-center justify-center rounded-full border-2 border-violet-300 bg-white px-6 py-3 text-base font-semibold text-violet-700 transition hover:bg-violet-50"
                    >
                      For Teachers & Parents →
                    </Link>
                  </div>
                  <p className="mt-4 text-xs text-stone-500">
                    Individual activities available below ↓
                  </p>
                </div>
                <div className="flex-shrink-0 lg:ml-4">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-300 via-pink-300 to-cyan-300 shadow-lg lg:h-40 lg:w-40">
                    <span className="text-4xl lg:text-5xl">📦</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity cards */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-stone-900 sm:text-3xl">
            Individual activities
          </h2>
          <p className="mt-3 text-stone-700">
            Download individual activities or get them all in the complete pack
            above. Click on an activity to open the PDF in a new tab. You can
            print as many copies as you need for personal or classroom use.
          </p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {activities.map((activity) => (
            <article
              key={activity.id}
              className="group flex flex-col rounded-2xl border border-violet-100 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
                    {activity.badge}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-stone-900 group-hover:text-violet-700">
                    {activity.title}
                  </h3>
                </div>
              </div>

              <p className="mt-3 flex-1 text-sm text-stone-700">
                {activity.description}
              </p>

              <div className="mt-4 flex items-center justify-between gap-3">
                <Link
                  href={activity.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
                >
                  Download PDF
                  <span aria-hidden="true" className="ml-2">
                    ↓
                  </span>
                </Link>
                <p className="text-xs text-stone-500">
                  A4 · Black and white · Printable
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Additional resources note */}
        <div className="mt-10 rounded-2xl border border-cyan-100 bg-cyan-50/60 px-5 py-4 text-sm text-stone-800 sm:px-6">
          <p className="font-semibold text-cyan-900">
            Looking for more resources?
          </p>
          <p className="mt-2">
            Visit our{" "}
            <Link
              href="/parents-teachers"
              className="font-semibold text-cyan-800 underline decoration-cyan-400 underline-offset-2 hover:text-cyan-900"
            >
              Parents & Teachers page
            </Link>{" "}
            for discussion questions, curriculum links, and classroom activity
            ideas.
          </p>
        </div>
      </section>
    </main>
  );
}
