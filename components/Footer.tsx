import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold tracking-wide">Global Solutions</h2>
          <p className="text-sm">123 Street Name, City, Country</p>
        </div>
        <div className="flex flex-row items-center justify-center">
  <p className="text-center text-sm text-gray-200 mr-4">
    Connect with us on social media
  </p>
  <div className="flex space-x-4">
    <a
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-blue-500 transition-colors"
    >
      <BsLinkedin size="2em" />
    </a>
    <a
      href="https://github.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-400 transition-colors"
    >
      <BsGithub size="2em" />
    </a>
  </div>
</div>
</div>

      <div className="border-t border-gray-700 mt-2 pt-4">
      
        <div className="mt-2 text-center text-sm">
          <p>&copy; 2024 Global Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
