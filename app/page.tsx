"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Code, Globe, Mail, Phone, Rocket, Server } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Code className="h-6 w-6 text-purple-500" />
            <span className="text-xl font-bold">Sites by Keaton</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild className="bg-purple-600 hover:bg-purple-700">
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="inline-block rounded-full bg-purple-900/30 px-3 py-1 text-sm text-purple-400 mb-4">
              Modern Websites in 3 Days
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl">
              Fast, Modern Web Design for Your Business
            </h1>
            <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get a professional website designed and developed in just 3 days. Modern design, fast turnaround,
              affordable pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Link href="#contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#pricing" className="group">
                  View Pricing
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-950">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What I Offer</h2>
            <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
              Professional web design and development services with a focus on speed and quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <Rocket className="h-12 w-12 text-purple-500 mb-4" />
                  <CardTitle>Fast Turnaround</CardTitle>
                  <CardDescription className="text-gray-400">Get your website in just 3 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    No long waiting periods. I work efficiently to deliver your website quickly without compromising on
                    quality.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <Globe className="h-12 w-12 text-purple-500 mb-4" />
                  <CardTitle>Modern Design</CardTitle>
                  <CardDescription className="text-gray-400">Sleek, responsive websites</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Clean, modern designs that look great on all devices. Your website will stand out with a
                    professional appearance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <Server className="h-12 w-12 text-purple-500 mb-4" />
                  <CardTitle>Hosting Options</CardTitle>
                  <CardDescription className="text-gray-400">Flexible hosting solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Choose between self-hosting or let me handle the hosting for you with reliable and fast servers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple Pricing</h2>
            <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
              Affordable options for businesses of all sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-800 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Self-Hosted</CardTitle>
                  <div className="mt-4 flex items-baseline text-gray-100">
                    <span className="text-4xl font-extrabold tracking-tight">€150</span>
                    <span className="ml-1 text-xl font-semibold text-gray-400">one-time</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">Perfect for those who want to manage their own hosting.</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      Custom website design
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      3-day turnaround
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      Mobile responsive
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      Source code included
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      Setup instructions
                    </li>
                  </ul>
                  <Button asChild className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-800 border-purple-500 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-purple-600 rounded-full p-10"></div>
                <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  RECOMMENDED
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Hosted Solution</CardTitle>
                  <div className="mt-4 flex items-baseline text-gray-100">
                    <span className="text-4xl font-extrabold tracking-tight">€150</span>
                    <span className="ml-1 text-xl font-semibold text-gray-400">+ €20/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">Let me handle everything, including hosting and maintenance.</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      Everything in Self-Hosted
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      Managed hosting
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      SSL certificate
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      Regular backups
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      Basic maintenance
                    </li>
                  </ul>
                  <Button asChild className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-950">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
              Ready to start your project? Contact me today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-purple-900/30 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-gray-400">39-248-274-6953</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-900/30 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-gray-400">keatonrproud@gmail.com</p>
                </div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Why Choose Me?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>Fast 3-day turnaround for most projects</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>Modern, responsive designs that look great on all devices</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>Affordable pricing with flexible options</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>Personal attention to your project's specific needs</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription className="text-gray-400">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium leading-none">
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium leading-none">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Describe your project..."
                        />
                      </div>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-purple-500" />
            <span className="text-lg font-bold">Sites by Keaton</span>
          </div>
          <p className="text-center text-sm text-gray-400 md:text-left">
            © {new Date().getFullYear()} Sites by Keaton. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
