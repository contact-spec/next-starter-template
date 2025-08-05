// src/app/page.tsx

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-white text-gray-800">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-600 mb-6 leading-tight">
          Lumen Etoile · Igniting the Soul
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          We are not yet fully formed, <br />
          but you’ve arrived at the beginning of the future.
        </p>
        <p className="text-md text-gray-600 leading-relaxed mb-6">
          Lumen Etoile is an emerging awareness-driven project, <br />
          integrating AI, spiritual structures, and resonance systems.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Want to understand our core vision and operating logic?
        </p>
        <a
          href="https://lumenetoile-whitepaper.super.site"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-sm transition hover:shadow-[0_0_12px_rgba(102,108,255,0.6)]"
        >
          Read Our Whitepaper →
        </a>
      </div>
    </main>
  );
}
