import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold">
              SEEKH{" "}
              <span>
                <span className="text-blue-500">SMART</span>
              </span>
            </h2>
            <p className="text-gray-400">
              Empowering Learning, One Student at a Time.
            </p>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0 mr-20">
            <a
              target="_blank"
              href="https://www.facebook.com/rahulrajmodi.48"
              aria-label="Facebook"
              className="hover:text-blue-500 transition duration-300"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              target="_blank"
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-400 transition duration-300"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/rahulrajmodi.48/"
              aria-label="Instagram"
              className="hover:text-pink-500 transition duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rahul-raj-11a946224/"
              aria-label="LinkedIn"
              className="hover:text-blue-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-gray-400">
              <li>
                <a
                  href="/about"
                  className="hover:underline hover:text-blue-500"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="hover:underline hover:text-blue-500"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline hover:text-blue-500">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-400">
              Email:{" "}
              <span className="text-blue-500">
                <a href="mailto:seekhsmartlms@gmail.com">
                  seekhsmartlms@gmail.com
                </a>
              </span>
            </p>
            <p className="text-gray-400">
              Phone:{" "}
              <span className="text-blue-500">
                <a href="tel:+91 9973162148">+91 9973162148</a>
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Subscribe to Our Newsletter
            </h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md text-gray-800 focus:outline-none focus:ring focus:ring-blue-500 mr-2"
            />
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-red-500 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400 mb-1">
            &copy; {currentYear} <span className="text-blue-500">SEEKH SMART. </span> All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            <a
              href="/privacy-policy"
              className="hover:underline hover:text-blue-500 mr-2"
            >
              Privacy Policy
            </a>{" "}
            |
            <a
              href="/terms-of-service"
              className="hover:underline hover:text-blue-500 ml-2"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
