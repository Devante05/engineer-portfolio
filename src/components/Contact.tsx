import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Formspree endpoint for contact form
      const response = await fetch('https://formspree.io/f/mnnggnpv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })
      
      if (response.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' })
        alert('Message sent successfully! I will get back to you soon.')
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again or contact me directly at williams.devante05@gmail.com')
    }
    
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Get In</span>{' '}
            <span className="crypto-text-glow">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-crypto-accent to-crypto-purple mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your next project? Let&apos;s discuss how we can work together 
            to bring your ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Connect</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I&apos;m always interested in hearing about new opportunities, 
                  interesting projects, or just having a chat about technology. 
                  Feel free to reach out!
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 crypto-border-glow rounded-full flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <a href="mailto:williams.devante05@gmail.com" className="text-crypto-accent hover:underline">
                      williams.devante05@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 crypto-border-glow rounded-full flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <a href="tel:+1234567890" className="text-crypto-accent hover:underline">
                      +1 (512) 739-1534
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 crypto-border-glow rounded-full flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-300">Austin, TX</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 border border-crypto-accent rounded-full flex items-center justify-center hover:bg-crypto-accent hover:text-black transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <span className="font-bold">GH</span>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 border border-crypto-accent rounded-full flex items-center justify-center hover:bg-crypto-accent hover:text-black transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <span className="font-bold">LI</span>
                  </a>
                </div>
              </div>

              {/* Resume QR Code */}
              <div>
                <h4 className="text-white font-semibold mb-4">📄 Resume</h4>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 border-2 border-crypto-accent rounded-lg overflow-hidden bg-white p-1 flex-shrink-0">
                    <img 
                      src="/images/frame.png" 
                      alt="Scan QR code to view resume"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-2">
                      Scan QR code or download
                    </p>
                    <a 
                      href="/resume.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-3 py-1 border border-crypto-accent text-crypto-accent rounded hover:bg-crypto-accent hover:text-black transition-all duration-300 inline-block"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="crypto-card">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-crypto-accent focus:outline-none transition-colors duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-crypto-accent focus:outline-none transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-crypto-accent focus:outline-none transition-colors duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-crypto-accent focus:outline-none transition-colors duration-300 resize-vertical"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full crypto-button disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}