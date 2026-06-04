import { Users, Globe, Briefcase, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const WhyJoin = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    {
      title: "Access To Clients",
      description: "Get discovered directly by businesses actively looking for skilled remote talent.",
      icon: Users
    },
    {
      title: "Flexible Remote Opportunities",
      description: "Work from anywhere and comfortably collaborate with clients across different international industries.",
      icon: Globe
    },
    {
      title: "Build Your Professional Presence",
      description: "Showcase your verified skills, experience background, and services professionally to global markets.",
      icon: Briefcase
    },
    {
      title: "Grow Your Freelance Career",
      description: "Gain high-value opportunities that consistently help you improve, earn, and scale your personal operations.",
      icon: TrendingUp
    }
  ];

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
    <section ref={sectionRef} className="pt-4 md:pt-20 pb-20 px-4" style={{ backgroundColor: '#F0F4FA' }}>
      <div className="max-w-7xl mx-auto">

        {/* Section Header with Animation */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0071CE]">
            Why Freelancers Are Joining{" "}
            <span className="text-[#ffc220]">Gigitright</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group h-full transition-all duration-700 transform ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full flex flex-col">

                  {/* Light Yellow Circle Background for Icon */}
                  <div className="flex justify-center mb-5">
                    <div className="w-16 h-16 bg-[#fff5e0] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        className="w-8 h-8 text-[#ffc220]"
                        strokeWidth={1.5}
                        fill="none"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed text-center flex-1">
                    {feature.description}
                  </p>

                  {/* Hover underline effect */}
                  <div className="w-0 h-0.5 bg-[#ffc220] mx-auto mt-4 group-hover:w-12 transition-all duration-300 rounded-full"></div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyJoin;