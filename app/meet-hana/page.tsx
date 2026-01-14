import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Meet Hana | Hana the Hyena",
  description:
    "Meet Hana the Hyena - a curious, kind, and brave young hyena from Harar, Ethiopia. Learn about her dreams, fears, and adventures.",
};

const funFacts = [
  {
    title: "Favourite food",
    description:
      "She loves trying new things – especially soft injera and warm gomen besiga at the dinner table. But she also enjoys the traditional raw meat that hyenas in Harar are known for.",
    icon: "🍽️",
  },
  {
    title: "Favourite time of day",
    description:
      "Dusk, when the sky turns from blue to purple and the stars begin to appear. It's when she feels most curious about the world beyond Harar.",
    icon: "🌆",
  },
  {
    title: "Three things she's scared of",
    description:
      "1) Feeling lost and alone in a new place. 2) Not knowing what to do or say. 3) That she might not belong anywhere. But she's learning that being brave doesn't mean not being scared!",
    icon: "💭",
  },
  {
    title: "Her superpower",
    description:
      "Hana has an amazing ability to make friends, even when she's nervous. She's curious about others and always willing to try something new.",
    icon: "✨",
  },
  {
    title: "Best friend",
    description:
      "While she hasn't met them yet, Hana dreams of finding a friend who loves adventures as much as she does – someone who will explore new places and try new foods with her.",
    icon: "👫",
  },
  {
    title: "Secret talent",
    description:
      "She's really good at listening to stories and remembering all the details. That's how she learned about Addis Ababa in the first place!",
    icon: "🎯",
  },
];

