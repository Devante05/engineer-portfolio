import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-crypto-accent/5 via-transparent to-transparent"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 border border-crypto-accent/30 rotate-45 animate-float"></div>
      <div className="absolute bottom-32 right-20 w-12 h-12 border border-crypto-green/40 rotate-12 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 border border-crypto-purple/50 rotate-45 animate-float" style={{animationDelay: '2s'}}></div>

      <div className={`container mx-auto px-4 text-center relative z-10 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Software</span>
            <br />
            <span className="crypto-text-glow">Engineer</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Crafting innovative solutions with modern technologies.
            <br />
            <span className="text-crypto-accent">Building the future, one line of code at a time.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="crypto-button w-full sm:w-auto"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-crypto-accent text-crypto-accent px-6 py-3 rounded-lg font-semibold hover:bg-crypto-accent hover:text-black transition-all duration-300 w-full sm:w-auto"
            >
              Get In Touch
            </button>
          </div>

          {/* Testimonial Quote */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="crypto-card border-l-4 border-crypto-accent">
              <div className="flex items-start space-x-4">
                <span className="text-4xl text-crypto-accent">"</span>
                <div>
                  <p className="text-gray-300 italic text-lg leading-relaxed mb-4">
                    He brings the right mix of technical skill, accountability, and team spirit that every engineering team needs.
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <p className="text-white font-semibold">Sayeef Bazli</p>
                      <p className="text-sm text-gray-400">Director of Operations, GLG</p>
                    </div>
                    <a 
                      href="/contact-redacted-devante-reference.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-crypto-accent hover:underline"
                    >
                      Read Full Letter →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech stack preview */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {['TypeScript', 'React', 'Node.js', 'Python'].map((tech, index) => (
              <div 
                key={tech} 
                className="crypto-card text-center py-4 animate-slide-up"
                style={{animationDelay: `${0.5 + index * 0.1}s`}}
              >
                <span className="text-sm font-semibold text-crypto-accent">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-crypto-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-crypto-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}