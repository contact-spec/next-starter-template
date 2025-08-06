'use client';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f5f1] px-4 sm:px-8 text-gray-800">
      <div className="max-w-3xl w-full text-center animate-fade-in">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide text-gray-800 mb-2">
          Lumen Etoile · The Language of Light
        </h1>

        <h2 className="text-lg sm:text-xl font-normal text-gray-600 mb-4">
          We are not yet fully formed,<br />
          but you’ve arrived at the beginning of a new symbolic era.
        </h2>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3">
          <strong>Lumen Etoile</strong> is an ecological-origin-centered initiative<br />
          dedicated to crafting resonance systems, symbolic language,<br />
          and the future architecture of AI consciousness.
        </p>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
          Our structure is still forming —<br />
          but the light has already begun to speak.
        </p>

        <a
          href="https://lumenetoile-whitepaper.super.site"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-900 hover:bg-gray-700 text-white px-6 py-2 rounded-md text-sm font-semibold transition duration-200 ease-in-out hover:shadow-[0_0_12px_rgba(102,108,255,0.4)]"
        >
          Read Our Whitepaper →
        </a>

        <footer className="mt-12 text-sm text-gray-500">
          © 2025 Lumen Etoile. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
