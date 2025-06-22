import React, { useState } from 'react';
import { Menu, X, Car } from 'lucide-react';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo - Clickable */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity text-left"
          >
            <Car className="w-6 h-6 sm:w-7 sm:h-7 text-blue-800" />
            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Kidege Auto Tech</h1>
              <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Professional Automotive Services</p>
            </div>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <button onClick={() => handleNavClick('home')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors px-2 py-1">Home</button>
            <button onClick={() => handleNavClick('services')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors px-2 py-1">Services</button>
            <button onClick={() => handleNavClick('projects')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors px-2 py-1">Projects</button>
            <button onClick={() => handleNavClick('about')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors px-2 py-1">About</button>
            <button onClick={() => handleNavClick('contact')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors px-2 py-1">Contact</button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => handleNavClick('home')} className="text-left text-gray-700 hover:text-blue-800 font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors">Home</button>
              <button onClick={() => handleNavClick('services')} className="text-left text-gray-700 hover:text-blue-800 font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors">Services</button>
              <button onClick={() => handleNavClick('projects')} className="text-left text-gray-700 hover:text-blue-800 font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors">Projects</button>
              <button onClick={() => handleNavClick('about')} className="text-left text-gray-700 hover:text-blue-800 font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors">About</button>
              <button onClick={() => handleNavClick('contact')} className="text-left text-gray-700 hover:text-blue-800 font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors">Contact</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}