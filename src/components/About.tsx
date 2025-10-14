export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">About</span>{' '}
              <span className="crypto-text-glow">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-crypto-accent to-crypto-purple mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Results-driven Full Stack Engineer with a proven record of delivering high-quality applications. 
                Experienced in frontend and backend development using modern frameworks and databases.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Skilled in automation and integrating AI solutions to drive innovation where it adds value. 
                Strong problem-solving and algorithmic abilities, committed to building impactful and efficient solutions.
              </p>

              {/* Key stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="crypto-card text-center">
                  <div className="text-3xl font-bold crypto-text-glow mb-2">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="crypto-card text-center">
                  <div className="text-3xl font-bold crypto-text-glow mb-2">50+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Profile card */}
            <div className="crypto-card">
              <div className="text-center space-y-4">
                {/* Profile picture */}
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-crypto-accent">
                  <img 
                    src="/images/profile-picture.png" 
                    alt="Devante Williams - Software Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-white">Devante Williams</h3>
                <p className="text-crypto-accent font-semibold">Full Stack Developer</p>
                
                {/* Social links */}
                <div className="flex justify-center space-x-4 pt-4">
                  <a href="https://github.com/Devante05" className="w-10 h-10 border border-crypto-accent rounded-full flex items-center justify-center hover:bg-crypto-accent hover:text-black transition-all duration-300">
                    <span className="text-sm font-bold">GH</span>
                  </a>
                  <a href="https://www.linkedin.com/in/devante-williams-" className="w-10 h-10 border border-crypto-accent rounded-full flex items-center justify-center hover:bg-crypto-accent hover:text-black transition-all duration-300">
                    <span className="text-sm font-bold">LI</span>
                  </a>
                </div>

                {/* Resume QR Code */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-3">📄 My Resume</h4>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 border-2 border-crypto-accent rounded-lg overflow-hidden bg-white p-1">
                      <img 
                        src="/images/frame.png" 
                        alt="Scan QR code to view resume"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-xs text-gray-400 text-center max-w-32">
                      Scan to view my resume
                    </p>
                    <a 
                      href="/resume.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-3 py-1 border border-crypto-accent text-crypto-accent rounded hover:bg-crypto-accent hover:text-black transition-all duration-300"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}