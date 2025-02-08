import { ShieldCheck, Lock, FileText, UserCheck, Globe } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:shadow-2xl">
        <div className="p-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b pb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-6 text-base leading-relaxed">
            Welcome to <span className="font-semibold">[Your LMS Name]</span>. These Terms of Service govern your use of our platform. By accessing or using our LMS, you agree to these terms. Please read them carefully.
          </p>

          {/* Section 1 */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <ShieldCheck className="text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">1. User Responsibilities</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Users must ensure that the information provided during registration is accurate and up-to-date. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Lock className="text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">2. Acceptable Use</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              You agree not to misuse the LMS, including but not limited to attempting unauthorized access, uploading harmful content, or engaging in activities that disrupt other users' experiences.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">3. Content Ownership</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              All intellectual property rights in the LMS, including content, designs, and features, belong to [Your LMS Name]. Users retain ownership of the data they upload but grant us a license to use it for improving services.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <UserCheck className="text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">4. Termination</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend or terminate your account if you violate these terms or engage in prohibited activities. Terminated accounts may lose access to uploaded data.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Globe className="text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">5. Limitation of Liability</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              [Your LMS Name] is not liable for any indirect, incidental, or consequential damages arising from the use of the platform. We strive for accuracy but do not guarantee error-free functionality.
            </p>
          </div>

          {/* Final Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              For any questions about these Terms of Service, contact us at <span className="font-medium">[Your Contact Information]</span>. Your feedback helps us create a better experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
