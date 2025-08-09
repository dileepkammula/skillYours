import React from 'react';
import { BarChart, TrendingUp, Clock, Trophy, Target, BookOpen } from 'lucide-react';
import ProgressChart from '../components/ProgressChart';
import RecentActivity from '../components/RecentActivity';
import SkillProgress from '../components/SkillProgress';

interface DashboardProps {
  user: { name: string; isLoggedIn: boolean };
}

export default function Dashboard({ user }: DashboardProps) {
  const stats = [
    {
      title: 'Simulations Completed',
      value: '23',
      change: '+3 this week',
      changeType: 'positive',
      icon: Trophy
    },
    {
      title: 'Total Practice Time',
      value: '45h',
      change: '+2.5h this week',
      changeType: 'positive',
      icon: Clock
    },
    {
      title: 'Average Score',
      value: '4.7/5',
      change: '+0.2 improvement',
      changeType: 'positive',
      icon: Target
    },
    {
      title: 'Skills Mastered',
      value: '8',
      change: '+1 this month',
      changeType: 'positive',
      icon: BookOpen
    }
  ];

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-lg text-gray-600">
            Track your progress and continue your skill-building journey.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.change}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Progress Chart */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-6">
              <BarChart className="h-5 w-5 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Weekly Progress</h2>
            </div>
            <ProgressChart />
          </div>

          {/* Skill Progress */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Skill Development</h2>
            </div>
            <SkillProgress />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}