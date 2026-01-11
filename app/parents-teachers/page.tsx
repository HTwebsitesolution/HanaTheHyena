import Link from "next/link";

export const metadata = {
  title: "For Parents & Teachers | Hana the Hyena",
  description:
    "Discussion questions, curriculum links, and free printable resources to use The Hyena Who Went To Dinner at home or in the classroom.",
};

const themes = [
  {
    title: "Belonging & Inclusion",
    body: "Hana feels small and invisible in the big city until one family notices her, smiles, and invites her in. Her story opens a gentle way to talk about what it feels like to be new, left out, or different—and how small acts of kindness can change that.",
  },
  {
    title: "Courage",
    body: "From leaving Harar to stepping into a stranger's home for dinner, Hana keeps saying yes, even when she isn't sure what will happen next. Children can explore what everyday courage looks like in their own lives.",
  },
  {
    title: "Hospitality & Food",
    body: "The shared meal is at the heart of the story. Hana tries new dishes, and the family learns about her way of eating. The book naturally invites conversations about family traditions, favourite foods, and welcoming guests.",
  },
  {
    title: "Cultural Curiosity",
    body: "The story introduces real places in Ethiopia—Harar and Addis Ababa—and real dishes such as injera, doro wat, and gomen besiga. It can support geography topics, global citizenship, and multicultural book corners.",
  },
];

const questions = [
  {
    heading: "Before reading",
    items: [
      "Have you ever visited a place that felt much bigger or busier than where you live now? How did it feel at first?",
      "Look at the cover. What do you think Hana might be feeling about her trip to Addis Ababa?",
    ],
  },
  {
    heading: "Arriving in Addis",
    items: [
      "Why does Hana feel small and out of place when she first arrives in the city?",
      "Have you ever felt like that somewhere new (a new class, club, school, or country)?",
    ],
  },
  {
    heading: "The dinner invitation",
    items: [
      "What kind things does the family do to help Hana feel welcome?",
      "Why might it feel brave to say yes to their invitation?",
    ],
  },
  {
    heading: "Trying new food",
    items: [
      "What new foods does Hana see on the table? Which one would you like to taste?",
      "Can you think of a time you tried a new food? What did you think before and after you tasted it?",
    ],
  },
  {
    heading: "Sharing her own tradition",
    items: [
      "Why is the piece of raw meat a special gift from Hana's point of view?",
      "How does the family respond respectfully, even though they eat differently?",
    ],
  },
  {
    heading: "Coming home again",
    items: [
      "What do you think Hana will tell the other hyenas when she gets back to Harar?",
      "What has she learned about herself, and what have the people in Addis learned from her?",
    ],
  },
];

