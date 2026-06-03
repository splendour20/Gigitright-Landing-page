import { useEffect, useRef, useState } from 'react'

function Process() {
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

  const steps = [
    {
      number: '01',
      title: 'Apply To Join',
      description: 'Tell us about your specific digital skills, background, and work experience.',
    },
    {
      number: '02',
      title: 'Build Your Profile',
      description: 'Showcase what you can do professionally inside an optimized presentation container.',
    },
    {
      number: '03',
      title: 'Get Connected To Clients',
      description: 'Receive active opportunities straight from business entities searching for your core skills.',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 md:px-16 py-24"
      style={{ backgroundColor: '#F0F4FA' }}
    >
      {/* Heading */}
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        style={{
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        <span style={{ color: '#0071CE' }}>Our Simple </span>
        <span style={{ color: '#FACC15' }}>Process</span>
      </h2>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="flex flex-col items-center"
            style={{
              transition: `opacity 0.8s ease ${index * 200}ms, transform 0.8s ease ${index * 200}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            {/* Number Badge */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 font-bold text-lg"
              style={{
                backgroundColor: '#F5EDD6',
                color: '#FACC15',
                transition: `opacity 0.8s ease ${index * 200 + 100}ms, transform 0.8s ease ${index * 200 + 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.85)',
              }}
            >
              {step.number}
            </div>

            {/* Title */}
            <h3
              className="font-bold text-lg mb-3"
              style={{ color: '#111827' }}
            >
              {step.title}
            </h3>

            {/* Description */}
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: '#6B7280' }}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process