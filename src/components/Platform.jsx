import { useEffect, useRef, useState } from 'react'

function Platform() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const quotes = [
    "I want access to clients who actually value my work.",
    "I want opportunities beyond my immediate environment.",
    "I want a platform that helps me grow professionally.",
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 md:px-16 py-12 md:py-24"
      style={{ backgroundColor: '#F0F4FA' }}
    >
      {/* Heading */}
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-4"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.9s ease 0s, transform 0.9s ease 0s',
        }}
      >
        <span style={{ color: '#0071CE' }}>More Than A </span>
        <span style={{ color: '#FACC15' }}>Freelance Platform</span>
      </h2>

      {/* Subtext */}
      <p
        className="text-center text-sm md:text-base max-w-xl mx-auto mb-14"
        style={{
          color: '#6B7280',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
        }}
      >
        Gigitright is building a growing community of talented African freelancers ready to
        compete globally, collaborate professionally, and build highly sustainable long-term
        careers through remote work frameworks.
      </p>

      {/* Quotes Container */}
      <div className="max-w-2xl mx-auto">

        {/* Sub heading */}
        <h3
          className="text-center font-bold text-base mb-6"
          style={{
            color: '#111827',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.9s ease 0.35s',
          }}
        >
          What African Freelancers Want
        </h3>

        {/* Quote Cards */}
        <div className="flex flex-col gap-4">
          {quotes.map((quote, index) => (
            <div
              key={quote}
              className="flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.9s ease ${0.45 + index * 0.15}s, transform 0.9s ease ${0.45 + index * 0.15}s, box-shadow 0.3s ease, transform 0.3s ease`,
              }}
            >
              {/* Quote Icon */}
              <span
                className="text-2xl font-serif leading-none transition-all duration-300 ease-out group-hover:scale-110"
                style={{ color: '#FACC15', flexShrink: 0 }}
              >
                ❝
              </span>

              {/* Quote Text */}
              <p
                className="text-sm md:text-base italic transition-all duration-300 ease-out"
                style={{ color: '#374151' }}
              >
                {quote}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p
          className="text-center text-sm font-semibold mt-10 transition-all duration-300 ease-out hover:tracking-wide"
          style={{
            color: '#FACC15',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.9s ease 0.9s, letter-spacing 0.3s ease',
          }}
        >
          Gigitright was built with freelancers exactly like you in mind.
        </p>

      </div>
    </section>
  )
}

export default Platform