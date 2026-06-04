import { useEffect, useRef, useState } from 'react'
import { Plus, X } from 'lucide-react'

function FAQ() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState(1)
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

  const faqs = [
    {
      number: '01',
      question: 'Who can apply?',
      answer: 'Gigitright is open to skilled freelancers across Africa who are committed to delivering quality work and building long-term professional relationships with global clients. During this Early Access phase, applications are reviewed by invitation and selected based on skill, readiness, and portfolio quality.',
    },
    {
      number: '02',
      question: 'Is Gigitright only for experienced freelancers?',
      answer: 'No. While experienced professionals are encouraged to apply, we also welcome emerging talent who can demonstrate strong skills, professionalism, and a willingness to grow. Our focus is on quality, reliability, and potential; not just years of experience.',
    },
    {
      number: '03',
      question: 'What industries are accepted?',
      answer: 'We support freelancers across a wide range of industries, including: Graphic Design & Creative Services, UI/UX Design, Web & Mobile Development, Digital Marketing, Content Writing & Copywriting, Virtual Assistance, Customer Support, Business Services & Consulting, Video Editing & Animation, and Data Analysis & Research. Additional categories will continue to be added as the platform grows.',
    },
    {
      number: '04',
      question: 'Is Gigitright currently open?',
      answer: 'Gigitright is currently in its Early Access phase. Freelancer onboarding is limited and invitation-based, while clients can submit project briefs or speak with our team to access verified African talent.',
    },
    {
      number: '05',
      question: 'Can I work remotely?',
      answer: 'Yes. Gigitright is built for remote work and global collaboration. Freelancers can work from anywhere while serving clients across different countries and industries, provided they can communicate effectively and deliver quality results.',
    },
    {
      number: '06',
      question: 'How do I get invited to Gigitright?',
      answer: 'Simply submit an Early Access application. Our team will review your profile, portfolio, and experience. Selected applicants will receive an invitation and onboarding instructions.',
    },
    {
      number: '07',
      question: 'How does Gigitright differ from other freelance platforms?',
      answer: 'Gigitright combines verified talent, structured onboarding, quality vetting, and concierge-supported client matching to create a more trusted and productive experience for both freelancers and clients.',
    },
    {
      number: '08',
      question: 'Are there any fees to join?',
      answer: 'Applying for Early Access is free. Any future premium services or optional upgrades will be communicated transparently to users.',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 md:py-24"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Centered Container */}
      <div className="max-w-2xl mx-auto px-6">

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.9s ease 0s, transform 0.9s ease 0s',
          }}
        >
          <span style={{ color: '#0071CE' }}>Frequently Asked </span>
          <span style={{ color: '#FACC15', fontStyle: 'italic' }}>Questions</span>
        </h2>

        {/* FAQ List */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: '1px solid #E5E7EB',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.9s ease 0.2s',
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                backgroundColor: openIndex === index ? '#EBF5FF' : '#ffffff',
                borderBottom: index !== faqs.length - 1 ? '1px solid #E5E7EB' : 'none',
                transition: 'background-color 0.3s ease',
              }}
            >
              {/* Question Row */}
              <button
                className="w-full flex items-center gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {/* Number */}
                <span
                  className="text-sm font-semibold w-6 shrink-0"
                  style={{ color: openIndex === index ? '#0071CE' : '#9CA3AF' }}
                >
                  {faq.number}
                </span>

                {/* Question */}
                <span
                  className="flex-1 font-semibold text-sm md:text-base"
                  style={{ color: openIndex === index ? '#0071CE' : '#111827' }}
                >
                  {faq.question}
                </span>

                {/* Icon */}
                {openIndex === index ? (
                  <X size={18} strokeWidth={1.5} style={{ color: '#9CA3AF', flexShrink: 0 }} />
                ) : (
                  <Plus size={18} strokeWidth={1.5} style={{ color: '#9CA3AF', flexShrink: 0 }} />
                )}
              </button>

              {/* Answer */}
              <div
                style={{
                  maxHeight: openIndex === index ? '300px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease',
                }}
              >
                <p
                  className="px-6 pb-5 text-sm leading-relaxed"
                  style={{ color: '#6B7280', paddingLeft: '3.5rem' }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQