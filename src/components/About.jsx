const stats = [
  { value: '2+', label: 'Tahun Pengalaman' },
  { value: '20+', label: 'Proyek Selesai' },
  { value: '10+', label: 'Klien Puas' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: image / visual */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-red-500/30 rotate-6" />
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-red-600/20 to-orange-600/20 backdrop-blur border border-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-2">🔐</div>
                  <p className="text-gray-400 text-sm font-medium">Abi Adrian</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <p className="text-red-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Tentang Saya
            </p>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Mengamankan infrastruktur digital dengan{' '}
              <span className="bg-linear-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                keunggulan strategis
              </span>
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Halo! Saya Abi Adrian, seorang IT Network Security Specialist yang
              berdedikasi melindungi aset digital organisasi dari ancaman cyber.
              Dengan pengalaman mendalam dalam threat intelligence dan incident response,
              saya memastikan setiap sistem tetap aman dan resilient.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Keahlian saya mencakup network hardening, firewall configuration,
              vulnerability assessment, dan penetration testing. Saya berkomitmen
              untuk membangun pertahanan keamanan berlapis yang komprehensif dan
              selalu siap menghadapi evolusi ancaman cyber modern.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center p-4 rounded-xl bg-gray-800/60 border border-gray-700/50"
                >
                  <div className="text-3xl font-extrabold bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="text-gray-500 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5"
            >
              Konsultasi Security →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
