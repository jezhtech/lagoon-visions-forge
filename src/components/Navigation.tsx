import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Lagoon Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>

            {/* Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium">
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-border/50 shadow-float">
                <DropdownMenuItem>
                  <Link to="/about" className="w-full">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/career" className="w-full">Career</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-border/50 shadow-float">
                <DropdownMenuItem>
                  <Link to="/products/corex" className="w-full">coreX ERP</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/products/timetick" className="w-full">Time Tick</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/products/safex365" className="w-full">safeX365</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-border/50 shadow-float">
                <DropdownMenuItem>
                  <Link to="/blog" className="w-full">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/documentation" className="w-full">Documentation</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact Us
            </Link>

            <Button variant="hero" className="px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              to="/"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <div className="px-3 py-2">
              <div className="text-muted-foreground text-sm font-medium mb-2">Company</div>
              <Link
                to="/about"
                className="block px-3 py-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/career"
                className="block px-3 py-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Career
              </Link>
            </div>
            <div className="px-3 py-2">
              <div className="text-muted-foreground text-sm font-medium mb-2">Products</div>
              <Link
                to="/products/corex"
                className="block px-3 py-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                coreX ERP
              </Link>
              <Link
                to="/products/timetick"
                className="block px-3 py-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Time Tick
              </Link>
              <Link
                to="/products/safex365"
                className="block px-3 py-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                safeX365
              </Link>
            </div>
            <div className="px-3 py-2">
              <div className="text-muted-foreground text-sm font-medium mb-2">Resources</div>
              <Link
                to="/blog"
                className="block px-3 py-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/documentation"
                className="block px-3 py-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Documentation
              </Link>
            </div>
            <Link
              to="/contact"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <div className="px-3 py-2">
              <Button variant="hero" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;