import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, Shield, Zap, Users, CheckCircle, Github, ExternalLink } from "lucide-react"
import { usePageTitle } from "@/hooks/usePageTitle"

function About() {
  usePageTitle("About Us - Platform Comparison")
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-cyan-100">
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
              About MetaChamber
            </h1>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            Open-source metadata management platform built for modern data teams
          </p>
        </div>
      </header>

      {/* Vision Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            MetaChamber aims to democratize data governance by providing an open-source, 
            community-driven platform that makes metadata management accessible to organizations of all sizes. 
            We believe that effective data governance shouldn't be limited to enterprises with massive budgets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 border-blue-100 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <Database className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-gray-900 font-bold">Open Source</CardTitle>
              <CardDescription className="text-gray-700 font-medium">
                Community-driven development with full transparency and extensibility
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-cyan-600" />
              </div>
              <CardTitle>Enterprise Ready</CardTitle>
              <CardDescription>
                Scalable architecture designed for production workloads and compliance
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <CardTitle>Community First</CardTitle>
              <CardDescription>
                Built by the community, for the community, with active contribution from data professionals
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How MetaChamber Compares
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how MetaChamber stacks up against other popular data catalog and metadata management platforms
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="p-4 text-center font-semibold">MetaChamber</th>
                  <th className="p-4 text-center font-semibold">Apache Atlas</th>
                  <th className="p-4 text-center font-semibold">Amundsen</th>
                  <th className="p-4 text-center font-semibold">DataHub</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">Open Source</td>
                  <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">Easy Setup</td>
                  <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center text-gray-400">Complex</td>
                  <td className="p-4 text-center text-gray-400">Moderate</td>
                  <td className="p-4 text-center text-gray-400">Moderate</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">Modern UI/UX</td>
                  <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center text-gray-400">Basic</td>
                  <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">Cloud Native</td>
                  <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center text-gray-400">Limited</td>
                  <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">Data Lineage</td>
                  <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center text-gray-400">Basic</td>
                  <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">API-First Design</td>
                  <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center text-gray-400">Limited</td>
                  <td className="p-4 text-center text-gray-400">Basic</td>
                  <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">Active Community</td>
                  <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center text-gray-400">Moderate</td>
                  <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-medium">Learning Curve</td>
                  <td className="p-4 text-center text-green-600 font-medium">Low</td>
                  <td className="p-4 text-center text-red-600 font-medium">High</td>
                  <td className="p-4 text-center text-yellow-600 font-medium">Medium</td>
                  <td className="p-4 text-center text-yellow-600 font-medium">Medium</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white" asChild>
              <a href="https://github.com/metachamber/metachamber-back" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Try MetaChamber Today
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Built for Scale
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            MetaChamber is designed with modern architecture principles to handle enterprise-scale workloads
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Microservices Architecture</CardTitle>
              <CardDescription>
                Modular design with independent services for scalability and maintainability
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-cyan-600" />
              </div>
              <CardTitle>Event-Driven Processing</CardTitle>
              <CardDescription>
                Real-time metadata updates and notifications through event streaming
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-teal-600" />
              </div>
              <CardTitle>Security First</CardTitle>
              <CardDescription>
                Built-in authentication, authorization, and audit logging for enterprise compliance
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the MetaChamber Community
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Help us build the future of open-source metadata management. Contribute code, share ideas, or simply star our repository.
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
                <ExternalLink className="mr-2 h-5 w-5" />
                Documentation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About