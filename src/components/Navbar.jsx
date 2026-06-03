import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const APPLY_LINK = "https://forms.zohopublic.eu/Gigitright/form/GIGITRIGHTFREELANCERAPPLICATIONFORM2/formperma/PbpWLiSGjFwbfJjzwzyRLB8mPTtMecid6VfLg5Bffdk"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: "Why Gigitright", href: "#why-join" },
    { label: "Opportunities", href: "#opportunities" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQs", href: "#faqs" },
  ]

  const handleScroll = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm">

      {/* Main Row */}
      <div className="flex items-center justify-between px-6 md:px-10 py-4">

        {/* Logo */}
        <div className="flex items-center">
          <img src="/Gigitright-Full-logo-blue.png" alt="Gigitright Logo" className="h-8 w-auto" />
        </div>

        {/* Nav Links — desktop only */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium text-gray-900 hover:text-[#0071CE] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button — desktop only */}
        <div className="hidden md:flex items-center">
          <a
            href={APPLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full transition-opacity duration-200 hover:opacity-90"
            style={{ backgroundColor: '#FACC15', color: '#111827' }}
          >
            Apply For Early Access
            <ArrowRight size={16} strokeWidth={2} />
          </a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: '#0071CE' }}
        >
          {menuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        style={{
          maxHeight: menuOpen ? '400px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}
      >
        <div className="flex flex-col px-6 pb-6 gap-5 border-t border-gray-100">

          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-4 pt-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-sm font-medium text-gray-900 hover:text-[#0071CE] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTA Button */}
          <a
            href={APPLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3 rounded-full w-full transition-opacity duration-200 hover:opacity-90"
            style={{ backgroundColor: '#FACC15', color: '#111827' }}
          >
            Apply For Early Access
            <ArrowRight size={16} strokeWidth={2} />
          </a>

        </div>
      </div>

    </nav>
  )
}

export default Navbar