import {
  CalculatorIcon,
  UserGroupIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export const SubNav = ({ showSubNav, handleNavClick }) => {
  return (
    <>
      <div
        className={`absolute rounded-2xl p-5 m-2 duration-500  ${
          showSubNav ? "-left-20 z-10   blackModalBg " : "left-64 scale-0"
        }`}
      >
        <nav className="">
          <XMarkIcon
            onClick={handleNavClick}
            className=" h-7 mb-5 -mx-3 -mt-3 yellow"
          />
          <ul className="text-nowrap text-start w-auto h-96 flex flex-col gap-3 font-sans  font-semibold  text-white text-lg">
            <li className="">
              <Link to="/InvisibleFriend">Secret Santa</Link>
              <UserGroupIcon className="mx-2 h-7 inline align-top yellow" />
              <div className="w-36  mt-3 border-gray-950  border-2"></div>
            </li>
            <li>
              <Link to="/NumberAsigner">Asignador</Link>

              <UserIcon className="mx-2 h-7 inline align-top yellow" />
              <div className="w-36  mt-3 border-gray-950  border-2"></div>
            </li>
            <li>
              <a>Secret 3</a>
              <CalculatorIcon className="mx-2 h-7 inline align-top yellow" />
              <div className="w-36  mt-3 border-gray-950  border-2"></div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
