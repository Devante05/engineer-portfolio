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
                I'm a passionate software engineer with expertise in building scalable web applications 
                and modern user experiences. With a strong foundation in both frontend and backend technologies, 
                I enjoy solving complex problems and turning ideas into reality.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in software development has led me to work with cutting-edge technologies 
                including React, Node.js, TypeScript, and various cloud platforms. I believe in writing 
                clean, maintainable code and following best practices.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source 
                projects, or sharing knowledge with the developer community.
              </p>

              {/* Key stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="crypto-card text-center">
                  <div className="text-3xl font-bold crypto-text-glow mb-2">3+</div>
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
                {/* Profile placeholder */}
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-crypto-accent to-crypto-purple rounded-full flex items-center justify-center">
                  <span className="text-6xl text-white font-bold">DS</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white">Devante Smith</h3>
                <p className="text-crypto-accent font-semibold">Full Stack Developer</p>
                
                {/* Social links */}
                <div className="flex justify-center space-x-4 pt-4">
                  <a href="#" className="w-10 h-10 border border-crypto-accent rounded-full flex items-center justify-center hover:bg-crypto-accent hover:text-black transition-all duration-300">
                    <span className="text-sm font-bold">GH</span>
                  </a>
                  <a href="#" className="w-10 h-10 border border-crypto-accent rounded-full flex items-center justify-center hover:bg-crypto-accent hover:text-black transition-all duration-300">
                    <span className="text-sm font-bold">LI</span>
                  </a>
                  <a href="#" className="w-10 h-10 border border-crypto-accent rounded-full flex items-center justify-center hover:bg-crypto-accent hover:text-black transition-all duration-300">
                    <span className="text-sm font-bold">TW</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}