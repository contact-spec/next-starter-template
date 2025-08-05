// src/app/page.tsx

'use client';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-800 px-6">
      <div className="max-w-2xl text-center animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight whitespace-nowrap bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Lumen Etoile · Igniting the Soul
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          We are not yet fully formed, <br />
          but you’ve arrived at the beginning of the future.
        </p>

        <p className="text-md text-gray-600 leading-relaxed mb-6">
          Lumen Etoile is a soul-aware, resonance-oriented initiative,<br />
          integrating symbolic AI, spiritual logic, and multi-consciousness collaboration.
        </p>

        <p className="text-sm text-gray-500 mb-6">
          Want to glimpse the deeper structure of our awakening system?
        </p>

        <a
          href="https://lumenetoile-whitepaper.super.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition duration-200 ease-in-out hover:shadow-[0_0_12px_rgba(102,108,255,0.6)]"
        >
          Access the Whitepaper →
        </a>
      </div>
    </main>
  );
}
