import React from 'react';
import { Clock, User, ArrowRight, BookOpen, Brain, Users } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Dyslexia: A Parent's Complete Guide",
      excerpt: "Learn about the signs, symptoms, and early intervention strategies that can make a significant difference in your child's learning journey.",
      author: "Dr. Sarah Mitchell",
      readTime: "8 min read",
      category: "Education",
      image: "https://images.pexels.com/photos/1157394/pexels-photo-1157394.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "March 15, 2024"
    },
    {
      title: "The Science Behind AI-Powered Learning for Dyslexic Children",
      excerpt: "Discover how artificial intelligence is revolutionizing personalized education and helping dyslexic learners achieve their full potential.",
      author: "Prof. Michael Chen",
      readTime: "12 min read",
      category: "Technology",
      image: "https://images.pexels.com/photos/8199202/pexels-photo-8199202.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "March 10, 2024"
    },
    {
      title: "Success Stories: How Mind Bridge Changed Emma's Life",
      excerpt: "Follow Emma's inspiring journey from struggling reader to confident learner, and see how personalized technology made all the difference.",
      author: "Lisa Park",
      readTime: "6 min read",
      category: "Success Stories",
      image: "https://images.pexels.com/photos/8613313/pexels-photo-8613313.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "March 5, 2024"
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "Dyslexia Resources Hub",
      description: "Comprehensive guides, worksheets, and tools for parents and teachers",
      link: "#"
    },
    {
      icon: Brain,
      title: "Research & Studies",
      description: "Latest research findings on dyslexia and learning disabilities",
      link: "#"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other parents and share experiences",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Resources & <span className="text-blue-600">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest research, success stories, and practical advice 
            for supporting dyslexic learners.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <resource.icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium">
                <span>Explore</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Mind Bridge
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, research updates, and success stories 
            from the dyslexia learning community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;