export default function WorkExperience() {
  const experiences = [
    {
      title: 'Continuous Operations Software Engineer',
      company: 'Gerson Lehrman Group',
      location: 'Austin, TX',
      period: '06/2021 - 10/2025',
      responsibilities: [
        'Develop and maintain frontend and backend software solutions to enhance application features and performance',
        'Resolve tickets related to application bugs and errors, implementing optimal software solutions',
        'Utilize CI/CD tooling for seamless integration and deployment processes',
        'Apply extensive knowledge of AWS Cloud environments and tools',
        'Demonstrate expertise in version control systems, particularly Git, ensuring efficient code collaboration and management',
        'Familiarity with container orchestration systems and microservices architecture',
        'Employ server and application monitoring systems to ensure high performance and reliability',
        'Contribute to configuration management and server automation',
        'Collaborate with cross-functional teams, gathering requirements and studying systems flow to develop tailored software solutions',
        'Prepare and present system specifications, standards, and programming to stakeholders',
        'Analyze and summarize development and service issues, providing valuable insights and recommendations'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Work</span>{' '}
            <span className="crypto-text-glow">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-crypto-accent to-crypto-purple mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A summary of my professional journey and key contributions in software engineering.
          </p>
        </div>

        {/* Experience cards */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="crypto-card group hover:border-crypto-green transition-all duration-300 mb-8"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-crypto-accent">
                      <span className="font-semibold">{exp.company}</span>
                      <span className="hidden sm:block text-gray-400">•</span>
                      <span className="text-gray-300">{exp.location}</span>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1 bg-crypto-accent/20 text-crypto-accent rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities & Achievements:</h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-crypto-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="crypto-card text-center">
            <div className="text-3xl mb-4">⚡</div>
            <h4 className="text-xl font-bold text-white mb-2">Problem Solver</h4>
            <p className="text-gray-300">
              Expert at identifying and resolving complex software issues and performance bottlenecks
            </p>
          </div>

          <div className="crypto-card text-center">
            <div className="text-3xl mb-4">🚀</div>
            <h4 className="text-xl font-bold text-white mb-2">DevOps Focused</h4>
            <p className="text-gray-300">
              Strong background in CI/CD, cloud infrastructure, and automated deployment processes
            </p>
          </div>

          <div className="crypto-card text-center">
            <div className="text-3xl mb-4">🤝</div>
            <h4 className="text-xl font-bold text-white mb-2">Team Player</h4>
            <p className="text-gray-300">
              Collaborative approach to working with cross-functional teams and stakeholders
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}