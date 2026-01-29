'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '(337) 251-3216',
      link: 'tel:+13372513216',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@youngsvillehistorymuseum.com',
      link: 'mailto:info@youngsvillehistorymuseum.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Youngsville, Louisiana 70592',
      link: null,
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Opening Soon',
      link: null,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-museum-charcoal text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-museum-red text-sm font-medium uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="heading-display text-white mt-4 mb-6">
              Contact{' '}
              <span className="text-museum-red">Us</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Have questions about the museum, want to donate an artifact, or interested
              in supporting our mission? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-semibold text-museum-charcoal mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-museum-charcoal mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 border-2 border-museum-cream focus:border-museum-red outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-museum-charcoal mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 border-2 border-museum-cream focus:border-museum-red outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-museum-charcoal mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 border-2 border-museum-cream focus:border-museum-red outline-none transition-colors bg-white"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="visit">Planning a Visit</option>
                      <option value="group">Group Tours</option>
                      <option value="donate">Donations & Support</option>
                      <option value="artifact">Artifact Donation</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-museum-charcoal mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 border-2 border-museum-cream focus:border-museum-red outline-none transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-museum-charcoal mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-museum-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-museum-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-museum-charcoal">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-museum-charcoal-light hover:text-museum-red transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-museum-charcoal-light">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="pt-6 border-t border-museum-cream">
                <h3 className="font-medium text-museum-charcoal mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/youngsvillehistorymuseum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-museum-charcoal flex items-center justify-center text-white hover:bg-museum-red transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-museum-charcoal flex items-center justify-center text-white hover:bg-museum-red transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8 bg-museum-cream p-6">
                <h3 className="font-semibold text-museum-charcoal mb-2">
                  Stay Updated
                </h3>
                <p className="text-sm text-museum-charcoal-light mb-4">
                  Subscribe to our newsletter for museum news and updates.
                </p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 border-2 border-white focus:border-museum-red outline-none text-sm"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-museum-red text-white text-sm font-medium hover:bg-museum-red-dark transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-museum-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-museum-red text-sm font-medium uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="heading-section text-museum-charcoal mt-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'When will the museum open?',
                answer: 'We are currently preparing for our grand opening. Subscribe to our newsletter or follow us on social media to be the first to know when we open.',
              },
              {
                question: 'Is there an admission fee?',
                answer: 'Admission to the Youngsville History Museum is free. We gratefully accept donations to support our preservation and educational programs.',
              },
              {
                question: 'Can I donate historical items or photographs?',
                answer: 'Yes! We welcome donations of artifacts, photographs, and documents related to Youngsville history. Please contact us to discuss potential donations.',
              },
              {
                question: 'Do you offer group tours?',
                answer: 'We will offer guided tours for school groups, tour groups, and organizations. Contact us in advance to arrange your group visit.',
              },
              {
                question: 'How can I support the museum?',
                answer: 'You can support us through donations, memberships, sponsorships, or volunteering. Visit our Support page to learn more about giving opportunities.',
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-museum-charcoal mb-2">
                  {faq.question}
                </h3>
                <p className="text-museum-charcoal-light">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
