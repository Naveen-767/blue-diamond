'use client';

import ServiceCard from '@/components/ServiceCard';
import { Scissors, Sparkles, Palette, Waves, Zap, Star } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Classic Haircut',
    description: 'Traditional barbering techniques combined with modern styling for a timeless look',
    price: '$35',
    features: ['Style Consultation', 'Precision Cut', 'Wash & Dry', 'Basic Styling'],
  },
  {
    icon: Star,
    title: 'Premium Haircut',
    description: 'Our signature service with extended consultation and premium product application',
    price: '$45',
    features: ['In-depth Consultation', 'Premium Cut', 'Hot Towel Treatment', 'Advanced Styling'],
  },
  {
    icon: Sparkles,
    title: 'Beard Trim',
    description: 'Expert beard shaping and grooming to complement your facial features',
    price: '$25',
    features: ['Beard Analysis', 'Precision Trim', 'Edge Definition', 'Beard Oil Application'],
  },
  {
    icon: Waves,
    title: 'Full Grooming Package',
    description: 'Complete grooming experience including haircut, beard trim, and facial treatment',
    price: '$80',
    features: ['Haircut & Style', 'Beard Grooming', 'Facial Treatment', 'Neck Shave'],
  },
  {
    icon: Palette,
    title: 'Hair Coloring',
    description: 'Professional coloring service to enhance or completely transform your look',
    price: '$75',
    features: ['Color Consultation', 'Application', 'Toning', 'Aftercare Kit'],
  },
  {
    icon: Zap,
    title: 'Scalp Treatment',
    description: 'Revitalizing scalp massage and treatment for healthy hair growth',
    price: '$40',
    features: ['Scalp Analysis', 'Deep Massage', 'Treatment Application', 'Steam Therapy'],
  },
];

const addons = [
  { name: 'Hot Towel Shave', price: '$20' },
  { name: 'Hair Treatment', price: '$15' },
  { name: 'Eyebrow Trim', price: '$10' },
  { name: 'Grey Blending', price: '$25' },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50" />
        <div className="relative text-center px-4">
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-800/10 border border-blue-800/30 rounded-full">
            <span className="text-blue-800 text-sm font-semibold tracking-wider">
              PREMIUM SERVICES
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="text-blue-800">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Exceptional grooming services crafted for the modern gentleman
          </p>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

{/* 
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 bg-blue-800/10 border border-blue-800/30 rounded-full">
              <span className="text-blue-800 text-sm font-semibold tracking-wider">
                ENHANCE YOUR EXPERIENCE
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Add-On <span className="text-blue-800">Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-900 to-black border border-blue-800/20 rounded-xl p-6 hover:border-blue-800/50 transition-all duration-300 group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-800 transition-colors">
                  {addon.name}
                </h3>
                <p className="text-2xl font-bold text-blue-800">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-800/10 to-blue-600/10 border border-blue-800/20 rounded-2xl p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Look Your Best?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Book your appointment now and experience the EliteCuts difference
            </p>
            <button className="inline-block px-10 py-5 bg-blue-800 text-black font-bold text-lg rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-800/50">
              Schedule Appointment
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
