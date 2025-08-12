import React from 'react';
import { Play, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-[80vh]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Empowering 
                <span className="text-blue-600"> Dyslexic Children</span> with 
                <span className="text-purple-600"> AI Learning</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Personalized learning experience for children with dyslexia. 
                Built with love from Nepal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 text-lg font-semibold">
                <Play className="h-5 w-5" />
                <span>Start Learning</span>
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 text-lg font-semibold">
                <Users className="h-5 w-5" />
                <span>Learn More</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">85%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">1000+</div>
                <div className="text-sm text-gray-600">Happy Kids</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          <div className="relative h-full">
            {/* Main jp.jpg photo */}
            <div className="h-full p-8">
              <img 
                src="/jp.jpg" 
                alt="Mind Bridge Learning"
                className="w-full h-full object-contain rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;