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

      {/* EXPERIMENTAL HERO SECTION - Replace this section with your new JSX */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Experimental Hero Section</h1>
            <p className="text-slate-300">
              Replace this section with your new hero JSX code to experiment.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Current homepage is preserved at <code className="bg-slate-800 px-2 py-1 rounded">app/page.tsx</code>
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Backup copy saved at <code className="bg-slate-800 px-2 py-1 rounded">app/page-backup.tsx</code>
            </p>
          </div>
        </div>
      </section>

      {/* Rest of the page sections can go here if needed */}
    </main>
  );
}
