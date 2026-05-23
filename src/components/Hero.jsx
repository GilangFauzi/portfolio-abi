export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-700/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-700/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Tersedia untuk proyek baru
        </div>

        {/* Avatar placeholder */}
        <div className="flex justify-center mb-8">
          <div className="w-28 h-28 rounded-full bg-linear-to-br from-red-500 to-orange-500 flex items-center justify-center text-4xl font-bold text-white shadow-xl shadow-red-500/30">
            AA
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
          Abi{' '}
          <span className="bg-linear-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Adrian
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-4 font-medium">
          IT Network Security Specialist
        </p>

        <p className="text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
          Melindungi infrastruktur digital dengan strategi keamanan jaringan yang
          komprehensif. Spesialis dalam penetration testing, threat analysis, dan
          implementasi solusi security terdepan.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:-translate-y-0.5"
          >
            Lihat Proyek
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-gray-700 hover:border-red-500/50 text-gray-300 hover:text-white font-semibold transition-all duration-200 hover:-translate-y-0.5"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-linear-to-b from-gray-600 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
