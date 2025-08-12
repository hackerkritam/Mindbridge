import React from 'react';
import { Target, Heart, Globe, Lightbulb } from 'lucide-react';

const Mission = () => {
  const goals = [
    {
      icon: Target,
      title: "Personalized Learning",
      description: "AI-driven content that adapts to each child's unique learning style and pace",
      color: "blue"
    },
    {
      icon: Heart,
      title: "Joyful Experience",
      description: "Gamified learning that makes education fun and engaging for dyslexic children",
      color: "red"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Reaching underserved communities and making quality education accessible worldwide",
      color: "green"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge technology combined with evidence-based teaching methodologies",
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-100 text-blue-600",
      red: "bg-red-100 text-red-600", 
      green: "bg-green-100 text-green-600",
      yellow: "bg-yellow-100 text-yellow-600"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Mission & <span className="text-blue-600">Goals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing special education by creating an inclusive, AI-powered learning ecosystem 
            that empowers dyslexic children to discover their full potential and achieve academic success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {goals.map((goal, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 ${getColorClasses(goal.color)} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <goal.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{goal.title}</h3>
                <p className="text-gray-600 leading-relaxed">{goal.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Transforming Lives Through Technology
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Mind Bridge bridges the gap between traditional education and the unique needs of dyslexic learners. 
                Our platform combines cutting-edge AI with proven pedagogical approaches to create personalized 
                learning experiences that celebrate neurodiversity.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Evidence-based learning methodologies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Continuous progress tracking and adaptation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Collaborative support for families and educators</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-4xl font-bold mb-4">
                95%
              </div>
              <p className="text-lg font-semibold text-gray-900">Parent Satisfaction Rate</p>
              <p className="text-gray-600">Based on our pilot program results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;