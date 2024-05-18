import React from "react";
import "./utils.css";
export const Nav = () => {
  const nav = [
    {
      link: "Home",
      href: "/",
    },
    {
      link: "Apps",
      href: "#apps",
    },
    {
      link: "About",
      href: "#about",
    },
    {
      link: "Contact",
      href: "#contacts",
    },
  ];

  return (
    <>
      <nav className="flex  justify-center shadow-sm shadow-current bg-gray-800">
        <ul className="flex flex-row space-x-11 my-4 font-thin tracking-wider">
          {nav.map((navLinks) => (
            <li
              className="font-serif text-2xl text-center text-white hover-underline-animation"
              key={navLinks.link}
            >
              <a href={navLinks.href}>{navLinks.link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
