const socialLinks = [
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Instagram', href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <a
            href="#hero"
            className="text-2xl font-bold bg-linear-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
          >
            AA.
          </a>
          <p className="text-gray-600 text-sm mt-1">
            © {year} Abi Adrian. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-500 hover:text-violet-400 text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-gray-600 text-sm">
          Melindungi Infrastruktur Digital dengan Security Excellence.
        </p>
      </div>
    </footer>
  )
}
