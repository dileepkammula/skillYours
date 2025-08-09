import React from 'react';

export default function ProgressChart() {
  const data = [
    { day: 'Mon', value: 65, simulations: 2 },
    { day: 'Tue', value: 80, simulations: 3 },
    { day: 'Wed', value: 45, simulations: 1 },
    { day: 'Thu', value: 90, simulations: 4 },
    { day: 'Fri', value: 70, simulations: 2 },
    { day: 'Sat', value: 85, simulations: 3 },
    { day: 'Sun', value: 60, simulations: 2 }
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between h-48 space-x-2">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1 group">
            <div className="relative w-full bg-gray-100 rounded-t group-hover:bg-gray-200 transition-colors">
              <div
                className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t transition-all duration-300 group-hover:from-blue-700 group-hover:to-blue-500"
                style={{ height: `${(item.value / maxValue) * 100}%`, minHeight: '4px' }}
              ></div>
              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.simulations} simulations
              </div>
            </div>
            <span className="text-sm text-gray-600 mt-2">{item.day}</span>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
            <span className="text-gray-600">Weekly Average: 4.7/5</span>
          </div>
          <span className="text-green-600 font-medium">+12% vs last week</span>
        </div>
      </div>
    </div>
  );
}