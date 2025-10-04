export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold crypto-text-glow">
              &lt;/&gt;
            </div>
            <p className="text-gray-300 leading-relaxed">
              Building innovative web solutions with modern technologies. 
              Let&apos;s create something amazing together.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 border border-crypto-accent rounded-full flex items-center justify-center hover:bg-crypto-accent hover:text-black transition-all duration-300"
                aria-label="GitHub"
              >
                <span className="text-sm font-bold">GH</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-crypto-accent rounded-full flex items-center justify-center hover:bg-crypto-accent hover:text-black transition-all duration-300"
                aria-label="LinkedIn"
              >
                <span className="text-sm font-bold">LI</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-crypto-accent rounded-full flex items-center justify-center hover:bg-crypto-accent hover:text-black transition-all duration-300"
                aria-label="Twitter"
              >
                <span className="text-sm font-bold">TW</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-crypto-accent transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-crypto-accent transition-colors duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-crypto-accent transition-colors duration-300"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-crypto-accent transition-colors duration-300"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-crypto-accent transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-bold mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="text-crypto-accent">Email:</span> devante@example.com
              </p>
              <p className="text-gray-300">
                <span className="text-crypto-accent">Phone:</span> +1 (234) 567-8900
              </p>
              <p className="text-gray-300">
                <span className="text-crypto-accent">Location:</span> San Francisco, CA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Devante Smith. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-crypto-accent text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-crypto-accent text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-crypto-accent text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Back to top button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 border border-crypto-accent rounded-full flex items-center justify-center hover:bg-crypto-accent hover:text-black transition-all duration-300 group"
            aria-label="Back to top"
          >
            <span className="transform group-hover:-translate-y-1 transition-transform duration-300">↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}