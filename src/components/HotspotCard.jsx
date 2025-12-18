import { MapPin, Star, Calendar, Mountain, Users, ArrowRight, Navigation, WifiOff } from 'lucide-react';
import { useState } from 'react';

const HotspotCard = ({ hotspot }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const getRouteInfo = (hotspotName) => {
    const routes = {
      "Kedarnath Temple": {
        fromDehradun: "238 km, 8-9 hours",
        stops: ["Rishikesh", "Devprayag", "Rudraprayag"],
        difficulty: "Moderate",
        bestTransport: "Car/Bus"
      },
      "Rishikesh": {
        fromDehradun: "45 km, 1-1.5 hours",
        stops: ["Haridwar"],
        difficulty: "Easy",
        bestTransport: "Car/Taxi"
      },
      "Mussoorie": {
        fromDehradun: "35 km, 1-1.5 hours",
        stops: ["Dehradun City"],
        difficulty: "Easy",
        bestTransport: "Car/Taxi"
      },
      "Valley of Flowers": {
        fromDehradun: "295 km, 9-10 hours",
        stops: ["Rishikesh", "Joshimath"],
        difficulty: "Challenging",
        bestTransport: "Trekking"
      },
      "Nainital": {
        fromDehradun: "280 km, 7-8 hours",
        stops: ["Haldwani"],
        difficulty: "Easy",
        bestTransport: "Car/Bus"
      },
      "Jim Corbett National Park": {
        fromDehradun: "230 km, 5-6 hours",
        stops: ["Moradabad"],
        difficulty: "Easy",
        bestTransport: "Car/Bus"
      }
    };
    return routes[hotspotName] || {};
  };

  const routeInfo = getRouteInfo(hotspot.name);

  return (
    <div 
      className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform ${isHovered ? '-translate-y-2' : ''} border border-gray-100`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-56">
        <img 
          src={hotspot.image} 
          alt={hotspot.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Region Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            hotspot.region === 'Garhwal' 
              ? 'bg-blue-500/90 text-white' 
              : 'bg-emerald-500/90 text-white'
          }`}>
            {hotspot.region}
          </span>
        </div>
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-1">
          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-bold text-gray-800">4.8</span>
        </div>
        
        {/* Quick Info */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">{hotspot.name}</h3>
          <div className="flex items-center space-x-1 text-white/90 bg-black/30 px-2 py-1 rounded-lg">
            {hotspot.icon}
            <span className="text-sm">{hotspot.elevation}</span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2">{hotspot.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {hotspot.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4 text-blue-500" />
            <div>
              <div className="font-medium">Best Season</div>
              <div className="text-gray-800 font-semibold">{hotspot.bestSeason}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Mountain className="h-4 w-4 text-emerald-500" />
            <div>
              <div className="font-medium">Elevation</div>
              <div className="text-gray-800 font-semibold">{hotspot.elevation}</div>
            </div>
          </div>
        </div>
        
        {/* Route Info Section */}
        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Navigation className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">Route from Dehradun</span>
            </div>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
              {routeInfo.fromDehradun || "Check route"}
            </span>
          </div>
          
          {showMoreInfo && routeInfo.stops && (
            <div className="mt-2 animate-fadeIn">
              <div className="text-xs text-gray-600 mb-1">Major Stops:</div>
              <div className="flex flex-wrap gap-1">
                {routeInfo.stops.map((stop, index) => (
                  <span key={index} className="text-xs bg-white px-2 py-1 rounded border border-blue-100">
                    {stop}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs">
                <span className="text-gray-600">Difficulty: <strong>{routeInfo.difficulty}</strong></span>
                <span className="text-gray-600">Best: <strong>{routeInfo.bestTransport}</strong></span>
              </div>
            </div>
          )}
          
          <button 
            onClick={() => setShowMoreInfo(!showMoreInfo)}
            className="mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
          >
            <span>{showMoreInfo ? 'Show Less' : 'Route Details'}</span>
            <ArrowRight className={`h-3 w-3 transition-transform ${showMoreInfo ? 'rotate-90' : ''}`} />
          </button>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>Explore Now</span>
          </button>
          <button 
            className="px-4 py-3 border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl font-medium transition-all duration-300 flex items-center justify-center"
            title="Save for offline"
          >
            <WifiOff className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotspotCard;