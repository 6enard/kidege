import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Kidege Auto Tech</h1>
              <p className="text-sm text-gray-600">Professional Automotive Services</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => handleNavClick('home')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Home</button>
            <button onClick={() => handleNavClick('services')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Services</button>
            <button onClick={() => handleNavClick('projects')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Projects</button>
            <button onClick={() => handleNavClick('about')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors">About</button>
            <button onClick={() => handleNavClick('contact')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Contact</button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => handleNavClick('home')} className="text-left text-gray-700 hover:text-blue-800 font-medium">Home</button>
              <button onClick={() => handleNavClick('services')} className="text-left text-gray-700 hover:text-blue-800 font-medium">Services</button>
              <button onClick={() => handleNavClick('projects')} className="text-left text-gray-700 hover:text-blue-800 font-medium">Projects</button>
              <button onClick={() => handleNavClick('about')} className="text-left text-gray-700 hover:text-blue-800 font-medium">About</button>
              <button onClick={() => handleNavClick('contact')} className="text-left text-gray-700 hover:text-blue-800 font-medium">Contact</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}