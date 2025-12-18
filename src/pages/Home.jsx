import { useState } from "react";
import Hero from "../components/Hero";
import HotspotCard from "../components/HotspotCard";
import AppPromotion from "../components/AppPromotion";
import { Map, Mountain, Trees, Wind, Coffee, Camera } from "lucide-react";

const Home = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");

  const hotspots = [
    {
      id: 1,
      name: "Kedarnath Temple",
      region: "Garhwal",
      description:
        "One of the Char Dham pilgrimage sites, nestled in the Himalayas",
      image: "/images/kedarnath.jpg",
      elevation: "3584m",
      bestSeason: "May-Oct",
      tags: ["Pilgrimage", "Trekking", "Scenic"],
      icon: <Mountain className="h-5 w-5" />,
    },
    {
      id: 2,
      name: "Rishikesh",
      region: "Garhwal",
      description:
        "Yoga capital and adventure sports hub on the banks of Ganges",
      image: "/images/rishikesh.jpg",
      elevation: "372m",
      bestSeason: "Sep-Jun",
      tags: ["Adventure", "Yoga", "River Rafting"],
      icon: <Wind className="h-5 w-5" />,
    },
    {
      id: 3,
      name: "Mussoorie",
      region: "Garhwal",
      description: "Queen of Hills with panoramic views and colonial charm",
      image: "/images/mussoorie.jpg",
      elevation: "2005m",
      bestSeason: "Mar-Jun",
      tags: ["Hill Station", "Hiking", "Photography"],
      icon: <Camera className="h-5 w-5" />,
    },
    {
      id: 4,
      name: "Valley of Flowers",
      region: "Garhwal",
      description:
        "UNESCO World Heritage Site with alpine flowers and biodiversity",
      image: "/images/valley-of-flowers.jpg",
      elevation: "3352-3658m",
      bestSeason: "Jul-Sep",
      tags: ["Trekking", "Flora", "UNESCO"],
      icon: <Trees className="h-5 w-5" />,
    },
    {
      id: 5,
      name: "Nainital",
      region: "Kumaon",
      description: "Lake district with beautiful lakes and mountain views",
      image: "/images/nainital.jpg",
      elevation: "2084m",
      bestSeason: "Mar-Jun",
      tags: ["Lake", "Boating", "Family"],
      icon: <Coffee className="h-5 w-5" />,
    },
    {
      id: 6,
      name: "Jim Corbett National Park",
      region: "Kumaon",
      description: "India's oldest national park and tiger reserve",
      image: "/images/corbett.jpg",
      elevation: "385-1100m",
      bestSeason: "Nov-Jun",
      tags: ["Wildlife", "Safari", "Nature"],
      icon: <Trees className="h-5 w-5" />,
    },
  ];

  const regions = ["all", "Garhwal", "Kumaon", "Char Dham", "Adventure"];

  const filteredHotspots =
    selectedRegion === "all"
      ? hotspots
      : hotspots.filter((hotspot) => hotspot.region === selectedRegion);

  return (
    <div>
      <Hero />

      {/* Hotspots Section */}
      
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-2xl mb-4">
            <Map className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent mb-4">
            Discover Uttarakhand Hotspots
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore the most breathtaking destinations in Devbhoomi. Filter by
            region to find your perfect getaway.
          </p>
        </div>

        {/* Region Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedRegion === region
                  ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {region.charAt(0).toUpperCase() + region.slice(1)}
            </button>
          ))}
        </div>

        {/* Hotspots Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotspots.map((hotspot) => (
            <HotspotCard key={hotspot.id} hotspot={hotspot} />
          ))}
        </div>

        {/* Route Planning Info */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-blue-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Plan Your Journey with Route Assistant
              </h3>
              <p className="text-gray-600 mb-6">
                Traveling from Dehradun to Kedarnath? Our intelligent route
                planner helps you discover hidden hotspots along the way. Find
                perfect mid-journey stays, local eateries, and scenic
                viewpoints.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time route optimization",
                  "Mid-journey hotspot suggestions",
                  "Local stay recommendations",
                  "Offline map access",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                  <span className="font-semibold">Dehradun → Kedarnath</span>
                  <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    5 Hotspots
                  </span>
                </div>
                {[
                  "Rishikesh (2 hrs)",
                  "Devprayag (1.5 hrs)",
                  "Rudraprayag (2 hrs)",
                  "Guptkashi (1 hr)",
                ].map((stop, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center bg-emerald-100 text-emerald-700 rounded-full">
                      {index + 1}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="font-medium">{stop}</div>
                      <div className="text-sm text-gray-500">
                        Click for nearby attractions
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppPromotion />
    </div>
  );
};

export default Home;
