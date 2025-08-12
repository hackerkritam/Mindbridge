import React from 'react';
import { TrendingUp, Target, DollarSign, Users, Lightbulb, Globe, Award, BarChart3 } from 'lucide-react';

const Investor = () => {
  const keyMetrics = [
    {
      icon: DollarSign,
      title: "Seed Funding",
      value: "$500K",
      description: "Seeking initial investment",
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Revenue Projection",
      value: "$25M",
      description: "5-year revenue target",
      color: "blue"
    },
    {
      icon: Users,
      title: "Target Users",
      value: "100K",
      description: "By end of year 3",
      color: "purple"
    },
    {
      icon: Target,
      title: "Market Share",
      value: "5%",
      description: "Addressable market capture",
      color: "orange"
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "MVP Launch & Pilot Program",
      goals: ["Launch beta version", "Onboard 1,000 users", "Establish partnerships with 5 schools"],
      funding: "$150K"
    },
    {
      year: "2025",
      title: "Market Expansion",
      goals: ["Scale to 10,000 users", "Launch in 3 countries", "Achieve $500K ARR"],
      funding: "$350K"
    },
    {
      year: "2026",
      title: "Series A & Growth",
      goals: ["50,000 active users", "AI enhancement rollout", "International expansion"],
      funding: "$2M (Series A)"
    }
  ];

  const advantages = [
    {
      icon: Lightbulb,
      title: "First-Mover Advantage",
      description: "Leading AI-powered dyslexia solution in emerging markets"
    },
    {
      icon: Globe,
      title: "Scalable Technology",
      description: "Cloud-based platform ready for global deployment"
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "EdTech veterans with proven track record"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Growth",
      description: "Advanced analytics for continuous improvement"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      green: "bg-green-100 text-green-600",
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="investor" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Investment <span className="text-blue-600">Opportunity</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us in revolutionizing special education technology. With a proven model, 
            strong team, and massive market opportunity, Mind Bridge is positioned for exceptional growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className={`w-12 h-12 ${getColorClasses(metric.color)} rounded-lg flex items-center justify-center mb-4`}>
                <metric.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{metric.title}</div>
              <div className="text-sm text-gray-600">{metric.description}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              <span>Growth Roadmap</span>
            </h3>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900">{milestone.year}</h4>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {milestone.funding}
                    </span>
                  </div>
                  <h5 className="text-lg font-medium text-blue-600 mb-3">{milestone.title}</h5>
                  <ul className="space-y-1">
                    {milestone.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className="text-gray-600 flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Competitive Advantages</h3>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <advantage.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{advantage.title}</h4>
                      <p className="text-gray-600">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Exit Strategy</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Strategic acquisition by major EdTech company</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Target valuation: $100M+ within 5-7 years</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Potential acquirers: Pearson, McGraw Hill, Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Education?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in building the future of inclusive education. Together, we can unlock the potential 
            of millions of dyslexic children worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg">
              Schedule Investor Meeting
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-colors font-semibold text-lg">
              Download Pitch Deck
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investor;