import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Car, Wrench } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  services: string[];
  beforeImage: string;
  afterImage: string;
  completionDate: string;
  vehicleType: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "BMW X5 Complete Restoration",
    category: "Full Restoration",
    description: "Complete paintwork restoration with ceramic coating protection. This BMW X5 received our premium treatment including panel beating, professional paint application, and advanced ceramic coating for long-lasting protection.",
    services: ["Panel Beating", "PaintWork", "Ceramic Coating"],
    beforeImage: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
    afterImage: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800",
    completionDate: "December 2024",
    vehicleType: "BMW X5"
  },
  {
    id: 2,
    title: "Mercedes C-Class Paint Protection",
    category: "Paint Protection Film",
    description: "Premium PPF installation on this Mercedes C-Class to protect the pristine factory paint. Our expert application ensures invisible protection against road debris and environmental damage.",
    services: ["Paint Protection Film", "Ceramic Coating", "Tinting"],
    beforeImage: "https://images.pexels.com/photos/3729505/pexels-photo-3729505.jpeg?auto=compress&cs=tinysrgb&w=800",
    afterImage: "https://images.pexels.com/photos/3729511/pexels-photo-3729511.jpeg?auto=compress&cs=tinysrgb&w=800",
    completionDate: "November 2024",
    vehicleType: "Mercedes C-Class"
  },
  {
    id: 3,
    title: "Toyota Prado Headlight Restoration",
    category: "Restoration",
    description: "Complete headlight restoration bringing back crystal clear visibility. This Toyota Prado's headlights were completely restored using our advanced polishing and sealing techniques.",
    services: ["Headlight Restoration", "Tinting", "PaintWork"],
    beforeImage: "https://images.pexels.com/photos/3729209/pexels-photo-3729209.jpeg?auto=compress&cs=tinysrgb&w=800",
    afterImage: "https://images.pexels.com/photos/3729508/pexels-photo-3729508.jpeg?auto=compress&cs=tinysrgb&w=800",
    completionDate: "October 2024",
    vehicleType: "Toyota Prado"
  },
  {
    id: 4,
    title: "Audi A4 Graphene Coating",
    category: "Advanced Protection",
    description: "State-of-the-art graphene coating application providing superior protection and incredible gloss. This Audi A4 now features our most advanced protection system.",
    services: ["Graphene Coating", "PaintWork", "Panel Beating"],
    beforeImage: "https://images.pexels.com/photos/3729228/pexels-photo-3729228.jpeg?auto=compress&cs=tinysrgb&w=800",
    afterImage: "https://images.pexels.com/photos/3729230/pexels-photo-3729230.jpeg?auto=compress&cs=tinysrgb&w=800",
    completionDate: "September 2024",
    vehicleType: "Audi A4"
  }
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setShowBefore(true);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setShowBefore(true);
  };

  const project = projects[currentProject];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">Our Recent Projects</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See the incredible transformations we've achieved for our clients. Every project showcases our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Showcase */}
          <div className="relative">
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <img 
                  src={showBefore ? project.beforeImage : project.afterImage}
                  alt={`${project.title} - ${showBefore ? 'Before' : 'After'}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    showBefore 
                      ? 'bg-red-500 text-white' 
                      : 'bg-green-500 text-white'
                  }`}>
                    {showBefore ? 'BEFORE' : 'AFTER'}
                  </span>
                </div>
              </div>
              
              {/* Before/After Toggle */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-black/50 backdrop-blur-sm rounded-full p-1 flex">
                  <button
                    onClick={() => setShowBefore(true)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      showBefore 
                        ? 'bg-white text-gray-900' 
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    Before
                  </button>
                  <button
                    onClick={() => setShowBefore(false)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      !showBefore 
                        ? 'bg-white text-gray-900' 
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    After
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevProject}
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex space-x-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentProject(index);
                      setShowBefore(true);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentProject ? 'bg-yellow-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextProject}
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {project.category}
                </span>
              </div>
              <h4 className="text-3xl font-bold mb-4">{project.title}</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Project Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Car className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-400">Vehicle</span>
                </div>
                <p className="font-semibold">{project.vehicleType}</p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-400">Completed</span>
                </div>
                <p className="font-semibold">{project.completionDate}</p>
              </div>
            </div>

            {/* Services Used */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Wrench className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">Services Applied</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, index) => (
                  <span
                    key={index}
                    className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a 
                href="tel:+254702555075"
                className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors inline-block"
              >
                Get Your Quote Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}