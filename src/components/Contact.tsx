import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Get In Touch</h3>
          <p className="text-lg sm:text-xl text-gray-300 px-4">Ready to give your vehicle the professional care it deserves?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center bg-gray-800 rounded-xl p-4 sm:p-6">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-bold mb-2">Call Us</h4>
                <a href="tel:+254702555075" className="text-yellow-400 hover:text-yellow-300 text-base sm:text-lg font-semibold">
                  +254 702 555 075
                </a>
              </div>

              <div className="text-center bg-gray-800 rounded-xl p-4 sm:p-6">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-bold mb-2">Business Hours</h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  Mon - Fri: 8:00 AM - 6:00 PM<br />
                  Sat: 8:00 AM - 4:00 PM
                </p>
              </div>
            </div>

            <div className="text-center bg-gray-800 rounded-xl p-4 sm:p-6">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-3 sm:mb-4" />
              <h4 className="text-lg sm:text-xl font-bold mb-2">Visit Us</h4>
              <p className="text-gray-300 text-sm sm:text-base">
                Kilimani, Galana Road<br />
                Nairobi, Kenya
              </p>
            </div>

            <div className="text-center">
              <a 
                href="tel:+254702555075"
                className="bg-yellow-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-yellow-400 transition-colors shadow-lg inline-block w-full sm:w-auto"
              >
                Call Now for a Quote
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-gray-800 rounded-xl p-4 sm:p-6">
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center">Our Location</h4>
            <div className="rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8081151380784!2d36.782938099999996!3d-1.2893625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1185ff8ecd4d%3A0x86153816469ce37d!2sKidege%20Auto%20Tech!5e0!3m2!1sen!2ske!4v1750597046339!5m2!1sen!2ske" 
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg sm:h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}