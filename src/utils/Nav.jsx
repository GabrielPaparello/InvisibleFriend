import { useState } from "react";
import "./utils.css";
import { HomeIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { SubNav } from "./SubNav";
export const Nav = () => {
  const [showSubNav, setShowSubNav] = useState(false);
  const handleNavClick = () => {
    setShowSubNav(!showSubNav);
  };
  const nav = [
    {
      link: "Home",
      href: "/",
    },
    {
      link: "Apps",
    },
  ];

  return (
    <>
      <div className="d">
        <nav className="  mx-10 ">
          <ul className="flex flex-row justify-between items-center py-7 font-thin tracking-wider">
            {nav.map((navLinks) => (
              <li
                className="font-sans text-xl font-semibold text-center text-white hover-underline-animation"
                key={navLinks.link}
              >
                {navLinks.link === "Home" && (
                  <HomeIcon className=" yellow h-7 ml-0 inline align-top  " />
                )}
                <a href={navLinks.href}>{navLinks.link}</a>
                {navLinks.link === "Apps" && (
                  <>
                    <ChevronDownIcon
                      onClick={handleNavClick}
                      className=" yellow h-7 inline  "
                    />
                    <SubNav
                      showSubNav={showSubNav}
                      handleNavClick={handleNavClick}
                    />
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
