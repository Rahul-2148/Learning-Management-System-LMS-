import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-gray-600 text-center max-w-2xl mb-12">
        We'd love to hear from you! Whether you have a question, feedback, or a
        business inquiry, feel free to reach out to us using the information
        below or the form provided.
      </p>

      <div className="flex flex-col md:flex-row gap-12 max-w-7xl w-full">
        {/* Left Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700">
              <Mail className="text-blue-600 w-6 h-6 mr-3" />
              <span>info@example.com</span>
            </li>
            <li className="flex items-center text-gray-700">
              <Phone className="text-blue-600 w-6 h-6 mr-3" />
              <span>+1 (123) 456-7890</span>
            </li>
            <li className="flex items-center text-gray-700">
              <MapPin className="text-blue-600 w-6 h-6 mr-3" />
              <span>123 Business Street, Suite 456, City, Country</span>
            </li>
          </ul>

          <h3 className="text-lg font-medium text-gray-800 mt-8">Follow Us</h3>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-pink-600 hover:text-pink-800 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16 w-full max-w-7xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Find Us</h2>
        <iframe
          className="w-full h-64 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29156.105862214015!2d85.52221771074252!3d24.47987505750307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5c3b4a5b23bff%3A0x9acdb60f616b6fc1!2sKoderma%2C%20Jharkhand%2C%20India!5e0!3m2!1sen!2sus!4v1640626332885!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
