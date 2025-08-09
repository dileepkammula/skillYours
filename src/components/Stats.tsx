import React from 'react';
import { Users, Target, Award, Clock } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Active Learners',
      description: 'Professionals improving skills daily',
      color: 'blue'
    },
    {
      icon: Target,
      value: '100+',
      label: 'Simulations',
      description: 'Covering essential business skills',
      color: 'teal'
    },
    {
      icon: Award,
      value: '95%',
      label: 'Success Rate',
      description: 'Users report skill improvement',
      color: 'green'
    },
    {
      icon: Clock,
      value: '2.5M+',
      label: 'Practice Hours',
      description: 'Total time spent learning',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      teal: 'bg-teal-100 text-teal-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Professionals Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers through our 
            interactive skill-building platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${getColorClasses(stat.color)} rounded-full mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-lg font-medium text-gray-700 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}