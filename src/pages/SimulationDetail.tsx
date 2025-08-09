import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Clock, Users, Star, Target, CheckCircle, Award } from 'lucide-react';

export default function SimulationDetail() {
  const { id } = useParams();
  const [isStarted, setIsStarted] = useState(false);

  // Mock data for demonstration
  const simulation = {
    id: 'negotiation',
    title: 'Negotiation Mastery',
    description: 'Master the art of negotiation through realistic workplace scenarios. Learn to handle difficult conversations, find win-win solutions, and build lasting relationships.',
    longDescription: 'This comprehensive simulation takes you through various negotiation scenarios commonly found in professional environments. You\'ll practice salary negotiations, contract discussions, conflict resolution, and strategic partnerships. Each scenario adapts to your choices, providing a truly personalized learning experience.',
    difficulty: 'Intermediate',
    duration: '45 min',
    participants: '12,456',
    rating: 4.8,
    category: 'Communication',
    instructor: 'Dr. Sarah Mitchell',
    objectives: [
      'Understand core negotiation principles and strategies',
      'Practice active listening and empathy building',
      'Learn to identify and create value in negotiations',
      'Master the art of making and receiving offers',
      'Develop skills for handling difficult negotiators'
    ],
    modules: [
      { title: 'Introduction to Negotiation', duration: '8 min', completed: true },
      { title: 'Preparation and Planning', duration: '10 min', completed: true },
      { title: 'Opening Moves', duration: '12 min', completed: false },
      { title: 'Finding Common Ground', duration: '10 min', completed: false },
      { title: 'Closing the Deal', duration: '5 min', completed: false }
    ]
  };

  const handleStart = () => {
    setIsStarted(true);
  };

  if (isStarted) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Scenario: Salary Negotiation</h2>
              <div className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                Module 3 of 5
              </div>
            </div>
            <div className="bg-gray-700 rounded-full h-2 mb-4">
              <div className="bg-blue-500 h-2 rounded-full w-3/5"></div>
            </div>
          </div>

          <div className="bg-white text-gray-900 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Scenario Brief</h3>
            <p className="mb-4">
              You've been with your company for 2 years and have consistently exceeded your targets. 
              Your manager, Alex, has scheduled a meeting to discuss your performance review. This is 
              your opportunity to negotiate a salary increase.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Your Goal:</strong> Negotiate a 15% salary increase while maintaining a positive 
                relationship with your manager.
              </p>
            </div>
          </div>

          <div className="bg-white text-gray-900 rounded-lg p-6">
            <div className="mb-4">
              <p className="font-medium">Manager (Alex):</p>
              <p className="bg-gray-100 p-3 rounded-lg mt-2">
                "Thanks for joining me today. I wanted to discuss your performance over the past year. 
                You've done solid work, and I appreciate your dedication to the team."
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-medium">How do you respond?</p>
              <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                "Thank you, Alex. I'm proud of what I've accomplished and would like to discuss my compensation."
              </button>
              <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                "I appreciate the feedback. Before we continue, could you elaborate on what 'solid work' means?"
              </button>
              <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                "Thank you. I've prepared some data showing how my contributions have impacted our team's results."
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/simulations"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Simulations
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                    {simulation.category}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    {simulation.title}
                  </h1>
                </div>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                  {simulation.difficulty}
                </span>
              </div>

              <p className="text-lg text-gray-600 mb-6">{simulation.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">{simulation.duration}</div>
                  <div className="text-xs text-gray-500">Duration</div>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">{simulation.participants}</div>
                  <div className="text-xs text-gray-500">Completed</div>
                </div>
                <div className="text-center">
                  <Star className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">{simulation.rating}</div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
                <div className="text-center">
                  <Target className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">5</div>
                  <div className="text-xs text-gray-500">Modules</div>
                </div>
              </div>

              <button
                onClick={handleStart}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Play className="h-5 w-5 mr-2" />
                Start Simulation
              </button>
            </div>

            {/* About */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About This Simulation</h2>
              <p className="text-gray-600 mb-6">{simulation.longDescription}</p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Learning Objectives</h3>
              <ul className="space-y-2">
                {simulation.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modules */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Modules</h2>
              <div className="space-y-3">
                {simulation.modules.map((module, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                        module.completed ? 'bg-green-500' : 'bg-gray-200'
                      }`}>
                        {module.completed ? (
                          <CheckCircle className="h-4 w-4 text-white" />
                        ) : (
                          <span className="text-xs text-gray-500">{index + 1}</span>
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{module.title}</div>
                        <div className="text-sm text-gray-500">{module.duration}</div>
                      </div>
                    </div>
                    {module.completed && (
                      <Award className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Instructor */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Instructor</h3>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt={simulation.instructor}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-medium text-gray-900">{simulation.instructor}</div>
                  <div className="text-sm text-gray-600">Negotiation Expert</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Dr. Mitchell has 15+ years of experience in corporate negotiations and has trained 
                over 10,000 professionals worldwide.
              </p>
            </div>

            {/* Progress */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Completion</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-2/5"></div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Last session: 3 days ago</p>
                  <p>Next milestone: Complete Module 3</p>
                </div>
              </div>
            </div>

            {/* Related Simulations */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Simulations</h3>
              <div className="space-y-3">
                <Link to="/simulation/public-speaking" className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="font-medium text-gray-900 text-sm">Public Speaking</div>
                  <div className="text-xs text-gray-500">30 min • Beginner</div>
                </Link>
                <Link to="/simulation/team-leadership" className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="font-medium text-gray-900 text-sm">Team Leadership</div>
                  <div className="text-xs text-gray-500">40 min • Intermediate</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}