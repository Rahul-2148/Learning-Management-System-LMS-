import { Lock, User, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:shadow-2xl">
        <div className="p-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b pb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-4 text-sm">Effective Date: <span className="font-medium">[Insert Date]</span></p>
          <p className="text-gray-600 mb-6 text-base leading-relaxed">
            Welcome to <span className="font-semibold">[Your LMS Name]</span>. We are dedicated to safeguarding your privacy while providing a comprehensive Learning Management System (LMS) tailored to enhance the educational experience for college students. This Privacy Policy details the types of information we collect, how we use it, and your rights regarding your data.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
            <Lock className="mr-2 text-blue-600" /> Information We Collect
          </h2>
          <ul className="border rounded-lg p-4 space-y-2">
            <li><strong>Personal Information:</strong> Your name, email address, phone number, academic details, and any additional data provided during registration or profile updates.</li>
            <li><strong>Usage Data:</strong> Your interactions with the LMS, including login times, pages visited, course progress, and session durations.</li>
            <li><strong>Device Information:</strong> Information about the device you use to access the LMS, such as your browser type, operating system, and IP address.</li>
            <li><strong>Communication Data:</strong> Messages or feedback submitted through our support channels or discussion forums.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
            <User className="mr-2 text-blue-600" /> How We Use Your Information
          </h2>
          <ul className="border rounded-lg p-4 space-y-2">
            <li>Creating and managing your LMS account, including personalized dashboards and course recommendations.</li>
            <li>Facilitating participation in courses, quizzes, assignments, and other academic activities.</li>
            <li>Communicating account updates, new features, or system notifications.</li>
            <li>Analyzing user behavior to improve LMS performance, functionality, and user experience.</li>
            <li>Providing technical support and resolving issues promptly.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
            <Shield className="mr-2 text-blue-600" /> Data Sharing
          </h2>
          <ul className="border rounded-lg p-4 space-y-2">
            <li>Sharing with academic institutions or faculty members to monitor and support your educational progress.</li>
            <li>Collaborating with trusted service providers to maintain and improve LMS infrastructure.</li>
            <li>Complying with legal requirements or protecting the rights and safety of users.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
            <Lock className="mr-2 text-blue-600" /> Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Advanced security measures, including encryption and secure server protocols, protect your data against unauthorized access, alteration, or disclosure. Regular audits and updates ensure ongoing data protection.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
            <User className="mr-2 text-blue-600" /> Your Rights
          </h2>
          <ul className="border rounded-lg p-4 space-y-2">
            <li><strong>Access and Review:</strong> Access your personal information and review it for accuracy.</li>
            <li><strong>Data Correction:</strong> Request corrections to inaccurate or incomplete information.</li>
            <li><strong>Data Deletion:</strong> Ask for the removal of your data, subject to legal or contractual obligations.</li>
            <li><strong>Communication Preferences:</strong> Opt-out of non-essential emails or notifications at any time.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 leading-relaxed">
            Our LMS uses cookies and similar tracking technologies to enhance user experience, analyze usage patterns, and deliver tailored content. Manage your cookie preferences through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed">
            The LMS may include links to third-party websites or services. We are not responsible for their privacy practices. Review their policies before sharing personal information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Policy Updates</h2>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy may be updated periodically to reflect changes in practices or legal requirements. Significant updates will be communicated through the LMS or via email.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            For questions or feedback about this Privacy Policy, contact us at <span className="font-medium">[Your Contact Information]</span>. We value your input and are committed to addressing your concerns promptly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
