import '../styles/globals.css';

export const metadata = {
  metadataBase: new URL('https://healthystep.in'),
  title: { default: 'HealthyStep – Small steps. Stronger you.', template: '%s | HealthyStep' },
  description: 'Beginner-friendly home workouts, healthy Indian recipes, and simple habits for lasting weight loss.',
  openGraph: { title: 'HealthyStep', description: 'Beginner-friendly home fitness & healthy recipes', url: 'https://healthystep.in', siteName: 'HealthyStep' },
  twitter: { card: 'summary_large_image', creator: '@yourhandle' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="google-site-verification" content="T09MSsR8FOoX6wrq5cSoMuMSjYnC6IFOObHOg4lYijI" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-100">
        <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/60 dark:border-slate-700/60">
          <nav className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <a href="/" className="font-extrabold text-lg tracking-tight">Healthy<span className="text-emerald-600">Step</span></a>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="/blog">Blog</a><a href="/blog/workouts">Workouts</a><a href="/blog/recipes">Recipes</a><a href="/blog/habits">Habits</a><a href="/newsletter">Newsletter</a><a href="/about">About</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-slate-200 dark:border-slate-700 mt-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm opacity-80">
            <p>© {new Date().getFullYear()} HealthyStep. General wellness info only, not medical advice.</p>
            <p className="mt-2">Disclosure: Some links may be affiliate links, helping support the site at no extra cost to you.</p>
            <p className="mt-2"><a className="underline" href="/privacy">Privacy Policy</a> • <a className="underline" href="/terms">Terms</a></p>
          </div>
        </footer>
        
      </body>
    </html>
  );
}
