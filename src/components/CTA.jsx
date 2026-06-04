import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const APPLY_LINK = "https://forms.zohopublic.eu/Gigitright/form/GIGITRIGHTFREELANCERAPPLICATIONFORM2/formperma/PbpWLiSGjFwbfJjzwzyRLB8mPTtMecid6VfLg5Bffdk"

function CTA() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-32 px-6 text-center"
      style={{ backgroundColor: '#0071CE' }}
    >

      {/* Heading */}
      <h2
        className="font-bold text-4xl md:text-5xl leading-tight max-w-2xl mx-auto mb-6"
        style={{
          color: '#ffffff',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 1s ease 0s, transform 1s ease 0s',
        }}
      >
        Your Skills Deserve{' '}
        <span style={{ color: '#FACC15' }}>Bigger Opportunities</span>
      </h2>

      {/* Subtext */}
      <p
        className="text-sm md:text-base max-w-md mx-auto mb-10"
        style={{
          color: 'rgba(255,255,255,0.75)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 1s ease 0.25s, transform 1s ease 0.25s',
        }}
      >
        Join Gigitright and become part of a growing network of African freelancers
        connecting with businesses worldwide.
      </p>

      {/* CTA Button */}
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
          transition: 'opacity 1s ease 0.45s, transform 1s ease 0.45s',
        }}
      >
        <a
          href={APPLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-bold text-sm md:text-base px-8 py-4 rounded-full"
          style={{
            backgroundColor: '#FACC15',
            color: '#111827',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.opacity = '0.9'
            e.currentTarget.style.transform = 'scale(1.03)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.opacity = '1'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          Apply For Early Access
          <ArrowRight size={18} strokeWidth={2} />
        </a>
      </div>

    </section>
  )
}

export default CTA