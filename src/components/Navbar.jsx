import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hotspotsDropdown, setHotspotsDropdown] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const hotspotRegions = [
    { name: "Garhwal Region", path: "#garhwal" },
    { name: "Kumaon Region", path: "#kumaon" },
    { name: "Char Dham Yatra", path: "#chardham" },
    { name: "Adventure Sports", path: "#adventure" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="TempaDora"
              className="w-22"
            />

            <div className="leading-tight">
              <Link
                to="/"
                className="block text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"
              >
                TempaDora
              </Link>
              <p className="text-xs text-gray-500">
                Discover the Soul of Devbhoomi
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></span>
                )}
              </Link>
            ))}

            {/* Hotspots Dropdown */}
            {/* <div
              className="relative"
              onMouseEnter={() => setHotspotsDropdown(true)}
              onMouseLeave={() => setHotspotsDropdown(false)}
            >
              <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors">
                <span>Hotspots</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    hotspotsDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {hotspotsDropdown && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-emerald-50">
                    <p className="text-sm font-semibold text-gray-800">
                      Explore Regions
                    </p>
                  </div>
                  {hotspotRegions.map((region) => (
                    <a
                      key={region.name}
                      href={region.path}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-gray-100 last:border-0"
                    >
                      {region.name}
                    </a>
                  ))}
                </div>
              )}
            </div> */}

            {/* App Download Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.swg.tempadora"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <span>Get App</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-blue-50"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl mt-2 mb-4 border border-gray-100 animate-slideDown">
            <div className="px-4 pt-4 pb-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium ${
                    location.pathname === item.path
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-3">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Hotspot Regions
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {hotspotRegions.map((region) => (
                    <a
                      key={region.name}
                      href={region.path}
                      onClick={() => setIsOpen(false)}
                      className="text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                    >
                      {region.name}
                    </a>
                  ))}
                </div>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.swg.tempadora"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-3 rounded-full font-semibold mt-4"
              >
                Download Mobile App
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
