'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Video, Smartphone } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'HTML Developer',
      period: '2024-2025',
      description: 'Developed responsive and accessible web applications using modern HTML5 standards, CSS3, and JavaScript. Collaborated with design teams to implement pixel-perfect layouts.',
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'App Developer',
      period: '2024-2025',
      description: 'Built scalable apps using Kotlin+Java and React Native (modern app development).',
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
    
    {
      id: 4,
      title: 'Machine Learning Enthusisat',
      period: '2024-2025',
      description: 'Still in my learnig phase of machine learning. Built some models which using various regressions and classification algorithms. Exploring the world of Generative AI.',
      icon: Smartphone,
      color: 'from-orange-500 to-red-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="experience" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I have done so far
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
           My journey in this tech-field is constantly growing and I am learning new things every day.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-accent/50 to-transparent h-full hidden lg:block" />
          
          <div className="space-y-12 lg:space-y-0">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 text-center lg:text-left ${
                  index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                }`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 group">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${experience.color} group-hover:scale-110 transition-transform duration-300`}>
                        <experience.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                          {experience.title}
                        </h3>
                        <p className="text-accent font-medium">{experience.period}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-accent/25">
                    <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-accent rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Spacer for mobile */}
                <div className="lg:hidden w-full h-8" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'HTML/CSS', level: 90 },
              { name: 'JavaScript', level: 80 },
              { name: 'React/Next.js', level: 70 },
              { name: 'Node.js', level: 70 },
              { name: 'Mobile Development', level: 50 },
              { name: 'Machine Learning', level: 60},
            ].map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="text-sm font-medium text-gray-300">{skill.name}</div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-2 bg-gradient-to-r from-accent to-blue-500 rounded-full"
                  />
                </div>
                <div className="text-xs text-gray-400">{skill.level}%</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
