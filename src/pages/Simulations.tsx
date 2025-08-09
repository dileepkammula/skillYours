import React, { useState } from 'react';
import { Search, Filter, MessageSquare, Mic, AlertTriangle, Handshake, Users, BookOpen, Star } from 'lucide-react';
import SimulationCard from '../components/SimulationCard';

export default function Simulations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const categories = [
    'All', 'Communication', 'Leadership', 'Sales', 'Customer Service', 'Crisis Management'
  ];

  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const allSimulations = [
    {
      id: 'negotiation',
      title: 'Negotiation Mastery',
      description: 'Learn advanced negotiation techniques through realistic workplace scenarios.',
      icon: Handshake,
      difficulty: 'Intermediate',
      duration: '45 min',
      participants: '12K+',
      rating: 4.8,
      category: 'Communication',
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
      rating: 4.9,
      category: 'Communication',
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
      rating: 4.7,
      category: 'Crisis Management',
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
      rating: 4.8,
      category: 'Leadership',
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
      rating: 4.9,
      category: 'Customer Service',
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
      rating: 4.6,
      category: 'Sales',
      color: 'orange'
    }
  ];

  const filteredSimulations = allSimulations.filter(simulation => {
    const matchesSearch = simulation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         simulation.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || simulation.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || simulation.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Skill-Building Simulations
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive library of interactive simulations designed 
            to help you master essential professional skills.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search simulations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div className="relative">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty === 'All' ? 'All Levels' : difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredSimulations.length} simulation{filteredSimulations.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Simulations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSimulations.map((simulation) => (
            <SimulationCard key={simulation.id} simulation={simulation} />
          ))}
        </div>

        {filteredSimulations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No simulations found matching your criteria.
            </p>
            <p className="text-gray-400 mt-2">
              Try adjusting your search terms or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}