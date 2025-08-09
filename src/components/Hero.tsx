import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Users, BookOpen, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="h-4 w-4" />
                <span>Trusted by 50,000+ professionals</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Master Skills Through
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Interactive</span>
                <br />Simulations
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 max-w-xl">
                Practice essential professional skills in a risk-free environment. Get real-time feedback, 
                track your progress, and build confidence through immersive scenarios.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/simulations"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 group"
              >
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Link>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-blue-600 mr-1" />
                  <span className="text-2xl font-bold text-gray-900">50K+</span>
                </div>
                <p className="text-sm text-gray-600">Active Learners</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="h-5 w-5 text-teal-600 mr-1" />
                  <span className="text-2xl font-bold text-gray-900">100+</span>
                </div>
                <p className="text-sm text-gray-600">Simulations</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-green-600 mr-1" />
                  <span className="text-2xl font-bold text-gray-900">95%</span>
                </div>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-6">
              <div className="mb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-500 ml-4">Negotiation Simulation</span>
                </div>
                <div className="h-1 bg-gray-200 rounded-full mb-4">
                  <div className="h-1 bg-blue-600 rounded-full w-3/4"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 mb-2">
                    <span className="font-medium">Scenario:</span> You're negotiating a salary increase with your manager.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-blue-600 font-medium">Confidence Level</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      ))}
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Recent Progress</span>
                    <span className="text-xs text-green-600 font-medium">+12% this week</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-gray-900">8</div>
                      <div className="text-xs text-gray-500">Completed</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">4.7</div>
                      <div className="text-xs text-gray-500">Avg Score</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-100 text-green-700 p-3 rounded-full shadow-lg animate-bounce">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-100 text-blue-700 p-3 rounded-full shadow-lg animate-pulse">
              <BookOpen className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}