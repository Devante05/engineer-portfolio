const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Next.js', level: 88 },
      { name: 'Vue.js', level: 82 },
      { name: 'Tailwind CSS', level: 89 },
      { name: 'HTML/CSS', level: 95 }
    ]
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 91 },
      { name: 'Python', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'FastAPI', level: 80 },
      { name: 'GraphQL', level: 75 },
      { name: 'REST APIs', level: 92 }
    ]
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 78 },
      { name: 'DynamoDB', level: 85 },
      { name: 'MySQL', level: 82 },
      { name: 'Firebase', level: 80 }
    ]
  },
  {
    title: 'DevOps & Tools',
    icon: '🚀',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 86 },
      { name: 'Git', level: 95 },
      { name: 'CI/CD', level: 80 },
      { name: 'Terraform', level: 84 },
      { name: 'Vercel', level: 90 }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Technical</span>{' '}
            <span className="crypto-text-glow">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-crypto-accent to-crypto-purple mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels 
            across various technologies and frameworks.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="crypto-card group hover:border-crypto-green transition-all duration-300"
            >
              {/* Category header */}
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-crypto-accent text-sm font-bold">{skill.level}%</span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-crypto-accent to-crypto-green rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}