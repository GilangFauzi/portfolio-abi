const projects = [
  {
    title: 'Enterprise Firewall Architecture',
    description:
      'Desain dan implementasi arsitektur firewall berlapis untuk perusahaan multinasional dengan 5000+ users. Mencakup segmentasi jaringan, policy management, dan traffic monitoring real-time.',
    tags: ['Palo Alto Networks', 'Cisco ASA', 'VPN', 'Network Design'],
    icon: '🛡️',
    gradient: 'from-red-600/30 to-red-900/30',
    border: 'border-red-500/20',
    badge: 'bg-red-500/20 text-red-300',
    link: '#',
    github: '#',
  },
  {
    title: 'Penetration Testing Suite',
    description:
      'Automated penetration testing framework dengan vulnerability scanning, exploitation modules, dan report generation. Meningkatkan efisiensi security assessment hingga 60%.',
    tags: ['Metasploit', 'Burp Suite', 'Python', 'Automation'],
    icon: '🎯',
    gradient: 'from-orange-600/30 to-orange-900/30',
    border: 'border-orange-500/20',
    badge: 'bg-orange-500/20 text-orange-300',
    link: '#',
    github: '#',
  },
  {
    title: 'Incident Response Platform',
    description:
      'Platform otomasi untuk incident response dengan SIEM integration, threat intelligence, dan automated remediation. Mengurangi MTTR (Mean Time To Respond) hingga 70%.',
    tags: ['SIEM', 'Python', 'Threat Intel', 'Automation'],
    icon: '🚨',
    gradient: 'from-red-600/30 to-yellow-900/30',
    border: 'border-red-500/20',
    badge: 'bg-red-500/20 text-red-300',
    link: '#',
    github: '#',
  },
  {
    title: 'Zero Trust Network Implementation',
    description:
      'Implementasi Zero Trust Architecture dengan micro-segmentation, continuous verification, dan least privilege access. Menurunkan risk exposure sebesar 85%.',
    tags: ['Zero Trust', 'Network Design', 'IAM', 'Segmentation'],
    icon: '🔐',
    gradient: 'from-orange-600/30 to-red-900/30',
    border: 'border-orange-500/20',
    badge: 'bg-orange-500/20 text-orange-300',
    link: '#',
    github: '#',
  },
  {
    title: 'DDoS Mitigation System',
    description:
      'Sistem deteksi dan mitigasi DDoS dengan machine learning untuk behavioral analysis. Mampu mendeteksi dan memblokirattack dalam milidetik dengan false positive rate rendah.',
    tags: ['IDS/IPS', 'Machine Learning', 'Network Analysis'],
    icon: '🌪️',
    gradient: 'from-yellow-600/30 to-red-900/30',
    border: 'border-yellow-500/20',
    badge: 'bg-yellow-500/20 text-yellow-300',
    link: '#',
    github: '#',
  },
  {
    title: 'Compliance & Audit Framework',
    description:
      'Framework audit otomatis untuk compliance requirements (ISO27001, PCI-DSS, SOC2). Menghasilkan dokumentasi dan report untuk regulatory requirements.',
    tags: ['Compliance', 'Audit', 'Policy Mgmt', 'Documentation'],
    icon: '📋',
    gradient: 'from-red-600/30 to-orange-900/30',
    border: 'border-red-500/20',
    badge: 'bg-red-500/20 text-red-300',
    link: '#',
    github: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-red-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Portofolio
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Project Security Terkini
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Solusi keamanan jaringan yang telah saya implementasikan dan buktikan
            efektivitasnya dalam melindungi aset digital organisasi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl border ${project.border} bg-linear-to-br ${project.gradient} p-6 hover:-translate-y-1 transition-all duration-200 overflow-hidden`}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/2" />

              <div className="relative z-10">
                {/* Icon + links */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{project.icon}</div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="w-8 h-8 rounded-lg bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                      title="GitHub"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href={project.link}
                      className="w-8 h-8 rounded-lg bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${project.badge}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
