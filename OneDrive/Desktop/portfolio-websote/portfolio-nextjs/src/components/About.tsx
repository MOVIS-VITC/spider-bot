'use client'

import { motion } from 'framer-motion'
import { Target, Code, Lightbulb, Users } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Project Tracking',
      description: 'Keep track of all my development projects, skills, and achievements in one centralized location.'
    },
    {
      icon: Code,
      title: 'Technical Showcase',
      description: 'Demonstrate my programming skills, technologies used, and problem-solving abilities through real projects.'
    },
    {
      icon: Lightbulb,
      title: 'Learning Journey',
      description: 'Document my growth as a developer, from beginner projects to advanced applications.'
    },
    {
      icon: Users,
      title: 'Collaboration Hub',
      description: 'Connect with other developers, potential employers, and clients who share similar interests.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About This Portfolio
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I created this portfolio to keep track of my projects, showcase my skills, and document my journey 
            as a developer. It serves as a central hub for all my work and achievements.
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gradient">
              Why I Built This Portfolio
            </h3>
            
            <div className="space-y-4 text-gray-300">
              <p>
                As a passionate developer, I wanted a way to organize and showcase all my projects in one place. 
                This portfolio helps me track my progress, document my learning journey, and present my work 
                professionally to potential employers and collaborators.
              </p>
              
              <p>
                It's not just about displaying projects - it's about telling the story of my growth as a developer, 
                from my first HTML pages to complex full-stack applications. Each project represents a new skill learned, 
                a problem solved, or a technology mastered.
              </p>
              
              <p>
                This portfolio also serves as a living document that I can continuously update as I learn new 
                technologies, complete new projects, and achieve new milestones in my development career.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-secondary/50 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-accent">10+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 bg-secondary/50 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-2xl p-8 border border-white/10">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <Code size={32} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold">Portfolio Purpose</h4>
                  <p className="text-gray-300 text-sm">
                    A comprehensive showcase of my development journey, skills, and projects
                  </p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center"
              >
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center"
              >
                <div className="w-5 h-5 bg-accent rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-secondary/50 p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white group-hover:text-accent transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