export default function ParentsTeachersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50/30 to-cyan-50/40">
      {/* Hero */}
      <section className="border-b border-purple-200 bg-gradient-to-b from-purple-50 to-pink-100/60">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:flex-row lg:items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              For Parents &amp; Teachers
            </h1>
            <p className="mt-4 text-lg text-stone-700">
              <em>The Hyena Who Went To Dinner</em> opens up conversations
              about courage, kindness, and belonging, while gently introducing
              children to Ethiopian culture, food, and places.
            </p>
            <p className="mt-3 text-sm text-stone-600">
              Use this page to help you read the story together, ask thoughtful
              questions, and extend the adventure with activities at home or in
              the classroom.
            </p>
          </div>

          {/* Optional side card */}
          <div className="flex-1">
            <div className="mx-auto max-w-sm rounded-2xl bg-white/90 p-5 shadow-md shadow-purple-200/70 ring-1 ring-purple-100 lg:ml-auto">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-purple-700">
                Quick downloads
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-stone-800">
                <li>
                  <Link
                    href="/activities/hana-activity-pack-all-in-one.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-purple-400 underline-offset-2 hover:text-purple-700"
                  >
                    Hana Activity Pack (all printable pages)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/activities/hana-discussion-guide.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-purple-400 underline-offset-2 hover:text-purple-700"
                  >
                    One-page discussion guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/play"
                    className="underline decoration-purple-400 underline-offset-2 hover:text-purple-700"
                  >
                    View activities online
                  </Link>
                </li>
              </ul>
              <p className="mt-3 text-xs text-stone-500">
                All resources are free for personal and classroom use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Themes section */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-stone-900 sm:text-3xl">
            Key themes in Hana's story
          </h2>
          <p className="mt-3 text-stone-700">
            As you read, you might want to draw attention to some of these
            ideas. They connect naturally to PSHE/SEL, global citizenship,
            geography, and literacy.
          </p>
        </header>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {themes.map((theme) => (
            <article
              key={theme.title}
              className="rounded-2xl border border-pink-200 bg-white/90 p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-stone-900">
                {theme.title}
              </h3>
              <p className="mt-2 text-sm text-stone-700">{theme.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Discussion questions */}
      <section className="border-y border-cyan-100 bg-cyan-50/50">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <header className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-stone-900 sm:text-3xl">
              Discussion questions
            </h2>
            <p className="mt-3 text-stone-700">
              Use or adapt these open-ended questions before, during, and after
              sharing the book. They are suitable for ages 6+ and can be
              simplified for younger children.
            </p>
          </header>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {questions.map((block) => (
              <article
                key={block.heading}
                className="rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-cyan-50"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-800">
                  {block.heading}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-stone-800">
                  {block.items.map((q) => (
                    <li key={q} className="flex gap-2">
                      <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-600" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Classroom ideas */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-stone-900 sm:text-3xl">
            Ideas for home and classroom
          </h2>
          <p className="mt-3 text-stone-700">
            These simple activities extend the story and help children make
            connections with their own lives. Most can be done with just paper,
            pencils, and the printable pages.
          </p>
        </header>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-violet-200 bg-white/90 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-stone-900">
              Food &amp; Feelings Chart
            </h3>
            <p className="mt-2 text-sm text-stone-700">
              Make a class or family chart with two columns: "New things I've
              tried" and "How I felt before/after". Children draw or write a new
              food they've tasted and share their feelings, just like Hana does
              at dinner.
            </p>
          </article>

          <article className="rounded-2xl border border-pink-200 bg-white/90 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-stone-900">
              Map Hana's Journey
            </h3>
            <p className="mt-2 text-sm text-stone-700">
              Using a simple outline of Ethiopia, mark Harar and Addis Ababa.
              Invite children to draw Hana's path between them, then add a
              journey of their own—across their town, country, or even from one
              classroom to another.
            </p>
          </article>

          <article className="rounded-2xl border border-cyan-200 bg-white/90 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-stone-900">
              Hospitality role-play
            </h3>
            <p className="mt-2 text-sm text-stone-700">
              In small groups, children act out welcoming a new person to their
              class or neighbourhood. Discuss simple ways to help someone feel
              included: smiling, offering a seat, explaining routines, inviting
              them to play.
            </p>
          </article>

          <article className="rounded-2xl border border-purple-200 bg-white/90 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-stone-900">
              Postcard from Hana
            </h3>
            <p className="mt-2 text-sm text-stone-700">
              Using the printable postcard page, children write and illustrate
              a short message from Hana to the hyenas back in Harar, describing
              what she saw, ate, and learned in Addis Ababa.
            </p>
          </article>
        </div>

        <div className="mt-8 rounded-2xl bg-stone-900 px-5 py-6 text-sm text-stone-100 sm:px-6">
          <p>
            We would love to see how you use Hana's story. If you're happy to
            share classroom displays or children's work, you can email{" "}
            <a
              href="mailto:hello@habeshapress.com"
              className="font-semibold text-cyan-300 underline underline-offset-2 hover:text-cyan-200"
            >
              hello@habeshapress.com
            </a>{" "}
            with photos (no faces if you prefer) and a short note from your
            school.
          </p>
        </div>
      </section>
    </main>
  );
}
