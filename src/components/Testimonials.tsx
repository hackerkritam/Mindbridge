import React from 'react';
import { Star, Quote, Heart, Users, TrendingUp, Building } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sita Thapa",
      role: "Mother of Aarav (8 years old)",
      content: "Mind Bridge has been a game-changer for Aarav. He went from struggling with reading to actually asking for more story time. The personalized approach really works!",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Kathmandu, Nepal"
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Special Education Teacher",
      content: "As an educator with 15 years of experience, I can confidently say Mind Bridge is the most effective tool I've used for dyslexic students. The progress tracking is exceptional.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239303/pexels-photo-1239303.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Pokhara, Nepal"
    },
    {
      name: "Priya Sharma",
      role: "Mother of Arjun (7 years old)",
      content: "Living in Nepal, finding quality resources for dyslexia was challenging. Mind Bridge brought world-class learning to our home. Arjun's confidence has soared!",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Lalitpur, Nepal"
    },
    {
      name: "Bikash Tamang",
      role: "Father & Software Engineer",
      content: "The AI personalization is incredible. As a tech professional, I appreciate the sophisticated algorithms, but more importantly, I see how it helps my son Dev excel.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239303/pexels-photo-1239303.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Biratnagar, Nepal"
    },
    {
      name: "Shree Gyanodaya School",
      role: "Special Education Institution",
      content: "We've implemented Mind Bridge across our programs. The institutional dashboard gives us insights we never had before. Our students are more engaged than ever.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Chitwan, Nepal"
    },
    {
      name: "Anita Gurung",
      role: "Reading Specialist",
      content: "Mind Bridge doesn't just teach reading; it builds confidence. I've seen children who thought they were 'broken' discover their unique strengths and abilities.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Dharan, Nepal"
    }
  ];

  const stats = [
    { number: "95%", label: "Parent Satisfaction", icon: Heart },
    { number: "85%", label: "Improvement Rate", icon: TrendingUp },
    { number: "1000+", label: "Happy Families", icon: Users },
    { number: "50+", label: "Partner Schools", icon: Building }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="text-blue-600">Stories</span> & 
            <span className="text-purple-600"> Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real families, real progress. See how Mind Bridge is transforming the lives of dyslexic 
            children and their families around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 relative hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute -top-3 -left-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-white" />
                </div>
              </div>
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-blue-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Growing Community
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Be part of a supportive community of parents, educators, and children who are 
              redefining what's possible for dyslexic learners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold">
                Start Your Journey
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-xl hover:bg-purple-600 hover:text-white transition-colors font-semibold">
                Share Your Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;