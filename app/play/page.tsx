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
    <main className="min-h-screen bg-amber-50/40">
      {/* Hero section */}
      <section className="border-b border-amber-200 bg-gradient-to-b from-amber-50 to-amber-100/60">
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
            <div className="mx-auto h-40 w-40 rounded-3xl bg-white/70 shadow-md shadow-amber-200/60 ring-1 ring-amber-100 sm:h-48 sm:w-48 lg:ml-auto">
              {/* Replace this with an actual Hana illustration */}
              <div className="flex h-full items-center justify-center text-sm text-stone-400">
                Hana illustration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity cards */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-stone-900 sm:text-3xl">
            Print, colour, and explore
          </h2>
          <p className="mt-3 text-stone-700">
            Click on an activity to open the PDF in a new tab. You can print as
            many copies as you need for personal or classroom use.
          </p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {activities.map((activity) => (
            <article
              key={activity.id}
              className="group flex flex-col rounded-2xl border border-amber-100 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    {activity.badge}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-stone-900 group-hover:text-amber-700">
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
                  className="inline-flex items-center justify-center rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700"
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

        {/* Optional note to teachers/parents */}
        <div className="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50/60 px-5 py-4 text-sm text-stone-800 sm:px-6">
          <p>
            Teachers and parents: you can also download a combined{" "}
            <Link
              href="/activities/hana-activity-pack-all-in-one.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-2 hover:text-emerald-900"
            >
              Hana Activity Pack
            </Link>{" "}
            with all of these pages in one file.
          </p>
        </div>
      </section>
    </main>
  );
}
