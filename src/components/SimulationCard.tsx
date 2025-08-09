import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

interface SimulationCardProps {
  simulation: {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<any>;
    difficulty: string;
    duration: string;
    participants: string;
    rating: number;
    category: string;
    color: string;
  };
}

export default function SimulationCard({ simulation }: SimulationCardProps) {
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
    <Link
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

        <div className="mb-2">
          <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
            {simulation.category}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {simulation.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {simulation.description}
        </p>

        <div className="flex items-center mb-4">
          <div className="flex items-center mr-4">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700 ml-1">{simulation.rating}</span>
          </div>
          <span className="text-sm text-gray-500">{simulation.participants} completed</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
            {simulation.duration}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-blue-600">Start Simulation</span>
          <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}