export default function MeetHanaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-900 text-white">
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
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-900">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl" />
          <div className="absolute right-10 top-0 h-52 w-52 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff33_1px,_transparent_0)] bg-[size:24px_24px] opacity-40" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_minmax(0,1fr)] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Meet the star of the story
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Hana the Hyena
              </h1>
              <p className="mt-3 text-xl sm:text-2xl font-semibold text-amber-300 drop-shadow-[0_0_18px_rgba(251,191,36,0.4)]">
                Curious, kind, and braver than she thinks.
              </p>

              <p className="mt-5 text-base sm:text-lg text-slate-100/90 leading-relaxed">
                Hana lives near the ancient walled town of Harar in Ethiopia.
                While other hyenas are happy to stay close to home, Hana spends
                her days wondering what lies beyond the hills, listening to
                stories about faraway places, and dreaming of adventures she
                hasn't yet had the courage to take.
              </p>
            </div>

            <div className="flex justify-center mt-8 lg:mt-0">
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-[32px] bg-slate-900/70 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
                <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-pink-900/40 via-violet-900/40 to-cyan-900/40 flex items-center justify-center">
                  <Image
                    src="/HanaTheHyena website inside logo.png"
                    alt="Illustration of Hana the Hyena"
                    width={200}
                    height={200}
                    className="object-contain p-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is Hana? Section */}
      <section className="border-b border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Who is Hana?
          </h2>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-100/90">
            <p>
              Hana is a young hyena with a big heart and an even bigger sense of
              curiosity. She's the kind of character who asks "what if?" and
              "why not?" – even when those questions make her a little nervous.
              While she might seem small and uncertain at first, Hana has a
              quiet bravery that grows stronger with each new experience.
            </p>
            <p>
              Her personality is a mix of wonder and worry: she dreams of
              seeing the world, but she's also scared of feeling lost. She loves
              meeting new people, but she worries about saying the wrong thing.
              She's curious about new foods, but she's not sure she'll like
              them. It's this combination of courage and caution that makes Hana
              so relatable – and so inspiring.
            </p>
            <p>
              What makes Hana special is her willingness to try, even when she's
              afraid. She doesn't let her fears stop her from saying yes to new
              adventures, new friends, and new experiences. And that's what makes
              her a hero in her own story.
            </p>
          </div>
        </div>
      </section>

      {/* Where She Lives Section */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Where she lives: Harar
          </h2>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-100/90">
              <p>
                Hana calls Harar home – an ancient walled city in eastern
                Ethiopia, known for its beautiful architecture, rich history, and
                unique relationship with hyenas. For generations, the people of
                Harar have lived alongside hyenas, and there's a special
                tradition of feeding them at night.
              </p>
              <p>
                While many hyenas in Harar are content to stay within the city
                walls, Hana is different. She listens to stories about places
                beyond the hills – about Addis Ababa, the capital city, with
                its bright lights, tall buildings, and bustling streets. These
                stories spark something in her: a dream of seeing the world
                beyond her familiar home.
              </p>
              <p>
                Harar is a place of tradition and community, but for Hana, it's
                also a place where dreams begin. It's where she first imagines
                what might be possible if she's brave enough to explore.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="rounded-2xl bg-slate-950/70 p-6 border border-slate-800 shadow-lg overflow-hidden">
                <Image
                  src="/activities/Ancient walled city · UNESCO World Heritage Site · Home to Hana and her hyena family.png"
                  alt="Harar, Ethiopia - Ancient walled city, UNESCO World Heritage Site, Home to Hana and her hyena family"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Her Big Dream Section */}
      <section className="border-b border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Her big dream
          </h2>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-100/90">
            <p>
              Hana's biggest dream is to visit Addis Ababa – the capital city of
              Ethiopia, where everything is bigger, brighter, and more exciting
              than anything she's ever seen. She imagines tall buildings that
              touch the sky, streets filled with people from all over the world,
              and new experiences around every corner.
            </p>
            <p>
              But more than just seeing the city, Hana dreams of making new
              friends. She wants to meet people who are different from her, who
              have different stories, different traditions, and different ways of
              doing things. She believes that by meeting new people and trying
              new things, she'll discover not just the world, but also herself.
            </p>
            <p>
              In <em>The Hyena Who Went To Dinner</em>, Hana's dream comes true
              – but not in the way she expected. She learns that adventures
              aren't always about the places you go, but about the people you
              meet and the courage you find along the way.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/the-story"
              className="inline-flex items-center rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(139,92,246,0.5)] hover:bg-violet-400 transition"
            >
              Read Hana's adventure
              <span aria-hidden className="ml-2">📖</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Fun facts about Hana
          </h2>
          <p className="text-sm sm:text-base text-slate-300/80 mb-8">
            Get to know Hana better with these fun facts about her personality,
            preferences, and quirks.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {funFacts.map((fact, index) => (
              <article
                key={index}
                className="group rounded-2xl bg-slate-950/70 p-6 shadow-md border border-slate-800 hover:border-pink-500/50 transition-all hover:shadow-xl hover:shadow-pink-500/20"
              >
                <div className="text-4xl mb-3">{fact.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold text-emerald-300 mb-2">
                  {fact.title}
                </h3>
                <p className="text-sm text-slate-200/90 leading-relaxed">
                  {fact.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What's Next for Hana Section */}
      <section className="border-b border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            What's next for Hana?
          </h2>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-100/90">
            <p>
              After her adventure in Addis Ababa, Hana has discovered a new
              confidence and curiosity about the world. She's learned that being
              brave doesn't mean not being scared – it means trying new things
              even when you're nervous.
            </p>
            <p>
              Who knows where Hana's next adventure will take her? Maybe she'll
              visit other cities in Ethiopia, or explore different parts of
              Africa. Perhaps she'll meet new friends from different cultures,
              try new foods, and discover new traditions. One thing's for sure:
              Hana's story is just beginning.
            </p>
            <p className="text-cyan-300 font-semibold">
              Stay tuned for more adventures with Hana the Hyena! 🐾
            </p>
          </div>
          <div className="mt-8 rounded-2xl bg-gradient-to-br from-violet-900/30 via-pink-900/20 to-cyan-900/30 p-6 border border-violet-500/20">
            <p className="text-sm text-slate-200/90">
              Want to be the first to know about Hana's next adventure? Follow
              along for updates on new stories, activities, and resources.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="border-b border-slate-800 bg-gradient-to-br from-violet-900/30 via-pink-900/20 to-cyan-900/30">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to meet Hana?
          </h2>
          <p className="text-base sm:text-lg text-slate-200/90 mb-8 max-w-2xl">
            Discover Hana's full story, download free activities, and explore
            resources for parents and teachers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/the-story"
              className="inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-700 hover:shadow-xl"
            >
              Read the story
              <span aria-hidden className="ml-2">📚</span>
            </Link>
            <Link
              href="/play"
              className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 hover:shadow-xl"
            >
              Play & activities
              <span aria-hidden className="ml-2">🎨</span>
            </Link>
            <a
              href="https://www.amazon.com/s?k=the+hyena+who+went+to+dinner&i=stripbooks-intl-ship&crid=1DQDFPI1HMPRQ&sprefix=the+hyena+who+went+to+dinner%2Cstripbooks-intl-ship%2C209&ref=nb_sb_noss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-cyan-300/70 bg-cyan-600/40 px-6 py-3 text-base font-semibold text-cyan-50 shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-500/60"
            >
              Buy the book
              <span aria-hidden className="ml-2">📖</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
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
