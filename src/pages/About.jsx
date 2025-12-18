import { Heart, Compass, Users, Shield, TrendingUp, Globe, Award, Target } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const teamMembers = [
    {
      name: "Tushar Negi",
      role: "Founder & CEO",
      image: "👨‍💻",
      bio: "Travel enthusiast with 10+ years in tech",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Priya Sharma",
      role: "Route Expert",
      image: "🧗‍♀️",
      bio: "Uttarakhand native and trekking guide",
      color: "from-emerald-400 to-emerald-600"
    },
    {
      name: "Arjun Patel",
      role: "Tech Lead",
      image: "👨‍💻",
      bio: "Full-stack developer & outdoor photographer",
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Meera Joshi",
      role: "Community Manager",
      image: "👩‍💼",
      bio: "Former travel blogger turned community builder",
      color: "from-pink-400 to-pink-600"
    }
  ];

  const milestones = [
    { year: "2021", title: "Founded", description: "Idea born from a Himalayan trek" },
    { year: "2022", title: "App Launch", description: "First version released on Play Store" },
    { year: "2023", title: "10K Users", description: "Community milestone achieved" },
    { year: "2024", title: "Expansion", description: "Covering all Uttarakhand regions" }
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion for Travel",
      description: "We believe travel transforms lives and connects cultures"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Trust & Safety",
      description: "Your security and privacy are our top priorities"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community First",
      description: "Built by travelers, for travelers"
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Adventure Spirit",
      description: "Encouraging exploration beyond the beaten path"
    }
  ];

  return (
    <div className="py-16 px-4">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-emerald-100 px-4 py-2 rounded-full mb-6">
            <Globe className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
              We Are
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Tempadora
            </span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Born from a shared love for the Himalayas and a vision to transform how travelers explore Uttarakhand.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl p-8 h-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h2>
              <p className="text-gray-600 mb-6">
                Tempadora was born during a Himalayan trek when our founders realized that existing travel apps couldn't capture the true essence of Uttarakhand's hidden gems.
              </p>
              <p className="text-gray-600 mb-8">
                What started as a passion project among friends has evolved into a platform that helps thousands of travelers discover authentic experiences, connect with local communities, and create unforgettable memories in the lap of the Himalayas.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "50+", label: "Hotspots Mapped" },
                  { value: "1000+", label: "Happy Travelers" },
                  { value: "24/7", label: "Support" },
                  { value: "4.8★", label: "App Rating" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-blue-100 mb-6">
                To democratize travel discovery by making Uttarakhand's most breathtaking spots accessible to every traveler, while preserving their natural beauty and cultural significance.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="font-bold mb-3 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Vision 2025
                </h4>
                <ul className="space-y-2">
                  {[
                    "Map 500+ hidden hotspots",
                    "Launch iOS version",
                    "Expand to other Himalayan states",
                    "Partner with 100+ local homestays"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-emerald-300 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 w-64">
              <div className="flex items-center space-x-3 mb-3">
                <Award className="h-6 w-6 text-yellow-500" />
                <span className="font-bold text-gray-800">Recognition</span>
              </div>
              <p className="text-sm text-gray-600">
                Featured in "Top 10 Travel Apps for Adventure" by TravelTech Magazine
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow hover:-translate-y-1">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-100 to-emerald-100 mb-4">
                  <div className="text-blue-600">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-all">
                <div className={`h-32 bg-gradient-to-r ${member.color} flex items-center justify-center`}>
                  <div className="text-5xl">{member.image}</div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.swg.tempadora"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Connect via Tempadora App →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
            Our Journey Timeline
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-emerald-500"></div>
            
            {/* Timeline items */}
            <div className="relative">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative flex-shrink-0">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* App Download Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-950 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Join Our Travel Community</h3>
              <p className="text-blue-200 mb-6">
                Download Tempadora today and start exploring Uttarakhand like never before. Be part of our growing community of adventure seekers.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.swg.tempadora"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all"
              >
                <Download className="h-6 w-6" />
                <span>Download Now</span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🗺️", text: "500+ Routes" },
                { icon: "🏔️", text: "All Regions" },
                { icon: "📱", text: "Offline Maps" },
                { icon: "👥", text: "Community" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-sm font-medium">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Need to add Download import at the top
import { Download } from 'lucide-react';

export default About;