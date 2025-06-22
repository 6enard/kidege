import React, { useState } from 'react';
import { Phone, MapPin, Mail, Send, Calendar, DollarSign, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'message',
    service: '',
    vehicleInfo: '',
    preferredDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'PaintWork',
    'Panel Beating',
    'Paint Protection Film (PPF)',
    'Graphene/Ceramic Coating',
    'Tinting',
    'Headlight Restoration',
    'Multiple Services',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'message',
        service: '',
        vehicleInfo: '',
        preferredDate: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const getInquiryTypeIcon = (type: string) => {
    switch (type) {
      case 'quote':
        return <DollarSign className="w-4 h-4" />;
      case 'meeting':
        return <Calendar className="w-4 h-4" />;
      default:
        return <MessageCircle className="w-4 h-4" />;
    }
  };

  const getInquiryTypeLabel = (type: string) => {
    switch (type) {
      case 'quote':
        return 'Get Quote';
      case 'meeting':
        return 'Schedule Meeting';
      default:
        return 'Send Message';
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Get In Touch</h3>
          <p className="text-lg sm:text-xl text-gray-300 px-4">Ready to give your vehicle the professional care it deserves?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl p-6 sm:p-8 order-1">
            <h4 className="text-xl sm:text-2xl font-bold mb-6 text-center">Contact Us</h4>
            
            {submitStatus === 'success' && (
              <div className="bg-green-600 text-white p-4 rounded-lg mb-6 text-center">
                <p className="font-semibold">Message sent successfully!</p>
                <p className="text-sm text-green-100">We'll get back to you within 24 hours.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-600 text-white p-4 rounded-lg mb-6 text-center">
                <p className="font-semibold">Something went wrong!</p>
                <p className="text-sm text-red-100">Please try again or call us directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Inquiry Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">What can we help you with?</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                  {['message', 'quote', 'meeting'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, inquiryType: type }))}
                      className={`flex items-center justify-center space-x-2 p-3 rounded-lg border-2 transition-colors text-sm font-medium ${
                        formData.inquiryType === type
                          ? 'border-yellow-400 bg-yellow-400 text-gray-900'
                          : 'border-gray-600 text-gray-300 hover:border-gray-500'
                      }`}
                    >
                      {getInquiryTypeIcon(type)}
                      <span>{getInquiryTypeLabel(type)}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                  placeholder="+254 XXX XXX XXX"
                />
              </div>

              {/* Service Selection */}
              {(formData.inquiryType === 'quote' || formData.inquiryType === 'meeting') && (
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required={formData.inquiryType !== 'message'}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Vehicle Information */}
              {(formData.inquiryType === 'quote' || formData.inquiryType === 'meeting') && (
                <div>
                  <label htmlFor="vehicleInfo" className="block text-sm font-medium text-gray-300 mb-2">
                    Vehicle Information
                  </label>
                  <input
                    type="text"
                    id="vehicleInfo"
                    name="vehicleInfo"
                    value={formData.vehicleInfo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                    placeholder="e.g., 2020 BMW X5, Toyota Camry 2018"
                  />
                </div>
              )}

              {/* Preferred Date for Meeting */}
              {formData.inquiryType === 'meeting' && (
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                  />
                </div>
              )}

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {formData.inquiryType === 'quote' ? 'Additional Details' : 
                   formData.inquiryType === 'meeting' ? 'Meeting Purpose' : 'Message'} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors resize-vertical"
                  placeholder={
                    formData.inquiryType === 'quote' ? 'Please describe the work needed, current condition, etc.' :
                    formData.inquiryType === 'meeting' ? 'What would you like to discuss during the meeting?' :
                    'Tell us how we can help you...'
                  }
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-500 text-gray-900 px-6 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{getInquiryTypeLabel(formData.inquiryType)}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 order-2">
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
                Call Now for Immediate Help
              </a>
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
      </div>
    </section>
  );
}