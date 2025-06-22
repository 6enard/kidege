import React from 'react';
import { 
  Paintbrush, 
  Wrench, 
  Shield, 
  Star, 
  Car, 
  Eye 
} from 'lucide-react';

const services = [
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: "PaintWork",
    description: "Professional automotive painting services using premium quality paints and advanced techniques for a flawless finish."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Panel Beating",
    description: "Expert panel beating and bodywork restoration to bring your vehicle back to its original condition."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Paint Protection Film (PPF)",
    description: "Premium paint protection film installation to safeguard your vehicle's paint from chips, scratches, and environmental damage."
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Graphene/Ceramic Coating",
    description: "Advanced graphene and ceramic coating applications for superior paint protection and enhanced gloss."
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Tinting",
    description: "Professional window tinting services for enhanced privacy, UV protection, and aesthetic appeal."
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Headlight Restoration",
    description: "Complete headlight restoration services to improve visibility and restore your vehicle's appearance."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Professional Services</h3>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            We specialize in premium automotive services using the latest technology and highest quality materials
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-blue-800 mb-4">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}