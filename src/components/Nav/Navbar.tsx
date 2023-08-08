import { Fragment, useEffect } from "react";
import { sections, links } from "./links.json";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

type DirectLink = {
  label: string;
  href: string;
};

function Icon({ id, open }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-180" : ""} h-4 w-4 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="square" strokeLinejoin="inherit" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const Navbar: React.FC = () => {
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);
  const MobileNavButtonStyle = `h-1 w-7 my-1  bg-white transition ease transform duration-300`;
  const [navOpen, setNavOpen] = useState(false);
  const toggleMenu = () => {
    setNavOpen(!navOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 125) {
        setShowBackToTopButton(true);
      } else {
        setShowBackToTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const location = useLocation();

  // Check if the current location is the home screen

  return (
    <nav
      className={`${
        navOpen
          ? "pb-60 lg:pb-4 transition-all duration-[400ms] ease-in"
          : "pb-4 transition-all  duration-[700ms] ease-out"
      } fixed z-10 py-4 top-0 flex w-full border-b-[0.5px] border-slate-500 bg-black/30 shadow-sm backdrop-blur`}
    >
      <a href="/" className="flex pl-4 items-center">
        <img loading="lazy" src="/images/Logo.svg" className="h-12 mr-3 " alt="Logo" />
        <p className="text-xl font-semibold whitespace-nowrap text-white">Edward Lee</p>
      </a>
      <div className="lg:flex w-full lg:justify-end">
        <div className="flex lg:items-center space-x-5 ">
          {showBackToTopButton && (
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setNavOpen(false);
              }}
              className={`text-white h-8 flex ml-[28%] lg:mt-0 mt-2.5 lg:ml-0 lg:items-center px-4 rounded-full border-2 border-slate-500 cursor-pointer"
            }`}
            >
              Back to Top
            </button>
          )}
          <div
            onClick={() => setNavOpen(!navOpen)}
            className="absolute right-8 scale-[80%] top-6 cursor-pointer lg:hidden"
          >
            <button
              className="flex flex-col border-none rounded-lg justify-center items-center group"
              onClick={() => setNavOpen(!navOpen)}
            >
              <div
                className={`${MobileNavButtonStyle} ${
                  navOpen
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${MobileNavButtonStyle} ${navOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`}
              />
              <div
                className={`${MobileNavButtonStyle} ${
                  navOpen
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
            </button>
          </div>

          <ul
            className={`lg:flex text-center lg:pb-0 pb-8 absolute lg:static lg:z-auto z-[-1] w-full lg:w-auto transition-all ${
              navOpen
                ? "top-20 opacity-100 delay-[-100ms] duration-500 ease-in "
                : "top-[-490px] opacity-100 flex  w-full duration-[900ms] ease-out "
            }`}
          >
            <div className="flex mr-8 flex-col lg:space-x-12 sm:flex-row">
              {sections.map((link, index) => {
                if (link.path.startsWith("/")) {
                  return (
                    <div key={index} className="text-white text-xl ">
                      <HashLink
                        onClick={() => toggleMenu}
                        smooth
                        to={link.path}
                        className="[text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] text-gray-400 hover:text-white duration-500"
                      >
                        {link.label}
                      </HashLink>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className=" text-white text-xl my-3">
                      <HashLink
                        onClick={toggleMenu}
                        id={link.label}
                        smooth
                        to={"/" + link.path}
                        className="[text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] text-gray-400 hover:text-white duration-500"
                      >
                        {link.label}
                      </HashLink>
                    </div>
                  );
                }
              })}
            </div>
            {links.map((link: DirectLink, index) => {
              return (
                <div key={index} className=" text-white text-xl mx-5 mt-3">
                  <a
                    href={link.href}
                    className="[text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] text-gray-400 hover:text-white duration-500"
                  >
                    {link.label}
                  </a>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
