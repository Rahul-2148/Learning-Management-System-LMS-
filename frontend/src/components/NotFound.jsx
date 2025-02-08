import React from "react";
import { Home, ArrowRightCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-300 text-center p-6">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4 animate-fadeIn">
        404
      </h1>
      <p className="text-xl font-semibold text-gray-700 mb-6 animate-fadeIn">
        Oops! Page Not Found
      </p>
      <div className="flex space-x-6 mb-8">
        <Home className="w-16 h-16 text-red-500 animate-bounce" />
        <ArrowRightCircle className="w-16 h-16 text-red-500 animate-bounce" />
      </div>
      <p className="text-lg text-gray-600 mb-4 animate-fadeIn">
        The page you are looking for does not exist.
      </p>
      <h1 className="text-2xl font-semibold text-gray-700 mb-6 animate-fadeIn">
        Work in progress... Stay Tuned 😊
      </h1>
      <a
        href="/"
        className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 animate-fadeIn"
      >
        Go Back Home
      </a>

      {/* Tailwind CSS Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
