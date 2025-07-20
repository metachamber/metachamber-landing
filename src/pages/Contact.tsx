import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, MessageCircle, Mail, Users, ExternalLink, Globe } from "lucide-react"
import { usePageTitle } from "@/hooks/usePageTitle"

function Contact() {
  usePageTitle("Contact Us - Get In Touch")
  return (
    <div className="bg-gradient-to-br from-slate-50 to-cyan-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/metachamber_logo.png" 
              alt="MetaChamber" 
              className="h-16 w-auto mr-4"
            />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Get in Touch
            </h1>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Connect with the MetaChamber community and maintainers
          </p>
        </div>
      </header>

      {/* Contact Options */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Github className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>GitHub Issues</CardTitle>
                <CardDescription>
                  Report bugs, request features, or ask technical questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white" asChild>
                    <a href="https://github.com/metachamber/metachamber-back/issues" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Open an Issue
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://github.com/metachamber" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Organization
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle>Community Discussions</CardTitle>
                <CardDescription>
                  Join discussions, share ideas, and get help from the community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-700 hover:to-teal-600 text-white" asChild>
                  <a href="https://github.com/metachamber/metachamber-back/discussions" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Join Discussions
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Community Forum</CardTitle>
                <CardDescription>
                  Connect with other developers and users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-teal-600 to-blue-500 hover:from-teal-700 hover:to-blue-600 text-white" asChild>
                  <a href="https://github.com/metachamber/metachamber-back/discussions" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Join Forum
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>
                  Direct contact with the maintainers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white" asChild>
                  <a href="mailto:hello@metachamber.io">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contributing Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Want to Contribute?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              MetaChamber is an open-source project and we welcome contributions from the community. 
              Whether you're a developer, designer, or documentation writer, there's a place for you.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Github className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Code</h3>
                <p className="text-sm text-gray-600">
                  Contribute features, fix bugs, or improve performance
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
                <p className="text-sm text-gray-600">
                  Help improve our docs, tutorials, and guides
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-sm text-gray-600">
                  Help other users and grow the community
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white" asChild>
                <a href="https://github.com/metachamber/metachamber-back/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Contributing Guide
                </a>
              </Button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">How can I get help with installation?</h3>
                <p className="text-gray-600">
                  Check our documentation first, then create an issue on GitHub if you're still stuck. 
                  The community is also active on Slack for real-time help.
                </p>
              </div>

              <div className="border-l-4 border-cyan-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Can I use MetaChamber in production?</h3>
                <p className="text-gray-600">
                  MetaChamber is designed for production use, but as with any open-source software, 
                  we recommend thorough testing in your environment first.
                </p>
              </div>

              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Is there commercial support available?</h3>
                <p className="text-gray-600">
                  While MetaChamber is open-source, commercial support options are being developed. 
                  Contact us via email to discuss your enterprise needs.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">How do I report security vulnerabilities?</h3>
                <p className="text-gray-600">
                  For security issues, please email us directly at security@metachamber.io rather than 
                  creating a public issue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of developers building better data governance with MetaChamber
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <a href="https://github.com/metachamber/metachamber-back" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600" asChild>
              <a href="https://github.com/metachamber/metachamber-back/blob/main/README.md" target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-5 w-5" />
                Documentation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact