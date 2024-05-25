import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons/faSquarePhone";

export const Footer = () => {
  const footer = [
    {
      link: "About me",
      href: "#",
      icon: "about",
    },
    {
      link: "Privacy",
      href: "#",
      icon: "privacy",
    },
    {
      link: "Contact",
      href: "#",
      icon: "contact",
    },
  ];

  const footer2 = [
    {
      link: "Git hub",
      href: "#",
      icon: "git",
    },
    {
      link: "Linked in",
      href: "#",
      icon: "link",
    },
    {
      link: "Apps@contract@mail.com",
      href: "#",
      icon: "mail",
    },
  ];
  return (
    <>
      <div className="d pt-1">
        <h3 className="text-center text-sm   footerGray ">Information</h3>
        <div className="flex list-none flex-row justify-around mt-4 ">
          <div className="flex flex-col items-start mt-4 text-xs grayText">
            {footer.map((footerLinks) => (
              <li key={footerLinks.link}>
                {footerLinks.icon === "about" && (
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                )}
                {footerLinks.icon === "privacy" && (
                  <FontAwesomeIcon icon={faCircleInfo} className="mr-2" />
                )}
                {footerLinks.icon === "contact" && (
                  <FontAwesomeIcon icon={faSquarePhone} className="mr-2" />
                )}
                <Link to={footerLinks.href}>{footerLinks.link}</Link>{" "}
              </li>
            ))}
          </div>

          <div className="flex flex-col items-start mt-4 text-xs grayText ">
            {footer2.map((footerLinks) => (
              <li key={footerLinks.link}>
                {footerLinks.icon === "link" && (
                  <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                )}
                {footerLinks.icon === "git" && (
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                )}
                {footerLinks.icon === "mail" && (
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                )}
                <Link to={footerLinks.href}>{footerLinks.link}</Link>{" "}
              </li>
            ))}
          </div>
        </div>
        <h3 className="text-center mt-5 text-sm footerGray ">
          Copyright {new Date().getFullYear()}
        </h3>
      </div>
    </>
  );
};
