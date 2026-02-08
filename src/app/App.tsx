import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Flower2, Waves, Heart, Sparkles, Send, User, Shield, Eye } from 'lucide-react';

export default function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Desktop background */}
          <img
            src="/hero-bg.png"
            alt="Avalokiteshwara - the bodhisattva of compassion"
            className="hidden md:block w-full h-full object-cover"
          />
          {/* Mobile background */}
          <img
            src="/hero-bg-mobile.png"
            alt="Avalokiteshwara - the bodhisattva of compassion"
            className="block md:hidden w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#F8F6F3]/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <blockquote
              className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-6 text-white drop-shadow-lg"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}
            >
              "The life you want is rarely reached by trying harder at the same patterns. It begins when you become curious about your inner world—and start living from the inside out."
            </blockquote>

            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-[#5D8A8E] hover:bg-[#4a6f72] text-white transition-all duration-300 rounded-md shadow-lg hover:shadow-xl mb-6"
            >
              Reach Out
            </button>

            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow">
              "Living from the inside out" starts with the kind of listening{' '}
              <a
                href="https://buddhasartofhealing.com/blogs/thangka/avalokiteshvara-and-his-thousand-armed-form"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#C9A962] underline-offset-2 hover:text-[#C9A962] transition-colors"
              >
                Avalokiteshwara
              </a>{' '}
              represents: attentive, non-judgmental, and responsive to suffering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who Needs Counselling Section */}
      <FadeInSection>
        <section className="py-24 px-6 bg-[#F8F6F3]">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-4xl md:text-5xl mb-12 text-center text-[#5D8A8E]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Who Needs Counselling?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <CounsellingCard
                icon={<Heart className="w-8 h-8" />}
                title="For Self-Care"
                description="Counselling is not a sign of weakness—it's a courageous act of self-care. Whether you're thriving or struggling, it's a space to deepen your understanding of yourself."
              />
              <CounsellingCard
                icon={<Eye className="w-8 h-8" />}
                title="For Pattern Breaking"
                description="When you notice recurring struggles in relationships, work, or mood, counselling helps you see and shift the invisible patterns that hold you back."
              />
              <CounsellingCard
                icon={<Sparkles className="w-8 h-8" />}
                title="For Growth"
                description="You don't need to be in crisis to benefit. Counselling supports transitions, aspirations, and the ongoing work of becoming more whole."
              />
            </div>

            <div className="text-center text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              <p className="mb-4">
                If you've felt stuck, disconnected, or simply curious about why you do what you do—counselling offers a gentle, structured space to explore yourself.
              </p>
              <p>
                It's proactive wellness. It's preventive care for the soul.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* My Beliefs and Approach Section */}
      <FadeInSection>
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-4xl md:text-5xl mb-12 text-center text-[#5D8A8E]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              My Beliefs and Approach
            </h2>

            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <ApproachItem
                icon={<User className="w-6 h-6 text-[#A8C5D1]" />}
                title="Agency"
                description="The client is a capable individual who has the important resources for their own healing and growth. I support the conditions needed for the work and the process."
              />

              <ApproachItem
                icon={<Waves className="w-6 h-6 text-[#A8C5D1]" />}
                title="Attunement"
                description="I aim to create a space where you can speak freely without judgment. My role is to listen deeply, attune to what you're experiencing, and help you see yourself."
              />

              <ApproachItem
                icon={<Eye className="w-6 h-6 text-[#A8C5D1]" />}
                title="Awareness"
                description="Together, we explore the recurring themes in your life—how past experiences shape present reactions. Awareness is the first step toward change."
              />

              <ApproachItem
                icon={<Shield className="w-6 h-6 text-[#A8C5D1]" />}
                title="Permission"
                description="The relationship will hopefully result in the client giving themselves permission to break out of patterns and change. Paradoxically, change is finding and acting from your true self."
              />

              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-600 mb-4">
                  If you are new to counselling/therapy and want to get more of a feel for what happens, you could watch these short videos:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <a
                    href="https://youtu.be/JjTVxLPH7Sg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative">
                      <img
                        src="https://img.youtube.com/vi/JjTVxLPH7Sg/hqdefault.jpg"
                        alt="What is Therapy?"
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-white">
                      <p className="text-sm font-medium text-[#5D8A8E] group-hover:text-[#4a6f72]">What is Therapy?</p>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/NpPSv_u6T3o"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative">
                      <img
                        src="https://img.youtube.com/vi/NpPSv_u6T3o/hqdefault.jpg"
                        alt="What to Expect"
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-white">
                      <p className="text-sm font-medium text-[#5D8A8E] group-hover:text-[#4a6f72]">What to Expect</p>
                    </div>
                  </a>
                </div>
                <p className="italic text-gray-600">
                  My work integrates humanistic psychology, transactional analysis, and mindfulness. I'm trained in Counselling (Diploma), currently pursuing{' '}
                  <a
                    href="https://itaaworld.com/training-and-certification-overview/practitioner-training-certification/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5D8A8E] hover:text-[#4a6f72] underline"
                  >
                    CTA (Certified Transactional Analyst)
                  </a>{' '}
                  from the{' '}
                  <a
                    href="https://itaaworld.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5D8A8E] hover:text-[#4a6f72] underline"
                  >
                    International Transactional Analysis Association (ITAA)
                  </a>
                  , and certified in Stephen Covey's 7 Habits framework.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* About Me Section */}
      <FadeInSection>
        <section className="py-24 px-6 bg-[#F8F6F3]">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl md:text-5xl mb-12 text-[#5D8A8E]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              About Me
            </h2>

            <div className="flex flex-col items-center">
              <div className="w-48 h-64 rounded-lg overflow-hidden mb-8 shadow-xl border-4 border-white">
                <img
                  src="/vishnu-headshot.jpg"
                  alt="Vishnu Agnihotri"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h3
                className="text-3xl mb-3 text-[#5D8A8E]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Vishnu Agnihotri
              </h3>

              <ul className="text-gray-600 mb-8 space-y-1 list-none">
                <li>Diploma in Counselling</li>
                <li>
                  Trainee –{' '}
                  <a
                    href="https://itaaworld.com/training-and-certification-overview/practitioner-training-certification/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5D8A8E] hover:text-[#4a6f72] underline"
                  >
                    Certified Transactional Analyst
                  </a>
                </li>
                <li>35 years of work experience</li>
                <li>7 Habits Certified</li>
                <li>Co-Founder, GenWise</li>
              </ul>

              <div className="max-w-2xl text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
                <p>
                  My journey into counselling emerged from a lifelong curiosity about the human psyche. My meditation practice and work on myself through individual and group therapy have taught me the power of living life inside-out. I've spent over two decades in learning environments and believe that self-understanding is the most transformative education we can pursue.
                </p>
                <p>
                  I work with individuals seeking clarity, healing, and growth—whether navigating life transitions, relationship challenges, or the simple desire to live more authentically.
                </p>
              </div>

              <a
                href="https://discoveringpsychology.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#5D8A8E] hover:text-[#4a6f72] transition-colors underline decoration-[#C9A962] decoration-2 underline-offset-4"
              >
                <span>Read my blog: PsychoInsights for Living & Healing</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Contact Section */}
      <FadeInSection>
        <section id="contact" className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-4xl md:text-5xl mb-8 text-[#5D8A8E]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Begin Your Journey
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-10">
              <p>
                I offer a <span className="font-semibold text-[#5D8A8E]">free introductory session</span> so we can explore whether working together feels right for you. No pressure, no obligation—just a warm conversation.
              </p>

              <ContactForm />

              <p className="text-base text-gray-600 italic pt-6">
                All sessions are conducted online. They are confidential and held in a safe, non-judgmental space. Your privacy is deeply respected.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#5D8A8E] text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Flower2 className="w-5 h-5 text-[#C9A962]" />
            <span className="text-sm">avalokiteshwara.in</span>
          </div>
          <p className="text-sm text-center md:text-right">
            © 2026 Vishnu Agnihotri. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Contact Form Component
function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xreagnjl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#F8F6F3] p-8 rounded-lg text-center">
        <div className="text-[#5D8A8E] mb-2">
          <Flower2 className="w-12 h-12 mx-auto" />
        </div>
        <h3 className="text-xl font-semibold text-[#5D8A8E] mb-2">Thank You</h3>
        <p className="text-gray-600">I'll be in touch with you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#F8F6F3] p-8 rounded-lg text-left max-w-md mx-auto">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D8A8E] focus:border-transparent"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D8A8E] focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D8A8E] focus:border-transparent resize-none"
            placeholder="Tell me a little about what brings you here..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#5D8A8E] hover:bg-[#4a6f72] text-white transition-all duration-300 rounded-md shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

// Helper Components
function CounsellingCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="text-[#A8C5D1] mb-4 flex justify-center">
        {icon}
      </div>
      <h3
        className="text-xl mb-3 text-[#5D8A8E]"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function ApproachItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-xl mb-2 text-[#5D8A8E]" style={{ fontFamily: 'Playfair Display, serif' }}>
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
