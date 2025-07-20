import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Shield, Zap, Users, Star, ArrowRight, CheckCircle, Github, ExternalLink } from "lucide-react"
import { usePageTitle } from "@/hooks/usePageTitle"
import { GitHubStats } from "@/components/GitHubStats"
import { GitHubBadge } from "@/components/GitHubBadge"

function Home() {
  usePageTitle("Open Source Metadata Management Platform")
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-100">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/metachamber_logo.png" 
                alt="MetaChamber" 
                className="h-20 w-auto mr-4"
              />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                MetaChamber
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
              Discover, catalog, and govern your data assets with intelligent metadata management
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" asChild>
              <a href="https://github.com/metachamber/metachamber-back" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg transition-all duration-200" asChild>
              <a href="https://github.com/metachamber/metachamber-back/blob/main/README.md" target="_blank" rel="noopener noreferrer">
                Documentation
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* GitHub Stats Badge */}
          <div className="mb-12">
            <GitHubBadge />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-md">
              <div className="text-4xl font-bold text-blue-700 mb-2">500+</div>
              <div className="text-gray-800 font-medium">Data Sources</div>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-md">
              <div className="text-4xl font-bold text-cyan-600 mb-2">Open</div>
              <div className="text-gray-800 font-medium">Source</div>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-md">
              <div className="text-4xl font-bold text-emerald-600 mb-2">1M+</div>
              <div className="text-gray-800 font-medium">Records Managed</div>
            </div>
          </div>
        </div>
      </header>

      {/* Application Preview Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            See MetaChamber in Action
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Experience the power of intelligent metadata management with our intuitive interface
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="absolute top-4 left-4 flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            
            <div className="pt-12 pb-8 px-8">
              <div className="bg-white rounded-lg shadow-lg p-8 min-h-96 border border-gray-100">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Database className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Preview</h3>
                    <p className="text-gray-700 mb-6 font-medium">
                      Interactive dashboard and data catalog interface coming soon
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium shadow-md">Data Discovery</span>
                      <span className="px-4 py-2 bg-cyan-600 text-white rounded-full text-sm font-medium shadow-md">Metadata Management</span>
                      <span className="px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-medium shadow-md">Governance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Powerful Features for Modern Data Teams
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Everything you need to manage, discover, and govern your data assets at scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <Database className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-gray-900 font-bold">Automated Discovery</CardTitle>
              <CardDescription className="text-gray-700 font-medium">
                Automatically discover and catalog data across your entire infrastructure
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-cyan-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-gray-900 font-bold">Data Governance</CardTitle>
              <CardDescription className="text-gray-700 font-medium">
                Implement comprehensive data governance with privacy and compliance controls
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-gray-900 font-bold">Real-time Insights</CardTitle>
              <CardDescription className="text-gray-700 font-medium">
                Get instant insights into data lineage, quality, and usage patterns
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <Users className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-gray-900 font-bold">Team Collaboration</CardTitle>
              <CardDescription className="text-gray-700 font-medium">
                Enable seamless collaboration between data engineers, analysts, and scientists
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-yellow-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <Star className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-gray-900 font-bold">Smart Search</CardTitle>
              <CardDescription className="text-gray-700 font-medium">
                Find the right data quickly with AI-powered search and recommendations
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-green-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-gray-900 font-bold">Quality Monitoring</CardTitle>
              <CardDescription className="text-gray-700 font-medium">
                Continuously monitor data quality with automated alerts and reports
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Open Source Benefits Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Open Source?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              Join the growing community of organizations building better data governance with open-source solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-blue-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Github className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">No Vendor Lock-in</h3>
                <p className="text-gray-700 text-center font-medium">
                  Full control over your data governance platform with complete source code access and the freedom to modify as needed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-cyan-100 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-cyan-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Community Driven</h3>
                <p className="text-gray-700 text-center font-medium">
                  Benefit from contributions by data professionals worldwide, with rapid innovation and diverse perspectives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-emerald-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Transparent Security</h3>
                <p className="text-gray-700 text-center font-medium">
                  Open source code means security through transparency, with community audits and rapid vulnerability fixes.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white" asChild>
              <a href="https://github.com/metachamber/metachamber-back" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Join Our Community
              </a>
            </Button>
          </div>
          
          {/* GitHub Stats */}
          <GitHubStats showContributors={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 py-16 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Data Management?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95 font-medium">
            Join thousands of data teams who trust MetaChamber to manage their most critical data assets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-semibold" asChild>
              <a href="https://github.com/metachamber/metachamber-back" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Get Started
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-200 font-semibold" asChild>
              <a href="/about">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home