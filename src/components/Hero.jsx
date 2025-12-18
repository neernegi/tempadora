import { Search, Navigation, MapPin } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium">Explore Devbhoomi</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Uttarakhand's
            <span className="block bg-gradient-to-r from-blue-300 to-emerald-300 bg-clip-text text-transparent">
              Hidden Hotspots
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
            Create Your Route, Find the Best Stays & Explore Beyond Tourist
            Trails
          </p>

          {/* Search Bar */}
          {/* <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center bg-white/5 rounded-xl p-3">
                <Navigation className="h-5 w-5 text-blue-300 mr-3 flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Where do you want to go? e.g., Dehradun to Kedarnath"
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-blue-200 w-full min-w-0"
                />
              </div>
              <button
                onClick={handleSearch}
                className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all hover:shadow-lg active:scale-95"
              >
                <Search className="h-5 w-5" />
                <span>Explore Route</span>
              </button>
            </div>
          </div> */}

          {/* Stats */}
          <div className="relative z-10 mt-12 md:mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              {[
                { value: "50+", label: "Hotspots", icon: "🏔️" },
                { value: "1000+", label: "Routes", icon: "🗺️" },
                { value: "24/7", label: "Support", icon: "🛡️" },
                { value: "4.8★", label: "App Rating", icon: "⭐" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            {/* App Download CTA */}
            <div className="mt-6 max-w-md mx-auto">
              <a
                href="https://play.google.com/store/apps/details?id=com.swg.tempadora"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <span>Get the Tempadora App</span>
              </a>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Hero;
