import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative bottom-0 left-0 my-8 w-screen bg-transparent px-8 pb-4 pt-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <img src={"/images/Logo.svg"} loading="lazy" alt="Logo" className=" mr-2 h-6 w-6 " />
            <div className="text-xl font-bold text-white">Edward Lee</div>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/edwardhyunlee/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <div className="text-white">&copy; {new Date().getFullYear()}</div>
          <div className="text-white">edwardhyunlee@gmail.com</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
