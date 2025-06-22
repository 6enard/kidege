import React from 'react';
import { Car, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="w-6 h-6 text-yellow-400" />
              <span className="text-xl font-bold">Kidege Auto Tech</span>
            </div>
            <p className="text-gray-400">
              Professional automotive services in Nairobi. Your trusted partner for premium car care and protection.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Services</h5>
            <ul className="space-y-2 text-gray-400">
              <li>PaintWork</li>
              <li>Panel Beating</li>
              <li>Paint Protection Film (PPF)</li>
              <li>Graphene/Ceramic Coating</li>
              <li>Tinting</li>
              <li>Headlight Restoration</li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+254 702 555 075</span>
              </p>
              <p className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Kilimani, Galana Road, Nairobi</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Kidege Auto Tech. All rights reserved. Professional automotive services in Nairobi, Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
}