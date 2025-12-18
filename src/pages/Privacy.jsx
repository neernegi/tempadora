import { Shield, Lock, Eye, Database, Key, Globe, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const Privacy = () => {
  const [activeSection, setActiveSection] = useState('data-collection');

  const sections = [
    {
      id: 'data-collection',
      title: 'Data Collection',
      icon: <Database className="h-5 w-5" />,
      content: `
        We collect minimal data necessary to provide our services:
        • Location data (only when app is in use, for navigation)
        • Route information you create
        • Saved hotspots and preferences
        • App usage statistics (anonymized)
        
        We do NOT collect:
        • Personal messages or contacts
        • Financial information
        • Sensitive personal data
      `
    },
    {
      id: 'data-usage',
      title: 'How We Use Data',
      icon: <Eye className="h-5 w-5" />,
      content: `
        Your data is used exclusively to:
        • Provide route navigation and planning
        • Improve hotspot recommendations
        • Enhance app performance
        • Personalize your experience
        
        We never sell your data to third parties. Data is only shared with:
        • Map service providers (for navigation)
        • Analytics services (anonymized)
        • Legal authorities (when required by law)
      `
    },
    {
      id: 'data-protection',
      title: 'Data Protection',
      icon: <Lock className="h-5 w-5" />,
      content: `
        We implement industry-standard security measures:
        • End-to-end encryption for all data transmission
        • Secure servers with regular security audits
        • Two-factor authentication available
        • Regular security updates
        
        Your offline maps and routes are stored securely on your device and never transmitted without your permission.
      `
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      icon: <Key className="h-5 w-5" />,
      content: `
        You have the right to:
        • Access your personal data
        • Correct inaccurate data
        • Delete your account and all associated data
        • Export your data in standard formats
        • Opt-out of non-essential data collection
        
        To exercise these rights, contact us at support@tempadora.com
      `
    }
  ];

  const principles = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Privacy by Design",
      description: "We build privacy into every feature from the ground up"
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Data Minimization",
      description: "We collect only what's necessary for your experience"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Transparency",
      description: "Clear communication about how your data is used"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "User Control",
      description: "You decide what data you share and when"
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-emerald-100 px-4 py-2 rounded-full mb-6">
            <Shield className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Privacy & Security</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
              Privacy Policy &
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Your privacy is our priority. Learn how we protect your data and ensure a secure travel planning experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Sections</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-blue-50 to-emerald-50 text-blue-700 font-medium border border-blue-100'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`mr-3 ${
                          activeSection === section.id ? 'text-blue-600' : 'text-gray-400'
                        }`}>
                          {section.icon}
                        </div>
                        {section.title}
                      </div>
                    </button>
                  ))}
                </nav>

                {/* Principles */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-4">Our Privacy Principles</h4>
                  <div className="space-y-3">
                    {principles.map((principle, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <div className="text-blue-600">{principle.icon}</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">{principle.title}</div>
                          <div className="text-sm text-gray-600">{principle.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl">
                  <p className="text-sm text-gray-700">
                    Questions about privacy?<br />
                    <a href="mailto:support@tempadora.com" className="text-blue-600 hover:text-blue-700 font-medium">
                      support@tempadora.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            {/* Active Section Content */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-xl">
                  <div className="text-blue-600">
                    {sections.find(s => s.id === activeSection)?.icon}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {sections.find(s => s.id === activeSection)?.title}
                  </h2>
                  <p className="text-gray-600">Last updated: January 2024</p>
                </div>
              </div>

              <div className="prose max-w-none">
                <pre className="text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
                  {sections.find(s => s.id === activeSection)?.content}
                </pre>
              </div>
            </div>

            {/* Terms of Service */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Terms of Service</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Acceptance of Terms",
                    content: "By using Tempadora, you agree to these terms and our Privacy Policy. If you disagree, please discontinue use of our services."
                  },
                  {
                    title: "Service Description",
                    content: "Tempadora provides route planning, hotspot discovery, and travel planning services for Uttarakhand. We continuously update and improve our services."
                  },
                  {
                    title: "User Responsibilities",
                    content: "You are responsible for your travel decisions. Use our suggestions responsibly and comply with local laws and regulations."
                  },
                  {
                    title: "Limitation of Liability",
                    content: "Tempadora is not liable for travel disruptions, accidents, or damages incurred while using our route suggestions."
                  },
                  {
                    title: "App Usage",
                    content: "The Tempadora mobile app is available on Google Play Store. Download only from official sources to ensure security."
                  }
                ].map((term, index) => (
                  <div key={index} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{term.title}</h3>
                    <p className="text-gray-600">{term.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* App Download Section */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-950 rounded-3xl p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Download Secure App</h3>
                  <p className="text-blue-200 mb-6">
                    Get the official Tempadora app from Google Play Store for the most secure and updated experience.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Regular security updates",
                      "Encrypted data transmission",
                      "Privacy controls in settings",
                      "Offline mode for sensitive routes"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-emerald-300 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.swg.tempadora"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                    </svg>
                    <span>Download from Play Store</span>
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h4 className="font-bold mb-4">Security Features</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: "🔒", label: "End-to-End Encrypted" },
                      { icon: "📱", label: "Secure Login" },
                      { icon: "🌐", label: "HTTPS Only" },
                      { icon: "🔄", label: "Auto Updates" }
                    ].map((feature, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <div className="text-sm font-medium">{feature.label}</div>
                      </div>
                    ))}
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

export default Privacy;