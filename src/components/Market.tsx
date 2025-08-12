import React from 'react';
import { TrendingUp, Users, Globe, Target } from 'lucide-react';

const Market = () => {
  const marketStats = [
    {
      icon: Users,
      number: "10M+",
      label: "Children with Dyslexia",
      description: "Worldwide need for support"
    },
    {
      icon: Globe,
      number: "150+",
      label: "Countries",
      description: "Where dyslexia affects learning"
    },
    {
      icon: Target,
      number: "85%",
      label: "Improvement Rate",
      description: "With proper intervention"
    },
    {
      icon: TrendingUp,
      number: "$2.5B",
      label: "Market Size",
      description: "Educational technology sector"
    }
  ];

  return (
    <section id="market" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Market <span className="text-blue-600">Opportunity</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Addressing a global need for better dyslexia support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {marketStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
              <div className="text-gray-600 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Market;