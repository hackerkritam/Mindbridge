import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "Basic reading exercises",
        "Progress tracking",
        "Email support",
        "5 lessons per month"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "₹500",
      period: "/person/month",
      description: "Most popular choice",
      features: [
        "Unlimited lessons",
        "AI personalization",
        "Advanced analytics",
        "Priority support",
        "Parent dashboard",
        "Mobile app access"
      ],
      popular: true
    },
    {
      name: "Institution",
      price: "₹30,000",
      period: "/year",
      description: "For schools and organizations",
      features: [
        "Unlimited students",
        "Teacher dashboards",
        "Bulk progress reports",
        "Custom content integration",
        "Training & support",
        "API access"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple <span className="text-blue-600">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-xl p-6 shadow-md ${
              plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
            }`}>
                {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </div>
                  </div>
                )}
                
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
                  </div>

              <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                plan.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                {plan.price === "Free" ? "Get Started" : "Choose Plan"}
                  </button>
                </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            All plans include a 7-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;