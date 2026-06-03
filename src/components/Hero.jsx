import { ArrowRight } from 'lucide-react'
import { CheckCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const APPLY_LINK = "https://forms.zohopublic.eu/Gigitright/form/GIGITRIGHTFREELANCERAPPLICATIONFORM2/formperma/PbpWLiSGjFwbfJjzwzyRLB8mPTtMecid6VfLg5Bffdk"

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const badges = [
    "Global Opportunities",
    "Remote Work Access",
    "Flexible Freelance Growth",
    "Built For African Talent",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-white">

      {/* Blue Section */}
      <section
        className="bg-[#0071CE] w-full text-center pt-12 px-6"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
          paddingBottom: '220px',
        }}
      >
        {/* Heading with Animation */}
        <div
          className={`transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight max-w-2xl mx-auto">
            Turn Your Skills Into{" "}
            <span className="text-[#FACC15]">Global Opportunities</span>
          </h1>
        </div>

        {/* Subtext with Animation */}
        <div
          className={`transition-all duration-700 delay-100 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <p className="text-white text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed opacity-90">
            Gigitright connects skilled African freelancers with businesses and clients
            looking for reliable remote talent. Whether you're a creative, virtual assistant,
            marketer, designer, or tech professional, this is your opportunity to grow your
            freelance career.
          </p>
        </div>

        {/* CTA Button with Animation & Hover Effect */}
        <div
          className={`transition-all duration-700 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="mt-6">
            <a
              href={APPLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FACC15] text-gray-900 font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Apply For Early Access
              <ArrowRight size={16} strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

      {/* Hero Image — overlaps deep into blue with Animation */}
      <div
        className={`relative z-10 max-w-3xl mx-auto px-6 -mt-48 transition-all duration-700 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
        }`}
        style={{ transitionDelay: '300ms' }}
      >
        <img
          src="/NEW-HERO.png"
          alt="Gigitright Hero"
          className="w-full h-[420px] object-cover object-top rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
        />
      </div>

      {/* Badges with Staggered Animation & Hover Effects */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pb-12 px-6">
        {badges.map((badge, index) => (
          <div
            key={badge}
            className={`flex items-center gap-2 transition-all duration-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${400 + index * 100}ms` }}
          >
            <div className="group flex items-center gap-2 cursor-pointer transition-all duration-300 hover:translate-x-1">
              <CheckCircle size={18} className="text-[#ffc220] transition-all duration-300 group-hover:scale-110" strokeWidth={2} />
              <span className="text-gray-700 text-sm font-medium transition-all duration-300 group-hover:text-[#0071CE]">{badge}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Hero