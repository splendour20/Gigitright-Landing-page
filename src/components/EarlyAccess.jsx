import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, Sparkles } from 'lucide-react'

function EarlyAccess() {
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

  const perks = [
    "Early access to premium incoming client opportunities",
    "High visibility placement before the public platform launch",
    "Priority onboarding support from our community matching team",
    "The unique opportunity to grow and scale alongside the platform",
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full py-6 md:py-24"
      style={{ backgroundColor: '#0071CE' }}
    >
      {/* Centered Container */}
      <div className="max-w-xl mx-auto px-6 flex flex-col items-start">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-semibold"
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(250,204,21,0.3)',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1s ease 0s',
          }}
        >
          <Sparkles size={13} strokeWidth={1.5} color="#FACC15" />
          <span style={{ color: '#FACC15' }}>Limited Early Access</span>
        </div>

        {/* Heading */}
        <h2
          className="font-bold text-3xl md:text-4xl mb-5 leading-tight"
          style={{
            color: '#ffffff',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0px)' : 'translateY(30px)',
            transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s',
          }}
        >
          Join During The Early Access
        </h2>

        {/* Description */}
        <p
          className="text-sm md:text-base leading-relaxed mb-10"
          style={{
            color: 'rgba(255,255,255,0.8)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0px)' : 'translateY(30px)',
            transition: 'opacity 1s ease 0.4s, transform 1s ease 0.4s',
          }}
        >
          We are currently onboarding early talent profiles into the core
          Gigitright community directory. Joining during this early access
          window gives your portfolio specific advantages:
        </p>

        {/* Perks List */}
        <ul className="space-y-5 w-full">
          {perks.map((perk, index) => (
            <li
              key={perk}
              className="flex items-center gap-3 text-sm md:text-base"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0px)' : 'translateX(-30px)',
                transition: `opacity 1s ease ${0.5 + index * 0.15}s, transform 1s ease ${0.5 + index * 0.15}s`,
              }}
            >
              <CheckCircle2
                size={20}
                strokeWidth={1.5}
                color="#FACC15"
                style={{ flexShrink: 0 }}
              />
              <span style={{ color: '#ffffff' }}>{perk}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default EarlyAccess