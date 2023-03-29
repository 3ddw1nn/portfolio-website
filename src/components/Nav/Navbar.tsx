// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { sections, links, dropdown } from "./links.json";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

type DirectLink = {
  label: string;
  href: string;
};

function Icon({ id, open }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-180" : ""} h-7 w-7 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
interface scrollProps {
  scrollID: (position: number) => void;
}

const Navbar: React.FC = () => {
  const MobileNavButtonStyle = `h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300`;
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed z-10 py-4 flex w-full h-fit items-center justify-around  ">
      <div className=" w-full fixed h-fit top-0 left-0 from-black/80 to-transparent bg-gradient-to-b">
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
          <a href="/" className=" ml-12 flex items-center">
            <img src="/images/Logo.svg" className="h-14 mr-3 " alt="Logo" />
            <p className="self-center text-xl font-semibold whitespace-nowrap text-white">Edward Lee</p>
          </a>

          <div onClick={() => setNavOpen(!navOpen)} className="absolute right-8 top-6 cursor-pointer md:hidden">
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
            className={`md:flex text-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] w-full md:w-auto pr-8 transition-all duration-500 ease-in ${
              navOpen ? "top-20 " : "top-[-490px]"
            }`}
          >
            <div className="flex mr-8 flex-col sm:flex-row">
              {sections.map((link, index) => {
                if (link.path.startsWith("/")) {
                  return (
                    <div key={index} className="md:ml-8 text-white text-xl md:my-0 my-7">
                      <Link
                        to={link.path}
                        className="[text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] text-gray-400 hover:text-white duration-500"
                      >
                        {link.label}
                      </Link>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className=" md:ml-8 text-white text-xl md:my-0 my-7">
                      <Link
                        id={link.label}
                        // onClick={() => {
                        //   scrollID(link.sectionPosition);
                        //   let position = link.sectionPosition;
                        //   return position;
                        // }}
                        to={"/" + link.path}
                        className="[text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] text-gray-400 hover:text-white duration-500"
                      >
                        {link.label}
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
            <Menu as="div" className="relative inline-block text-left">
              <div className="flex justify-center text-center items-center">
                <Menu.Button className=" text-xl bg-transparent flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-transparent md:dark:hover:bg-transparent">
                  Projects
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="from-black/35 flex justify-center to-transparent bg-gradient-to-b py-2 md:absolute right--0 z-10 mt-2 w-44 font-normal origin-top-right divide-gray-600 rounded-md bg-transparent focus:outline-none">
                  <div className="sm:mx-0 mx-4py-2 text-sm">
                    {dropdown.map((link: DirectLink, index) => {
                      return (
                        <Menu.Item key={index}>
                          <a
                            href={link.href}
                            className="[text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] text-lg text-gray-400 block px-4 py-2 dark:hover:text-white"
                          >
                            {link.label}
                          </a>
                        </Menu.Item>
                      );
                    })}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            {links.map((link: DirectLink, index) => {
              return (
                <div key={index} className="md:ml-8  text-white text-xl md:my-0 my-7">
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
