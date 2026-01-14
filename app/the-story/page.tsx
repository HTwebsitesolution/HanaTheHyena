import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "The Story | Hana the Hyena",
  description:
    "Discover The Hyena Who Went To Dinner - a heartwarming Ethiopian tale of courage, friendship, and food. Perfect for children aged 6+.",
};

const keyScenes = [
  {
    title: "Dreaming of the big city",
    description:
      "In Harar, Hana listens to stories about Addis Ababa and imagines bright lights, tall buildings, and exciting new places. She dreams of adventure beyond her quiet home.",
    icon: "🌙",
  },
  {
    title: "The journey through forests and rivers",
    description:
      "Hana sets off on her adventure, traveling through forests, crossing rivers, and following paths she's never taken before. Each step brings her closer to the big city.",
    icon: "🌲",
  },
  {
    title: "Feeling small in Addis Ababa",
    description:
      "When Hana finally arrives in Addis Ababa, everything feels huge, loud, and unfamiliar. The city is bigger than she imagined, and for a moment, she wonders if she made a mistake.",
    icon: "🏙️",
  },
  {
    title: "Dinner with the family",
    description:
      "Just when Hana feels most alone, a kind family notices her, smiles, and invites her to share their dinner table. Around soft injera, spicy doro wat, and tender gomen besiga, everything changes.",
    icon: "🍽️",
  },
  {
    title: "Finding courage and the way home",
    description:
      "By sharing new foods and her own traditions, Hana discovers new friends and a new kind of courage. She learns that even when we are different, we can still belong.",
    icon: "💫",
  },
];

const themes = [
  {
    title: "Courage",
    description:
      "Hana shows everyday bravery by leaving home, trying new things, and saying yes to new experiences, even when she's unsure.",
  },
  {
    title: "Belonging & Kindness",
    description:
      "The story explores what it feels like to be new or different, and how small acts of kindness can help someone feel included and welcome.",
  },
  {
    title: "Trying New Foods",
    description:
      "Hana discovers new flavours and learns that trying something new can lead to wonderful discoveries and connections.",
  },
  {
    title: "Ethiopian Culture",
    description:
      "The book introduces real places in Ethiopia—Harar and Addis Ababa—and real dishes like injera, doro wat, and gomen besiga.",
  },
  {
    title: "Hospitality",
    description:
      "The shared meal is at the heart of the story, showing how welcoming others and sharing traditions brings people together.",
  },
];

export default function TheStoryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-900 text-white">
      {/* Header - Consistent with home page */}
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
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute right-10 top-0 h-52 w-52 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 h-40 w-40 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff33_1px,_transparent_0)] bg-[size:24px_24px] opacity-40" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Hana the Hyena · Book one
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            The Hyena Who Went To Dinner
          </h1>
          <p className="mt-3 text-xl sm:text-2xl font-semibold text-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,0.4)]">
            A heartwarming Ethiopian tale of courage, friendship &amp; food.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#key-scenes"
              className="inline-flex items-center rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(139,92,246,0.5)] hover:bg-violet-400 transition"
            >
              Read the story with Hana
              <span aria-hidden className="ml-2">📖</span>
            </a>
            <Link
              href="/play"
              className="inline-flex items-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(236,72,153,0.55)] hover:bg-pink-400 transition"
            >
              Download activities
              <span aria-hidden className="ml-2">🎨</span>
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-300/80">
            For children aged 6+ · Perfect for bedtime, classrooms, and libraries.
          </p>
        </div>
      </section>

      {/* Story Summary Section */}
      <section className="border-b border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            The Story
          </h2>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-100/90">
            <p>
              In <em>The Hyena Who Went To Dinner</em>, Hana the Hyena, a young
              hyena from Harar, dreams of visiting Addis Ababa. When she finally
              reaches the big city, everything feels loud, fast, and unfamiliar.
              For a moment, she wonders if she made a mistake.
            </p>
            <p>
              Everything changes when a kind family notices her, smiles, and
              invites her to share their dinner table. Around soft injera, spicy
              doro wat, and tender gomen besiga, Hana discovers new flavours,
              new friends, and a new kind of courage. By sharing her own
              traditions too, she learns that even when we are different, we can
              still belong.
            </p>
            <p>
              Hana&apos;s story gently explores belonging, hospitality, and the
              joy of sharing food and culture. It&apos;s a tale that reminds us
              all that sometimes the bravest thing we can do is say yes to new
              experiences, and that kindness can turn strangers into friends.
            </p>
          </div>
        </div>
      </section>

      {/* Key Scenes Section */}
      <section
        id="key-scenes"
        className="border-b border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950"
      >
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Key moments in Hana&apos;s adventure
          </h2>
          <p className="text-sm sm:text-base text-slate-300/80 mb-8">
            Follow Hana&apos;s journey from her quiet home in Harar to the
            bright lights of Addis Ababa and back again.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {keyScenes.map((scene, index) => (
              <article
                key={index}
                className="group rounded-2xl bg-slate-950/70 p-6 shadow-md border border-slate-800 hover:border-violet-500/50 transition-all hover:shadow-xl hover:shadow-violet-500/20"
              >
                <div className="text-4xl mb-3">{scene.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold text-amber-300 mb-2">
                  {scene.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed">
                  {scene.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Themes & What Kids Learn Section */}
      <section className="border-b border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Themes &amp; what kids learn
          </h2>
          <p className="text-sm sm:text-base text-slate-300/80 mb-8">
            <em>The Hyena Who Went To Dinner</em> opens up conversations about
            important life lessons in a gentle, age-appropriate way.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((theme, index) => (
              <article
                key={index}
                className="rounded-2xl bg-slate-950/70 p-6 shadow-md border border-slate-800"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">
                  {theme.title}
                </h3>
                <p className="text-sm text-slate-200/90 leading-relaxed">
                  {theme.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="border-b border-slate-800 bg-gradient-to-br from-violet-900/30 via-pink-900/20 to-cyan-900/30">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to share Hana&apos;s story?
          </h2>
          <p className="text-base sm:text-lg text-slate-200/90 mb-8 max-w-2xl">
            Bring <em>The Hyena Who Went To Dinner</em> into your home or
            classroom, then explore our free activities, discussion guides, and
            resources.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.amazon.com/s?k=the+hyena+who+went+to+dinner&i=stripbooks-intl-ship&crid=1DQDFPI1HMPRQ&sprefix=the+hyena+who+went+to+dinner%2Cstripbooks-intl-ship%2C209&ref=nb_sb_noss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-700 hover:shadow-xl"
            >
              Buy on Amazon
              <span aria-hidden className="ml-2">
                ↗
              </span>
            </a>
            <Link
              href="/play"
              className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 hover:shadow-xl"
            >
              Download Activity Pack
              <span aria-hidden className="ml-2">📦</span>
            </Link>
            <Link
              href="/parents-teachers"
              className="inline-flex items-center justify-center rounded-full border-2 border-cyan-300/70 bg-cyan-600/40 px-6 py-3 text-base font-semibold text-cyan-50 shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-500/60"
            >
              Read with your class
              <span aria-hidden className="ml-2">👩‍🏫</span>
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            All activity resources are free for personal and classroom use.
          </p>
        </div>
      </section>

    </main>
  );
}
