import { FileText, Shield, CheckCircle, AlertCircle } from "lucide-react";

const TermCondition = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-emerald-100 px-4 py-2 rounded-full mb-6">
            <FileText className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              Legal Information
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
              Terms & Conditions
            </span>
          </h1>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-gray-100">
          <div className="prose max-w-none">
            <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl">
              <p className="text-gray-700">
                Welcome to Tempadora! These terms and conditions outline the
                rules and regulations for the use of our website and mobile
                application.
              </p>
            </div>

            {[
              {
                title: "Acceptance of Terms",
                content:
                  "By accessing and using Tempadora, you accept and agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, please discontinue use of our services.",
                icon: <CheckCircle className="h-5 w-5" />,
              },
              {
                title: "Service Description",
                content:
                  "Tempadora provides travel planning, route optimization, and hotspot discovery services for Uttarakhand. We offer information about destinations, routes, accommodations, and travel suggestions.",
                icon: <FileText className="h-5 w-5" />,
              },
              {
                title: "User Responsibilities",
                content:
                  "You are responsible for your travel decisions and safety. Always verify current travel conditions, weather, and local regulations before embarking on any journey.",
                icon: <AlertCircle className="h-5 w-5" />,
              },
              {
                title: "Intellectual Property",
                content:
                  "All content on Tempadora, including text, graphics, logos, and software, is our property or licensed to us and is protected by copyright and intellectual property laws.",
                icon: <Shield className="h-5 w-5" />,
              },
              {
                title: "Limitation of Liability",
                content:
                  "Tempadora is not liable for any direct, indirect, incidental, or consequential damages resulting from your use of our services or reliance on the information provided.",
                icon: <AlertCircle className="h-5 w-5" />,
              },
              {
                title: "App Usage",
                content:
                  "The Tempadora mobile app is available on Google Play Store. You must download it only from official sources. Unauthorized modifications or distributions are prohibited.",
                icon: <FileText className="h-5 w-5" />,
              },
            ].map((section, index) => (
              <div key={index} className="mb-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-lg">
                    <div className="text-blue-600">{section.icon}</div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {section.title}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Contact for Legal Inquiries
              </h3>
              <p className="text-gray-600">
                For any questions regarding these Terms & Conditions, please
                contact us at:
                <br />
                <a
                  href="mailto:legal@tempadora.com"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  legal@tempadora.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Back to Privacy Policy Link */}
        <div className="mt-8 text-center">
          <a
            href="/privacy"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            ← View Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermCondition;
