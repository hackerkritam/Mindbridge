import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Kritam Bhattarai",
      social: {
        linkedin: "https://linkedin.com/in/kritam-bhattarai",
        github: "https://github.com/kritam-bhattarai",
        email: "kritam@mindbridge.com"
      }
    },
    {
      name: "Jeevan Kushwaha",
      social: {
        linkedin: "https://linkedin.com/in/jeevan-kushwaha",
        github: "https://github.com/jeevan-kushwaha",
        email: "jeevan@mindbridge.com"
      }
    },
    {
      name: "Dipesh Acharya",
      social: {
        linkedin: "https://linkedin.com/in/dipesh-acharya",
        github: "https://github.com/dipesh-acharya",
        email: "dipesh@mindbridge.com"
      }
    },
    {
      name: "Kushal Acharya",
      social: {
        linkedin: "https://linkedin.com/in/kushal-acharya",
        github: "https://github.com/kushal-acharya",
        email: "kushal@mindbridge.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Computer Engineering Students from IOE Purwanchal Campus
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="text-center">
            <div className="relative mb-8">
              <img 
                src="/tech.jpg" 
                alt="Our Team"
                className="w-[600px] h-[500px] object-cover rounded-2xl shadow-lg mx-auto"
              />
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                  
                  <div className="flex justify-center space-x-2">
                    <a 
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="h-3 w-3" />
                    </a>
                    <a 
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
                    >
                      <Github className="h-3 w-3" />
                    </a>
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                    >
                      <Mail className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Building innovative solutions for children with dyslexia
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
