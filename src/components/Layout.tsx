import { Button } from "@/components/ui/button"
import { Github, Menu, X } from "lucide-react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b-2 border-gray-200 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center" onClick={handleHomeClick}>
              <img 
                src="/metachamber_logo.png" 
                alt="MetaChamber" 
                className="h-8 w-auto mr-3"
              />
              <span className="text-xl font-bold text-gray-900">MetaChamber</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`transition-colors font-medium ${isActive('/') ? 'text-blue-700 font-bold' : 'text-gray-700 hover:text-blue-600'}`}
                onClick={handleHomeClick}
              >
                Home
              </Link>
              <a 
                href="/#features" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Features
              </a>
              <Link 
                to="/about" 
                className={`transition-colors font-medium ${isActive('/about') ? 'text-blue-700 font-bold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors font-medium ${isActive('/contact') ? 'text-blue-700 font-bold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Contact
              </Link>
              <Button variant="outline" size="sm" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg transition-all duration-200 font-semibold" asChild>
                <a href="https://github.com/metachamber/metachamber-back" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t-2 border-gray-200 bg-white/95 backdrop-blur-sm">
              <div className="flex flex-col space-y-4 pt-4">
                <Link 
                  to="/" 
                  className={`transition-colors font-medium ${isActive('/') ? 'text-blue-700 font-bold' : 'text-gray-700 hover:text-blue-600'}`}
                  onClick={(e) => {
                    handleHomeClick(e)
                    setIsMenuOpen(false)
                  }}
                >
                  Home
                </Link>
                <a 
                  href="/#features" 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <Link 
                  to="/about" 
                  className={`transition-colors font-medium ${isActive('/about') ? 'text-blue-700 font-bold' : 'text-gray-700 hover:text-blue-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className={`transition-colors font-medium ${isActive('/contact') ? 'text-blue-700 font-bold' : 'text-gray-700 hover:text-blue-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button variant="outline" size="sm" className="w-fit border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg transition-all duration-200 font-semibold" asChild>
                  <a href="https://github.com/metachamber/metachamber-back" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t-4 border-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/metachamber_logo.png" 
                  alt="MetaChamber" 
                  className="h-8 w-auto mr-3"
                />
                <h3 className="text-xl font-bold">MetaChamber</h3>
              </div>
              <p className="text-gray-400 mb-4">
                The next-generation data catalog and governance platform
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/metachamber/metachamber-back" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#features" className="hover:text-white">Features</a></li>
                <li><a href="https://github.com/metachamber/metachamber-back" className="hover:text-white" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://github.com/metachamber/metachamber-back/blob/main/README.md" className="hover:text-white" target="_blank" rel="noopener noreferrer">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><a href="https://github.com/metachamber/metachamber-back" className="hover:text-white" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><a href="https://github.com/metachamber/metachamber-back/discussions" className="hover:text-white" target="_blank" rel="noopener noreferrer">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://github.com/metachamber/metachamber-back/issues" className="hover:text-white" target="_blank" rel="noopener noreferrer">Issues</a></li>
                <li><a href="https://github.com/metachamber/metachamber-back/discussions" className="hover:text-white" target="_blank" rel="noopener noreferrer">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MetaChamber. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout