import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const faculty = [
  {
    name: "Dr. Sarah Johnson",
    role: "Professor of Computer Science",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "20+ years of experience in AI and Machine Learning",
    linkedin: "#",
    email: "sarah.j@eduvista.com"
  },
  {
    name: "Prof. Michael Chen",
    role: "Head of Business School",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Former CEO with extensive industry experience",
    linkedin: "#",
    email: "michael.c@eduvista.com"
  },
  {
    name: "Dr. Emily Williams",
    role: "Data Science Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Research focus on Big Data Analytics",
    linkedin: "#",
    email: "emily.w@eduvista.com"
  },
  {
    name: "Prof. David Kim",
    role: "Digital Marketing Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Industry expert in Digital Strategy",
    linkedin: "#",
    email: "david.k@eduvista.com"
  }
];

export default function Faculty() {
  return (
    <section className="py-20 bg-white" id="faculty">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Faculty</h2>
          <p className="text-xl text-gray-600">Learn from industry experts and renowned academics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition group"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-gray-600 hover:text-indigo-600 transition"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-indigo-600 transition"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}