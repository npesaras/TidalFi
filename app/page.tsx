"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Waves, Fish, Shield, TrendingUp, Users, BarChart3, Globe } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated")
    setIsAuthenticated(authStatus === "true")
  }, [])

  const handleGetStarted = () => {
    if (isAuthenticated) {
      window.location.href = "/dashboard"
    } else {
      window.location.href = "/auth"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-900">TidalFi</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/help">Help</Link>
            </Button>
            <Button onClick={handleGetStarted}>{isAuthenticated ? "Go to Dashboard" : "Get Started"}</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Revolutionize Your <span className="text-blue-600">Fish Farming</span> Business
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Transform your aquaculture operations with blockchain-powered tokenization, real-time IoT monitoring, and
            direct marketplace access to premium restaurants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleGetStarted} className="text-lg px-8 py-3">
              Start Farming Smarter
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3" asChild>
              <Link href="/demo">Watch Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Scale Your Fish Farm</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From pond monitoring to marketplace sales, TidalFi provides the complete toolkit for modern aquaculture
            success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Fish className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Token Creation</CardTitle>
              <CardDescription>
                Transform your fish harvests into tradeable tokens and access new funding sources
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <BarChart3 className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>IoT Monitoring</CardTitle>
              <CardDescription>
                Real-time water quality, temperature, and fish health monitoring with smart alerts
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Globe className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Restaurant Marketplace</CardTitle>
              <CardDescription>
                Connect directly with premium restaurants and secure better prices for your harvest
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Shield className="h-12 w-12 text-orange-600 mb-4" />
              <CardTitle>Sustainability Tracking</CardTitle>
              <CardDescription>
                Monitor and showcase your environmental impact with comprehensive sustainability metrics
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-red-600 mb-4" />
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>
                Track growth rates, feeding efficiency, and profitability with detailed analytics
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Users className="h-12 w-12 text-indigo-600 mb-4" />
              <CardTitle>Community Network</CardTitle>
              <CardDescription>
                Connect with other farmers, share best practices, and learn from industry experts
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TidalFi?</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Maximize Your Farm's Potential</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Badge className="bg-green-100 text-green-800 p-2">
                    <TrendingUp className="h-4 w-4" />
                  </Badge>
                  <div>
                    <h4 className="font-semibold text-gray-900">Increase Revenue</h4>
                    <p className="text-gray-600">Access premium restaurant markets and secure better prices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge className="bg-blue-100 text-blue-800 p-2">
                    <BarChart3 className="h-4 w-4" />
                  </Badge>
                  <div>
                    <h4 className="font-semibold text-gray-900">Optimize Operations</h4>
                    <p className="text-gray-600">Real-time monitoring and AI-driven insights improve efficiency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge className="bg-purple-100 text-purple-800 p-2">
                    <Shield className="h-4 w-4" />
                  </Badge>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ensure Sustainability</h4>
                    <p className="text-gray-600">Track and improve your environmental impact</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 text-center">
              <Fish className="h-24 w-24 text-blue-600 mx-auto mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-4">Join the Future of Aquaculture</h4>
              <p className="text-gray-600 mb-6">
                Be part of the sustainable fishing revolution with blockchain technology
              </p>
              <Button size="lg" onClick={handleGetStarted}>
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Fish Farm?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of farmers who are already using TidalFi to optimize their operations and increase their
            profits.
          </p>
          <Button size="lg" onClick={handleGetStarted} className="text-lg px-8 py-3">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Waves className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">TidalFi</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing aquaculture with blockchain technology and sustainable practices.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/features" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="hover:text-white">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-white">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TidalFi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
