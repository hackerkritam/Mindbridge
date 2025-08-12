import React from 'react';
import { Brain, Gamepad2, Users, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Personalized Learning",
      description: "Content adapts to each child's learning pattern and progress.",
      color: "purple"
    },
    {
      icon: Gamepad2,
      title: "Fun Learning Games",
      description: "Engaging exercises that make reading and learning enjoyable.",
      color: "green"
    },
    {
      icon: BarChart3, 
      title: "Progress Tracking",
      description: "Monitor learning outcomes and celebrate achievements.",
      color: "blue"
    },
    {
      icon: Users, 
      title: "Safe Learning Environment",
      description: "Child-safe platform with moderated social features.",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; hover: string } } = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", hover: "group-hover:bg-blue-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", hover: "group-hover:bg-purple-600" },
      green: { bg: "bg-green-100", text: "text-green-600", hover: "group-hover:bg-green-600" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", hover: "group-hover:bg-orange-600" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Key <span className="text-blue-600">Features</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, effective learning tools designed for children with dyslexia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <div className={`w-14 h-14 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-7 w-7 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;