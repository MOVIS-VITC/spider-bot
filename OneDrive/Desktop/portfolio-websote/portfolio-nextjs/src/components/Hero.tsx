'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Download, Github, ArrowRight } from 'lucide-react'
import Typed from 'typed.js'

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          'Web Developer',
          'Machine Learning',
          'App Developer'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      })

      return () => {
        typed.destroy()
      }
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                Hi, My name is{' '}
                <span className="text-gradient">Devansh</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300"
              >
                and I am a passionate{' '}
                <span 
                  ref={typedRef}
                  className="text-accent font-semibold"
                />
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              
              
              <a 
                href="https://github.com/DevanshSingh151" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2 group"
              >
                <Github size={20} />
                Visit Github
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-accent rounded-full mt-2"
                />
              </div>
              Scroll to explore
            </motion.div>
          </motion.div>

          {/* Right Section - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-accent/20 to-blue-500/20 p-1">
                  <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                                         <img
                       src="/developer.png"
                       alt="Devansh - Software Developer"
                       className="w-full h-full object-cover rounded-full"
                     />
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center"
              >
                <div className="w-8 h-8 bg-accent rounded-full"></div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [360, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center"
              >
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
