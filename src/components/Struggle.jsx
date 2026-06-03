import { useEffect, useRef, useState } from 'react'
import { XCircle, Zap } from 'lucide-react'

function Struggle() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  const struggles = [
    "Not getting enough opportunities",
    "Low-paying gigs",
    "Unprofessional clients",
    "Lack of visibility",
    "Difficulty accessing global clients",
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 md:px-16 py-16 bg-white"
    >
      {/* Heading */}
      <h2
        className={`text-4xl md:text-5xl font-bold text-[#0071CE] text-center leading-tight max-w-4xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        Freelancing Should Feel Like Opportunity,{" "}
        <span className="text-[#FACC15]">Not Struggle</span>
      </h2>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

        {/* Left Card — The Common Struggle */}
        <div
          className={`bg-white border border-gray-100 rounded-2xl p-8 shadow-md transition-all duration-700 delay-200 hover:shadow-xl hover:-translate-y-1 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Icon Box */}
          <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center mb-6 transition-all duration-300 hover:bg-red-100">
            <XCircle size={22} className="text-red-400" strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h3 className="text-gray-900 font-bold text-xl mb-3">
            The Common Struggle
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm mb-5 leading-relaxed">
            Finding clients consistently can be difficult. Many African
            freelancers struggle daily with:
          </p>

          {/* List */}
          <ul className="space-y-3">
            {struggles.map((item, index) => (
              <li 
                key={item} 
                className={`flex items-center gap-3 text-sm text-gray-600 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card — The Gigitright Bridge */}
        <div
          className={`bg-[#0071CE] rounded-2xl p-8 shadow-md transition-all duration-700 delay-300 hover:shadow-xl hover:-translate-y-1 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Icon Box */}
          <div className="w-11 h-11 rounded-xl bg-[#2e6b8a] flex items-center justify-center mb-6 transition-all duration-300 hover:bg-[#3a7d9e]">
            <Zap size={22} className="text-[#FACC15]" strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h3 className="text-white font-bold text-xl mb-3">
            The Gigitright Bridge
          </h3>

          {/* Description */}
          <p className={`text-white text-sm leading-relaxed opacity-90 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Gigitright was built to bridge that gap. We are creating a
            dedicated platform helping skilled African freelancers connect
            directly with international businesses that truly value quality,
            reliability, and professional integrity.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Struggle