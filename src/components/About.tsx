import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Kidege Auto Tech?</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Located in the heart of Kilimani, Nairobi, we are your trusted partner for premium automotive services. 
              Our team of skilled professionals brings years of experience and expertise to every project.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Craftsmanship</h4>
                  <p className="text-gray-600">Professional techniques and attention to detail in every service</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Premium Materials</h4>
                  <p className="text-gray-600">Only the highest quality paints, films, and coating products</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Advanced Technology</h4>
                  <p className="text-gray-600">State-of-the-art equipment and latest industry techniques</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-800 to-gray-800 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-6">Professional Excellence</h4>
            <p className="text-blue-100 mb-6 leading-relaxed">
              From precision panel beating to advanced ceramic coatings, we deliver results that exceed expectations. 
              Your vehicle deserves the best care and protection.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400">5+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-blue-100">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}