'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    
    
    {
      title: 'Contact Info',
      links: [
        { name: 'devanshsin2020@gmail.com', href: 'mailto:devanshsin2020@gmail.com', icon: Mail },
        { name: '+91 9125238551', href: 'tel:+919125238551', icon: Phone },
        { name: 'Uttar Pradesh, India', href: '#', icon: MapPin }
      ]
    }
  ]

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/DevanshSingh151', icon: Github, color: 'hover:text-gray-400' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/devansh-singh-08139631b/', icon: Linkedin, color: 'hover:text-blue-400' },
  ]

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage('Thank you for subscribing!')
        setEmail('')
      } else {
        setMessage(data.error || 'Failed to subscribe')
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-secondary border-t border-white/10">
      <div className="container-custom px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Devansh's Portfolio
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A passionate frontend developer, app developer and machine learning enthusiast
              creating innovative digital experiences that make a difference.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className={`p-3 bg-white/5 rounded-full border border-white/10 hover:border-accent/50 transition-all duration-300 ${social.color}`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05), duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors duration-300 group"
                    >
                      {'icon' in link && link.icon && (
                        <link.icon 
                          size={16} 
                          className="group-hover:scale-110 transition-transform duration-300" 
                        />
                      )}
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 pt-8 mb-8"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold text-white mb-4">
              Stay Updated
            </h4>
            <p className="text-gray-400 mb-6">
              Enter your email to get the latest updates on my projects and insights and to collab on any of the projects.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                required
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/80 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            {message && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-sm ${message.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}
              >
                {message}
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Devansh's Portfolio. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
