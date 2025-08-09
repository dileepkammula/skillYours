import React from 'react';
import { Target, BarChart, Users, Shield, Zap, HeartHandshake } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Target,
      title: 'Realistic Scenarios',
      description: 'Practice with authentic workplace situations designed by industry professionals.'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track your progress with detailed insights and personalized improvement recommendations.'
    },
    {
      icon: Users,
      title: 'Interactive Feedback',
      description: 'Receive immediate, actionable feedback from AI and peer reviewers to accelerate learning.'
    },
    {
      icon: Shield,
      title: 'Safe Learning Environment',
      description: 'Make mistakes and learn without real-world consequences in our risk-free platform.'
    },
    {
      icon: Zap,
      title: 'Adaptive Learning',
      description: 'Experience personalized learning paths that adapt to your skill level and progress.'
    },
    {
      icon: HeartHandshake,
      title: 'Expert-Designed',
      description: 'Learn from simulations created by leading experts in psychology and professional development.'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose SkillSim Pro?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform combines cutting-edge technology with proven learning methodologies 
            to deliver exceptional skill development experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}