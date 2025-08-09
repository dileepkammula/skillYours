import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Pause, RotateCcw, CheckCircle, Star, MessageSquare } from 'lucide-react';

export default function Demo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedResponse, setSelectedResponse] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const demoSteps = [
    {
      title: "Welcome to SkillSim Pro Demo",
      type: "intro",
      content: "Experience our interactive negotiation simulation. You'll practice a salary negotiation scenario with real-time feedback.",
      speaker: "System"
    },
    {
      title: "Scenario Setup",
      type: "scenario",
      content: "You're meeting with your manager to discuss a salary increase. You've been with the company for 2 years and consistently exceeded targets.",
      speaker: "Narrator",
      context: {
        role: "Employee",
        goal: "Negotiate 15% salary increase",
        background: "2 years experience, exceeded all targets"
      }
    },
    {
      title: "Manager's Opening",
      type: "dialogue",
      content: "Thanks for meeting with me today. I wanted to discuss your performance review. You've been doing solid work this year.",
      speaker: "Manager (Sarah)",
      responses: [
        "Thank you, Sarah. I'm proud of my contributions and would like to discuss my compensation.",
        "I appreciate that. Could you be more specific about what 'solid work' means?",
        "Thank you. I've prepared some data showing my impact on our team's results."
      ]
    },
    {
      title: "Your Response",
      type: "interaction",
      content: "Choose your response approach:",
      speaker: "You"
    },
    {
      title: "Feedback & Analysis",
      type: "feedback",
      content: "Great choice! Starting with appreciation while being direct about your goals shows confidence and professionalism.",
      speaker: "AI Coach",
      analysis: {
        strengths: ["Professional tone", "Clear intent", "Confident approach"],
        improvements: ["Could have been more specific about achievements"],
        score: 4.2
      }
    }
  ];

  const handleResponseSelect = (index: number) => {
    setSelectedResponse(index);
    setShowFeedback(true);
    setTimeout(() => {
      if (currentStep < demoSteps.length - 1) {
        setCurrentStep(currentStep + 1);
        setSelectedResponse(null);
        setShowFeedback(false);
      }
    }, 3000);
  };

  const handleNext = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedResponse(null);
      setShowFeedback(false);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelectedResponse(null);
    setShowFeedback(false);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Auto-advance through intro steps
      const interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev < 2) {
            return prev + 1;
          } else {
            clearInterval(interval);
            setIsPlaying(false);
            return prev;
          }
        });
      }, 3000);
    }
  };

  const currentStepData = demoSteps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-white hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlay}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
            <button
              onClick={handleRestart}
              className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-white text-sm mb-2">
            <span>Demo Progress</span>
            <span>{currentStep + 1} of {demoSteps.length}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Demo Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              {/* Demo Header */}
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 text-white">
                <h1 className="text-2xl font-bold mb-2">{currentStepData.title}</h1>
                <div className="flex items-center space-x-4 text-blue-100">
                  <span className="text-sm">Negotiation Simulation</span>
                  <span className="text-sm">•</span>
                  <span className="text-sm">Interactive Demo</span>
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-8">
                {currentStepData.type === 'intro' && (
                  <div className="text-center">
                    <div className="bg-blue-100 p-6 rounded-lg mb-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Welcome to Your First Simulation
                      </h2>
                      <p className="text-gray-700">{currentStepData.content}</p>
                    </div>
                    <button
                      onClick={handleNext}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Start Demo
                    </button>
                  </div>
                )}

                {currentStepData.type === 'scenario' && (
                  <div>
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Scenario Brief</h3>
                      <p className="text-gray-700 mb-4">{currentStepData.content}</p>
                      
                      {currentStepData.context && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                          <div className="bg-white p-3 rounded border">
                            <div className="text-sm font-medium text-gray-600">Your Role</div>
                            <div className="text-gray-900">{currentStepData.context.role}</div>
                          </div>
                          <div className="bg-white p-3 rounded border">
                            <div className="text-sm font-medium text-gray-600">Goal</div>
                            <div className="text-gray-900">{currentStepData.context.goal}</div>
                          </div>
                          <div className="bg-white p-3 rounded border">
                            <div className="text-sm font-medium text-gray-600">Background</div>
                            <div className="text-gray-900">{currentStepData.context.background}</div>
                          </div>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={handleNext}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Continue
                    </button>
                  </div>
                )}

                {currentStepData.type === 'dialogue' && (
                  <div>
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                          <MessageSquare className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{currentStepData.speaker}</div>
                          <div className="text-sm text-gray-500">Speaking...</div>
                        </div>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-gray-800">{currentStepData.content}</p>
                      </div>
                    </div>

                    {currentStepData.responses && (
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">How do you respond?</h4>
                        <div className="space-y-3">
                          {currentStepData.responses.map((response, index) => (
                            <button
                              key={index}
                              onClick={() => handleResponseSelect(index)}
                              disabled={selectedResponse !== null}
                              className={`w-full text-left p-4 border rounded-lg transition-all ${
                                selectedResponse === index
                                  ? 'border-blue-500 bg-blue-50'
                                  : selectedResponse !== null
                                  ? 'border-gray-200 bg-gray-50 opacity-50'
                                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                              }`}
                            >
                              <div className="flex items-start">
                                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                  <span className="text-xs font-medium text-blue-600">{index + 1}</span>
                                </div>
                                <p className="text-gray-800">{response}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {showFeedback && selectedResponse !== null && (
                      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          <span className="font-medium text-green-800">Good Choice!</span>
                        </div>
                        <p className="text-green-700 text-sm">
                          This response shows confidence while maintaining professionalism. 
                          You're setting a positive tone for the negotiation.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {currentStepData.type === 'feedback' && (
                  <div>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <Star className="h-5 w-5 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Performance Analysis</h3>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{currentStepData.content}</p>
                      
                      {currentStepData.analysis && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded border">
                            <h4 className="font-medium text-green-700 mb-2">Strengths</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {currentStepData.analysis.strengths.map((strength, index) => (
                                <li key={index} className="flex items-center">
                                  <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                                  {strength}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded border">
                            <h4 className="font-medium text-blue-700 mb-2">Areas for Improvement</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {currentStepData.analysis.improvements.map((improvement, index) => (
                                <li key={index} className="flex items-center">
                                  <div className="w-3 h-3 bg-blue-200 rounded-full mr-2"></div>
                                  {improvement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                      
                      {currentStepData.analysis?.score && (
                        <div className="mt-4 text-center">
                          <div className="text-2xl font-bold text-gray-900">
                            {currentStepData.analysis.score}/5.0
                          </div>
                          <div className="text-sm text-gray-600">Performance Score</div>
                        </div>
                      )}
                    </div>

                    <div className="text-center">
                      <Link
                        to="/simulations"
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
                      >
                        Try Full Simulations
                        <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Demo Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Demo Features</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span>Interactive dialogue system</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span>Real-time feedback</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span>Performance scoring</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span>Skill improvement tips</span>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h3>
              <div className="space-y-3">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous Step
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentStep === demoSteps.length - 1}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step
                </button>
                <button
                  onClick={handleRestart}
                  className="w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
                >
                  Restart Demo
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Demo Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">5 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Skill Focus</span>
                  <span className="font-medium">Negotiation</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Difficulty</span>
                  <span className="font-medium">Beginner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}