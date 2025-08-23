'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Users, Download } from 'lucide-react'

interface SubscriberData {
  subscribers: string[]
  count: number
}

export default function AdminPage() {
  const [subscribers, setSubscribers] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchSubscribers()
  }, [])

  const fetchSubscribers = async () => {
    try {
      const response = await fetch('/api/subscribe')
      const data: SubscriberData = await response.json()
      
      if (response.ok) {
        setSubscribers(data.subscribers)
      } else {
        setError('Failed to fetch subscribers')
      }
    } catch (error) {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const downloadEmails = () => {
    const csvContent = `Email\n${subscribers.join('\n')}`
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `subscribers-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-white text-xl">Loading subscribers...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark text-white p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">📧 Email Subscribers</h1>
          <p className="text-gray-400 text-lg">Manage your newsletter subscribers</p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-secondary/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3">
              <Users className="text-accent" size={24} />
              <div>
                <div className="text-2xl font-bold">{subscribers.length}</div>
                <div className="text-gray-400">Total Subscribers</div>
              </div>
            </div>
          </div>

          <div className="bg-secondary/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3">
              <Mail className="text-accent" size={24} />
              <div>
                <div className="text-2xl font-bold">{subscribers.length}</div>
                <div className="text-gray-400">Active Emails</div>
              </div>
            </div>
          </div>

          <div className="bg-secondary/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3">
              <Download className="text-accent" size={24} />
              <div>
                <button
                  onClick={downloadEmails}
                  className="text-2xl font-bold hover:text-accent transition-colors cursor-pointer"
                >
                  Download CSV
                </button>
                <div className="text-gray-400">Export List</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Subscribers List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-secondary/50 rounded-lg border border-white/10 overflow-hidden"
        >
          <div className="p-6 border-b border-white/10">
            <h2 className="text-xl font-semibold">Subscriber List</h2>
          </div>
          
          {error ? (
            <div className="p-6 text-red-400">{error}</div>
          ) : subscribers.length === 0 ? (
            <div className="p-6 text-gray-400 text-center">No subscribers yet</div>
          ) : (
            <div className="max-h-96 overflow-y-auto">
              {subscribers.map((email, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 border-b border-white/10 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                      <Mail size={16} className="text-accent" />
                    </div>
                    <span className="font-mono">{email}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Refresh Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <button
            onClick={fetchSubscribers}
            className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/80 transition-colors"
          >
            Refresh List
          </button>
        </motion.div>
      </div>
    </div>
  )
}
