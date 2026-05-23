import { useState } from 'react'

const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'abi.adrian@example.com',
    href: 'mailto:abi.adrian@example.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/abiandrian',
    href: '#',
  },
  {
    icon: '🐱',
    label: 'GitHub',
    value: 'github.com/abiandrian',
    href: '#',
  },
  {
    icon: '📍',
    label: 'Lokasi',
    value: 'Indonesia',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulasi pengiriman
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-red-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Kontak
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Keamanan adalah Prioritas Anda
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Punya kebutuhan security audit, penetration testing, atau konsultasi
            keamanan jaringan? Hubungi saya untuk diskusi mendalam tentang solusi
            terbaik untuk infrastruktur Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-2">
              Hubungi Saya Langsung
            </h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Sebagai security specialist, saya memahami urgensi dalam mengatasi
              kerentanan keamanan. Tim saya siap memberikan konsultasi mendalam
              dan solusi implementasi yang efektif untuk melindungi aset digital Anda.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-gray-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-300 text-sm hover:text-violet-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Pesan Terkirim!
                </h3>
                <p className="text-gray-400">
                  Terima kasih! Saya akan segera membalas pesan Anda.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Nama Anda"
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="email@contoh.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Ceritakan proyek Anda..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-red-500/25 hover:shadow-red-500/40"
                >
                  Kirim Pesan →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
