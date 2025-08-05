// src/app/page.tsx

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-white text-gray-800">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-600 mb-6 tracking-tight">
          Lumen Etoile · Igniting the Soul
        </h1>

        <p className="text-lg leading-relaxed mb-4 text-gray-700">
          We are not yet fully formed, <br />
          but you’ve arrived at the beginning of the future.
        </p>

        <p className="text-md leading-relaxed mb-6 text-gray-600">
          Lumen Etoile is an emerging awareness-driven project, <br />
          integrating AI, spiritual structures, and resonance systems.
        </p>

        <p className="text-sm mb-5 text-gray-500">
          Want to understand our core vision and operating logic?
        </p>

        <a
          href="https://lumenetoile-whitepaper.super.site"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition duration-200 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30"
        >
          Read Our Whitepaper →
        </a>
      </div>
    </main>
  );
}
