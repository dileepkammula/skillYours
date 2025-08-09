import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mic, AlertTriangle, Handshake, Users, BookOpen, ArrowRight } from 'lucide-react';

export default function FeaturedSimulations() {
  const simulations = [
    {
      id: 'negotiation',
      title: 'Negotiation Mastery',
      description: 'Learn advanced negotiation techniques through realistic workplace scenarios.',
      icon: Handshake,
      difficulty: 'Intermediate',
      duration: '45 min',
      participants: '12K+',
      color: 'blue'
    },
    {
      id: 'public-speaking',
      title: 'Public Speaking',
      description: 'Build confidence and master presentation skills in front of virtual audiences.',
      icon: Mic,
      difficulty: 'Beginner',
      duration: '30 min',
      participants: '8K+',
      color: 'teal'
    },
    {
      id: 'crisis-management',
      title: 'Crisis Management',
      description: 'Practice handling high-pressure situations and making critical decisions.',
      icon: AlertTriangle,
      difficulty: 'Advanced',
      duration: '60 min',
      participants: '5K+',
      color: 'red'
    },
    {
      id: 'team-leadership',
      title: 'Team Leadership',
      description: 'Develop leadership skills through interactive team management scenarios.',
      icon: Users,
      difficulty: 'Intermediate',
      duration: '40 min',
      participants: '9K+',
      color: 'green'
    },
    {
      id: 'customer-service',
      title: 'Customer Service Excellence',
      description: 'Master customer interaction skills and conflict resolution techniques.',
      icon: MessageSquare,
      difficulty: 'Beginner',
      duration: '25 min',
      participants: '15K+',
      color: 'purple'
    },
    {
      id: 'sales-techniques',
      title: 'Sales Techniques',
      description: 'Practice proven sales methodologies and closing techniques.',
      icon: BookOpen,
      difficulty: 'Intermediate',
      duration: '35 min',
      participants: '7K+',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      teal: 'bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white',
      red: 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Skill Simulations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our most popular interactive simulations designed by industry experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {simulations.map((simulation) => (
            <Link
              key={simulation.id}
              to={`/simulation/${simulation.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg transition-all duration-300 ${getColorClasses(simulation.color)}`}>
                    <simulation.icon className="h-6 w-6" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(simulation.difficulty)}`}>
                    {simulation.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {simulation.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {simulation.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {simulation.duration}
                  </span>
                  <span>{simulation.participants} completed</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600">Start Simulation</span>
                  <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/simulations"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Simulations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}