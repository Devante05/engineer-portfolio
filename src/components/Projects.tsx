// Dummy project data that can be easily edited
const projects = [
  {
    id: 1,
    title: 'Small Business Website',
    description: 'A fully responsive front-end commercial website built with React and TypeScript. Deployed using Vercel.',
    technologies: ['TypeScript', 'React', 'Express', 'Vercel'],
    demoUrl: 'https://atx-iphone-repair.vercel.app/',
    githubUrl: 'https://github.com/Devante05/iphone-repair',
    image: 'https://via.placeholder.com/400x250/00d4ff/ffffff?text=E-Commerce+Platform',
    featured: true
  },
  {
    id: 2,
    title: 'Cryptocurrency Store',
    description: 'A fully responsive client-side cryptocurrency store built with React, TypeScript and compiled using Vite. Deployed using Vercel.',
    technologies: ['TypeScript', 'React', 'Vite', 'Vercel'],
    demoUrl: 'https://crypto-store-nine.vercel.app/',
    githubUrl: 'https://github.com/Devante05/crypto-store',
    image: 'https://via.placeholder.com/400x250/00ff88/000000?text=Task+Manager',
    featured: true
  }
]

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Featured</span>{' '}
            <span className="crypto-text-glow">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-crypto-accent to-crypto-purple mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            modern frameworks, and creative problem-solving.
          </p>
        </div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, _index) => (
            <div 
              key={project.id} 
              className="crypto-card group hover:scale-105 transition-all duration-300"
            >
              {/* Project image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.demoUrl} 
                    className="crypto-button text-sm py-2 px-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="border border-crypto-accent text-crypto-accent py-2 px-4 rounded-lg text-sm hover:bg-crypto-accent hover:text-black transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Project info */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-crypto-accent/20 text-crypto-accent text-sm rounded-full border border-crypto-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-white">Other</span>{' '}
            <span className="crypto-text-glow">Projects</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div 
                key={project.id} 
                className="crypto-card group hover:border-crypto-green transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-2">
                  <a 
                    href={project.demoUrl} 
                    className="flex-1 text-center py-2 px-3 border border-crypto-accent text-crypto-accent text-sm rounded hover:bg-crypto-accent hover:text-black transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="flex-1 text-center py-2 px-3 bg-gray-800 text-gray-300 text-sm rounded hover:bg-gray-700 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="crypto-button"
          >
            Let&apos;s Work Together
          </button>
        </div>
      </div>
    </section>
  )
}