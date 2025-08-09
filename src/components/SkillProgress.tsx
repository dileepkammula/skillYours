import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function SkillProgress() {
  const skills = [
    { name: 'Negotiation', level: 85, change: '+5' },
    { name: 'Public Speaking', level: 72, change: '+8' },
    { name: 'Leadership', level: 68, change: '+3' },
    { name: 'Crisis Management', level: 54, change: '+12' },
    { name: 'Customer Service', level: 91, change: '+2' }
  ];

  const getColorClass = (level: number) => {
    if (level >= 80) return 'bg-green-500';
    if (level >= 60) return 'bg-blue-500';
    if (level >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900">{skill.name}</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">{skill.level}%</span>
              <div className="flex items-center text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span className="text-xs font-medium">{skill.change}</span>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-500 ${getColorClass(skill.level)}`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}

      <div className="pt-4 border-t border-gray-100">
        <div className="text-sm text-gray-600">
          <p className="mb-2"><strong>Next Milestone:</strong> Complete 5 more simulations to unlock Advanced Leadership</p>
          <p><strong>Recommendation:</strong> Focus on Crisis Management to improve overall score</p>
        </div>
      </div>
    </div>
  );
}