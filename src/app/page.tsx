export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center text-center px-6 pt-40 pb-16 text-[#1a1a1a] animate-fade-in">
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.6s ease-out both;
        }
      `}</style>

    <main className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center text-center px-6 pt-40 pb-16 text-[#1a1a1a]">
      <h1 className="text-7xl font-extrabold tracking-normal sm:text-8xl mb-2">
        Lumen Etoile
      </h1>
@@ -44,23 +34,21 @@ export default function Home() {
          Our structure is still forming —<br />
          but the light has already begun to speak.
        </p>

        <div className="flex justify-center">
          <a
            href="https://lumenetoile-whitepaper.super.site"
            className="inline-block text-white font-bold px-6 py-3 rounded-md transition hover:scale-105 hover:shadow-lg"
            className="inline-block text-white font-bold px-6 py-3 rounded-md transition"
            style={{
              background: 'linear-gradient(135deg, #6a5af9, #8e7bff)',
              boxShadow: '0 0 8px rgba(138, 127, 255, 0.4)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            Read Our Whitepaper →
          </a>
        </div>
      </div>

      <footer className="mt-12 text-sm text-neutral-500">
      <footer className="mt-20 text-sm text-neutral-500">
        © 2025 Lumen Etoile. All rights reserved.
      </footer>
    </main>
