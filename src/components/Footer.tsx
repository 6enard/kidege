import React from 'react';
import { Car, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <Car className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
              <span className="text-lg sm:text-xl font-bold">Kidege Auto Tech</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Professional automotive services in Nairobi. Your trusted partner for premium car care and protection.
            </p>
          </div>

          <div>
            <h5 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h5>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <li>PaintWork</li>
              <li>Panel Beating</li>
              <li>Paint Protection Film (PPF)</li>
              <li>Graphene/Ceramic Coating</li>
              <li>Tinting</li>
              <li>Headlight Restoration</li>
            </ul>
          </div>

          <div>
            <h5 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h5>
            <div className="space-y-2 text-gray-400 text-sm sm:text-base">
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+254 702 555 075</span>
              </p>
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Kilimani, Galana Road, Nairobi</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 Kidege Auto Tech. All rights reserved. Professional automotive services in Nairobi, Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
}