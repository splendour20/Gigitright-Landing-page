import { useEffect, useRef, useState } from 'react'
import { Palette, Briefcase, Monitor } from 'lucide-react'

function Opportunities() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0, rootMargin: '0px 0px -50px 0px' }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const cards = [
    {
      icon: <Palette size={20} strokeWidth={1.5} style={{ color: '#6B7280' }} />,
      title: "Creative Roles",
      items: ["Content Creators", "Video Editors", "Graphic Designers", "Social Media Managers"],
    },
    {
      icon: <Briefcase size={20} strokeWidth={1.5} style={{ color: '#6B7280' }} />,
      title: "Business Support",
      items: ["Virtual Assistants", "Customer Support", "Data Entry Assistants", "Admin Support"],
    },
    {
      icon: <Monitor size={20} strokeWidth={1.5} style={{ color: '#6B7280' }} />,
      title: "Digital & Tech",
      items: ["Web Designers", "UI/UX Designers", "Developers", "Digital Marketers"],
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 md:px-16 pt-2 md:pt-20 pb-20"
    >
      {/* Heading */}
      <h2
        className="text-4xl md:text-5xl font-bold text-center leading-tight max-w-4xl mx-auto mb-12"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.9s ease 0s, transform 0.9s ease 0s',
        }}
      >
        <span style={{ color: '#0071CE' }}>Opportunities For </span>
        <span style={{ color: '#FACC15' }}>Different Skill Sets</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={card.title}
            className="rounded-2xl p-8 transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1.5 hover:shadow-xl"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #E5E7EB',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: `opacity 0.9s ease ${0.2 + index * 0.15}s, transform 0.9s ease ${0.2 + index * 0.15}s, box-shadow 0.3s ease, transform 0.3s ease`,
            }}
          >
            {/* Icon Box */}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ease-out group-hover:bg-gray-100"
              style={{
                backgroundColor: '#f1f2f4',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                transition: `opacity 0.9s ease ${0.3 + index * 0.15}s, transform 0.9s ease ${0.3 + index * 0.15}s`,
              }}
            >
              {card.icon}
            </div>

            {/* Title */}
            <h3
              className="font-bold text-xl mb-5 transition-all duration-300 ease-out"
              style={{ color: '#111827' }}
            >
              {card.title}
            </h3>

            {/* List */}
            <ul className="space-y-3">
              {card.items.map((item, itemIndex) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm transition-all duration-300 ease-out hover:translate-x-1"
                  style={{
                    color: '#374151',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                    transition: `opacity 0.7s ease ${0.4 + index * 0.15 + itemIndex * 0.07}s, transform 0.7s ease ${0.4 + index * 0.15 + itemIndex * 0.07}s`,
                  }}
                >
                  <span
                    className="shrink-0 transition-all duration-300 ease-out"
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#FACC15',
                      display: 'inline-block',
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <p
        className="text-center mt-12 text-sm italic"
        style={{
          color: '#000000',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.9s ease 0.8s, transform 0.9s ease 0.8s',
        }}
      >
        If you have a valuable digital skill and you're ready to work professionally,{" "}
        <br />
        <span className="font-bold not-italic transition-all duration-300 hover:opacity-80" style={{ color: '#FACC15' }}>
          Gigitright is built for you.
        </span>
      </p>
    </section>
  )
}

export default Opportunities