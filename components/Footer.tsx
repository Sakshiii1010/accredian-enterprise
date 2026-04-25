export default function Footer() {
  const links = {
    Solutions: ["Enterprise Learning", "Custom Programs", "Analytics Dashboard", "Mentorship Network"],
    Programs: ["Data Science & AI", "Product Management", "Leadership", "Engineering"],
    Company: ["About Accredian", "Careers", "Blog", "Press"],
    Support: ["Help Center", "Contact Sales", "Privacy Policy", "Terms of Service"],
  };

  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold font-display">A</span>
              </div>
              <span className="font-bold text-lg font-display">Accredian</span>
            </div>
            <p className="text-blue-300 text-sm leading-relaxed mb-4">
              India's most trusted enterprise learning platform. Upskilling workforces at scale since 2018.
            </p>
            <div className="flex gap-3">
              {["in", "tw", "yt"].map((social) => (
                <a key={social} href="#" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold hover:bg-blue-600 transition-colors">
                  {social.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-blue-300">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-blue-400 hover:text-white text-sm transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-400 text-sm">© 2025 Accredian. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-blue-400 hover:text-white text-sm transition-colors">Privacy</a>
            <a href="#" className="text-blue-400 hover:text-white text-sm transition-colors">Terms</a>
            <a href="#" className="text-blue-400 hover:text-white text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
