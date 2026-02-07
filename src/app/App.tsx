import { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Flower2, Waves, Heart, Brain, Sparkles, Mail } from 'lucide-react';

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
          <img
            src="/hero-bg.png"
            alt="Avalokiteshwara - the bodhisattva of compassion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#F8F6F3]/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <blockquote 
              className="text-3xl md:text-4xl lg:text-5xl leading-relaxed mb-12 text-white drop-shadow-lg"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}
            >
              "The life you want is rarely reached by trying harder at the same patterns. It begins when you become curious about your inner world."
            </blockquote>
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 bg-[#5D8A8E] hover:bg-[#4a6f72] text-white transition-all duration-300 rounded-md shadow-lg hover:shadow-xl"
            >
              Reach Out
            </button>
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
                icon={<Brain className="w-8 h-8" />}
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
                If you've felt stuck, disconnected, or simply curious about why you do what you do—counselling offers a gentle, structured space to explore.
              </p>
              <p>
                It's proactive wellness. It's preventive care for the soul.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* My Approach Section */}
      <FadeInSection>
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-4xl md:text-5xl mb-12 text-center text-[#5D8A8E]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              My Approach
            </h2>
            
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <ApproachItem 
                icon={<Waves className="w-6 h-6 text-[#A8C5D1]" />}
                title="Safety & Attunement"
                description="I create a space where you can speak freely without judgment. My role is to listen deeply, attune to what you're experiencing, and help you feel truly seen."
              />
              
              <ApproachItem 
                icon={<Flower2 className="w-6 h-6 text-[#A8C5D1]" />}
                title="Pattern Recognition"
                description="Together, we explore the recurring themes in your life—how past experiences shape present reactions. Awareness is the first step toward change."
              />
              
              <ApproachItem 
                icon={<Sparkles className="w-6 h-6 text-[#A8C5D1]" />}
                title="Here-and-Now Presence"
                description="Drawing from meditation practice and contemplative traditions, I bring mindful presence to our sessions. What's happening in the room often mirrors what's happening in your life."
              />
              
              <div className="pt-6 border-t border-gray-200">
                <p className="italic text-gray-600">
                  My work integrates humanistic psychology, transactional analysis, and mindfulness. I'm trained in Counselling (Diploma), currently pursuing CTA (Certified Transactional Analyst), and certified in Stephen Covey's 7 Habits framework.
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
              <div className="w-48 h-48 rounded-full overflow-hidden mb-8 shadow-xl border-4 border-white">
                <img
                  src="/vishnu-headshot.jpg"
                  alt="Vishnu Agnihotri"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 
                className="text-3xl mb-3 text-[#5D8A8E]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Vishnu Agnihotri
              </h3>
              
              <div className="text-gray-600 mb-8 space-y-1">
                <p>Diploma in Counselling • CTA Trainee</p>
                <p>21 years of higher education • 7 Habits Certified</p>
                <p className="text-sm">Co-founder, GenWise</p>
              </div>
              
              <div className="max-w-2xl text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
                <p>
                  My journey into counselling emerged from a deep meditation practice and a lifelong curiosity about the human psyche. I've spent over two decades in learning environments and believe that self-understanding is the most transformative education we can pursue.
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
              
              <div className="inline-flex items-center gap-3 bg-[#F8F6F3] px-6 py-4 rounded-lg">
                <Mail className="w-6 h-6 text-[#5D8A8E]" />
                <a 
                  href="mailto:vishnu.agnihotri@gmail.com"
                  className="text-[#5D8A8E] hover:text-[#4a6f72] transition-colors"
                >
                  vishnu.agnihotri@gmail.com
                </a>
              </div>
              
              <p className="text-base text-gray-600 italic pt-6">
                All sessions are confidential and conducted in a safe, non-judgmental space. Your privacy is deeply respected.
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
