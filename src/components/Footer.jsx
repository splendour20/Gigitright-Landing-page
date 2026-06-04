const APPLY_LINK = "https://forms.zohopublic.eu/Gigitright/form/GIGITRIGHTFREELANCERAPPLICATIONFORM2/formperma/PbpWLiSGjFwbfJjzwzyRLB8mPTtMecid6VfLg5Bffdk"

function Footer() {
  const handleFAQScroll = (e) => {
    e.preventDefault()
    const target = document.querySelector('#faqs')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="w-full px-6 md:px-16 pt-10 pb-6" style={{ backgroundColor: '#ffffff' }}>

      {/* Top Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-8">

        {/* Left — Logo + Tagline */}
        <div className="flex flex-col gap-3 max-w-xs">
          <div className="flex items-center gap-2">
            <img
              src="/Gigitright-Full-logo-blue.png"
              alt="Gigitright Logo"
              className="h-7 w-auto"
            />
          </div>
          <p
            className="text-xs leading-relaxed"
            style={{ color: '#000000' }}
          >
            Safely connects skilled African freelancers with businesses
            looking for reliable, high-integrity remote talent pools.
          </p>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-row flex-wrap gap-x-5 gap-y-3">

          {/* About Us — not clickable */}
          <li>
            <span
              className="text-xs cursor-default"
              style={{ color: '#374151' }}
            >
              About Us
            </span>
          </li>

          {/* Join As Freelancer — Zoho form */}
          <li>
            <a
              href={APPLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs"
              style={{ color: '#374151' }}
              onMouseEnter={e => e.currentTarget.style.color = '#0071CE'}
              onMouseLeave={e => e.currentTarget.style.color = '#374151'}
            >
              Join As Freelancer
            </a>
          </li>

          {/* FAQs — scroll to FAQ section */}
          <li>
            <a
              href="#faqs"
              onClick={handleFAQScroll}
              className="text-xs"
              style={{ color: '#374151' }}
              onMouseEnter={e => e.currentTarget.style.color = '#0071CE'}
              onMouseLeave={e => e.currentTarget.style.color = '#374151'}
            >
              FAQs
            </a>
          </li>

          {/* Contact — mailto */}
          <li>
            <a
              href="mailto:hi@gigitright.com"
              className="text-xs"
              style={{ color: '#374151' }}
              onMouseEnter={e => e.currentTarget.style.color = '#0071CE'}
              onMouseLeave={e => e.currentTarget.style.color = '#374151'}
            >
              Contact
            </a>
          </li>

        </ul>

      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #E5E7EB' }} />

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-5">
        <p
          className="text-xs text-center md:text-left"
          style={{ color: '#3f4145' }}
        >
          Built On Trust • Designed For Result
        </p>
        <p
          className="text-xs text-center md:text-right"
          style={{ color: '#3f4145' }}
        >
          © 2026 Gigitright. All rights reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer