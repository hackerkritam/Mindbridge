import React, { useState } from 'react';
import { Menu, X, BookOpen, Users, TrendingUp, DollarSign, MessageCircle, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Mind Bridge</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1"
            >
              <BookOpen className="h-4 w-4" />
              <span>Features</span>
            </button>
            <button
              onClick={() => scrollToSection('market')}
              className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1"
            >
              <TrendingUp className="h-4 w-4" />
              <span>Market</span>
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1"
            >
              <DollarSign className="h-4 w-4" />
              <span>Pricing</span>
            </button>
            <button
            
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Stories</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1"
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </button>
            <button
              onClick={() => scrollToSection('hero')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Free
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button
                onClick={() => scrollToSection('features')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('market')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Market
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Stories
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Free
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;