const skills = [
  {
    category: 'Network Security',
    icon: '🔐',
    color: 'from-red-500/20 to-red-500/5 border-red-500/20',
    iconBg: 'bg-red-500/20 text-red-300',
    items: ['Penetration Testing', 'Threat Intelligence', 'Incident Response', 'Zero Trust Architecture', 'SSL/TLS'],
  },
  {
    category: 'Firewalls & IDS/IPS',
    icon: '🛡️',
    color: 'from-orange-500/20 to-orange-500/5 border-orange-500/20',
    iconBg: 'bg-orange-500/20 text-orange-300',
    items: ['Palo Alto Networks', 'Cisco ASA', 'Fortinet FortiGate', 'Snort/Suricata', 'WAF Configuration'],
  },
  {
    category: 'VPN & Access Control',
    icon: '🔑',
    color: 'from-yellow-500/20 to-yellow-500/5 border-yellow-500/20',
    iconBg: 'bg-yellow-500/20 text-yellow-300',
    items: ['IPSec VPN', 'OpenVPN', 'Multi-factor Auth', 'RADIUS/LDAP', 'Privileged Access Mgmt'],
  },
  {
    category: 'Tools & Platforms',
    icon: '⚙️',
    color: 'from-red-600/20 to-red-600/5 border-red-600/20',
    iconBg: 'bg-red-600/20 text-red-200',
    items: ['Wireshark', 'Metasploit', 'Burp Suite', 'SIEM Tools', 'Linux/Windows Admin'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-red-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Keahlian
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Kompetensi Network Security
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Tools, teknologi, dan expertise yang saya gunakan untuk melindungi infrastruktur jaringan dari ancaman cyber.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className={`p-6 rounded-2xl border bg-linear-to-b ${skill.color} hover:-translate-y-1 transition-all duration-200`}
            >
              <div className={`w-12 h-12 rounded-xl ${skill.iconBg} flex items-center justify-center text-2xl mb-4`}>
                {skill.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-4">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-gray-400 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
