import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Globe } from 'lucide-react';
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div>
                <img src={logo} className="h-22 w-22" alt="Tempadora Logo" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">TempaDora</h2>
                <p className="text-blue-200 text-sm">Discover Devbhoomi</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Your ultimate guide to exploring the majestic beauty of Uttarakhand. Find hidden gems, plan routes, and create unforgettable memories.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms & Conditions', path: '/terms' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hotspot Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Hotspot Categories</h3>
            <ul className="space-y-3">
              {['Pilgrimage Sites', 'Hill Stations', 'Adventure Sports', 'Wildlife Sanctuaries', 'Trekking Routes', 'Cultural Hubs'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300">support@tempadora.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-300">+91 7452955342</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-300">Srinagar, Uttarakhand</p>
                  <p className="text-gray-400 text-sm">Operating Address: Srikot, Srinagar Garhwal, Uttarakhand, India</p>
                  <p className="text-gray-400 text-sm">Pin Code - 246174</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Download Banner */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div>
              <h3 className="text-xl font-bold mb-2">Download Our Mobile App</h3>
              <p className="text-gray-300">Get real-time route updates and offline maps</p>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.swg.tempadora"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-3 hover:shadow-lg transition-all"
            >
              <Globe className="h-5 w-5" />
              <div>
                <div className="text-sm">GET IT ON</div>
                <div className="text-lg">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tempadora. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-2">
            <Link to="/privacy" className="text-blue-300 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-blue-300 hover:text-white text-sm">
              Terms & Conditions
            </Link>
          </div>
          <p className="text-sm mt-2">Designed with ❤️ for travelers exploring Devbhoomi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;