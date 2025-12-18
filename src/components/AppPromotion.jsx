import { Download, Smartphone, Map, Star, Shield, Zap, Globe, CloudOff, Users, Route } from 'lucide-react';
import { useState } from 'react';

const AppPromotion = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Route className="h-6 w-6" />,
      title: "Custom Route Planning",
      description: "Design your own travel routes with multiple stops and scenic waypoints",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Map className="h-6 w-6" />,
      title: "Hidden Hotspots",
      description: "Discover unique locations not found on standard maps",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Vehicle-Specific Modes",
      description: "Customized experience for cars, RVs/campers, and motorcycles",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <CloudOff className="h-6 w-6" />,
      title: "Offline Access",
      description: "Download maps and routes for use in remote areas",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Routes",
      description: "Explore routes created by fellow travelers",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Privacy First",
      description: "Your location data is used only for navigation, never sold",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const appStats = [
    { value: "50K+", label: "Active Users" },
    { value: "4.8", label: "Play Store Rating", icon: <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /> },
    { value: "1000+", label: "Routes Created" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - App Info */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-emerald-100 px-4 py-2 rounded-full mb-6">
              <Globe className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Download Now</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
                Ultimate Travel
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Companion App
              </span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8">
              Transform your Uttarakhand adventures with Tempadora - the ultimate route planning and exploration app designed for travelers who seek extraordinary experiences beyond the ordinary.
            </p>
            
            {/* App Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {appStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                    {stat.icon}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Download Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.swg.tempadora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Download className="h-6 w-6" />
              <div className="text-left">
                <div className="text-sm font-normal">GET IT ON</div>
                <div className="text-xl">Google Play</div>
              </div>
            </a>
            
            {/* QR Code Section */}
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl inline-flex items-center space-x-4">
              <div className="bg-white p-3 rounded-xl">
                {/* QR Code Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-emerald-100 rounded flex items-center justify-center">
                  <Smartphone className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Scan to download</p>
                <p className="font-semibold text-gray-800">Available on Android</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Features */}
          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Choose Tempadora?</h3>
              
              {/* Feature Tabs */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {features.slice(0, 3).map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`py-3 rounded-lg transition-all ${
                      activeFeature === index
                        ? 'bg-gradient-to-r from-blue-50 to-emerald-50 border-2 border-blue-200'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className={`mx-auto w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${
                      activeFeature === index ? 'bg-gradient-to-r ' + feature.color : 'bg-gray-200'
                    }`}>
                      <div className={activeFeature === index ? 'text-white' : 'text-gray-600'}>
                        {feature.icon}
                      </div>
                    </div>
                    <span className={`text-xs font-medium ${
                      activeFeature === index ? 'text-blue-700' : 'text-gray-600'
                    }`}>
                      {feature.title.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>
              
              {/* Active Feature Display */}
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${features[activeFeature].color} flex items-center justify-center mb-4`}>
                  <div className="text-white">
                    {features[activeFeature].icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {features[activeFeature].title}
                </h4>
                <p className="text-gray-600">
                  {features[activeFeature].description}
                </p>
              </div>
              
              {/* Feature Dots */}
              <div className="flex justify-center space-x-2 mb-8">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeFeature === index
                        ? 'bg-gradient-to-r from-blue-500 to-emerald-500 w-8'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              {/* Premium Features */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-950 rounded-2xl p-6 text-white">
                <h4 className="text-xl font-bold mb-3 flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-2" />
                  Premium Features
                </h4>
                <ul className="space-y-2">
                  {[
                    "Ad-free experience",
                    "Unlimited offline downloads",
                    "Advanced route analytics",
                    "Priority support",
                    "Exclusive hotspot access"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-blue-700">
                  <p className="text-blue-200 text-sm">
                    "Tempadora transformed my travel experience..." - <span className="font-semibold">Sid Mehta</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;