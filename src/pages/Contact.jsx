import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "support@tempadora.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+91 7452955342",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "Srinagar, Uttarakhand",
      subDetails: "Srikot, Srinagar Garhwal, Uttarakhand, India - 246174",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Support Hours",
      details: "Monday - Saturday",
      subDetails: "9:00 AM - 7:00 PM IST",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Have questions about routes, hotspots, or need travel advice? We're here to help you plan your perfect Uttarakhand journey.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${info.color} text-white mb-4`}>
                {info.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{info.title}</h3>
              <p className="text-gray-700 font-medium">{info.details}</p>
              {info.subDetails && (
                <p className="text-gray-500 text-sm mt-1">{info.subDetails}</p>
              )}
            </div>
          ))}

          {/* App QR Code Section */}
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Get Our Mobile App</h3>
            <div className="flex items-center space-x-4">
              <div className="bg-white p-4 rounded-xl">
                {/* QR Code Placeholder */}
                <div className="w-32 h-32 bg-gray-200 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl">📱</div>
                    <div className="text-xs text-gray-500">Scan for App</div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-600 mb-3">Download for better route planning</p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.swg.tempadora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <span>Play Store</span>
                  <Send className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-xl mr-4">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
                <p className="text-gray-600">We typically respond within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                  placeholder="Tell us about your travel plans or questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>

            {/* Map Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Find Our Office</h3>
              <div className="bg-gradient-to-r from-blue-100 to-emerald-100 rounded-2xl p-6">
                <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-700">Srikot, Srinagar Garhwal</p>
                    <p className="text-gray-500">Uttarakhand, India - 246174</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;