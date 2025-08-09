import React from 'react';
import { Clock, Trophy, Target, AlertCircle } from 'lucide-react';

export default function RecentActivity() {
  const activities = [
    {
      type: 'completion',
      icon: Trophy,
      title: 'Completed "Negotiation Mastery"',
      description: 'Scored 4.8/5 - Great improvement in closing techniques!',
      time: '2 hours ago',
      color: 'green'
    },
    {
      type: 'milestone',
      icon: Target,
      title: 'Reached Level 3 in Public Speaking',
      description: 'Unlocked advanced presentation scenarios',
      time: '1 day ago',
      color: 'blue'
    },
    {
      type: 'feedback',
      icon: AlertCircle,
      title: 'New Feedback Available',
      description: 'Review your Crisis Management simulation performance',
      time: '2 days ago',
      color: 'orange'
    },
    {
      type: 'practice',
      icon: Clock,
      title: 'Practice Session',
      description: 'Spent 45 minutes on Customer Service scenarios',
      time: '3 days ago',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: 'bg-green-100 text-green-600',
      blue: 'bg-blue-100 text-blue-600',
      orange: 'bg-orange-100 text-orange-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className={`p-2 rounded-lg ${getColorClasses(activity.color)}`}>
              <activity.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-600">{activity.description}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View All Activity
        </button>
      </div>
    </div>
  );
}