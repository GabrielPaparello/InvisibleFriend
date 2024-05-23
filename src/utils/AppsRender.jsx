import React from "react";
import { Link } from "react-router-dom";

export const AppsRender = ({ SecretSanta }) => {
  return (
    <>
        <h2 className=" text-white font-serif text-3xl tracking-wide text-center">
          Secret Santa
        </h2>
      <div className="rounded-xl    border-gray-950 shadow-md shadow-gray-950 ">
        <img
          className=" h-96 min-w-96 scale duration-500 cursor-pointer bg-current rounded-xl"
          src={SecretSanta}
          alt="Meta Img Invisible App"
        />
      </div>
        <h3 className="mx-4 -m-6 text-md greyFont">Hover to zoom</h3>
      <div className="flex flex-col  flex-wrap">
        <h2 className="hidden lg:block text-white font-serif text-3xl tracking-wide">
          Secret Santa
        </h2>
        <button className="my-6 border-2 border-current  yellowBg p-1 w-2/4 tracking-wide  font-bold rounded-md  hover:scale-110  hover:text-black  cursor-pointer  text-black shadow-md shadow-gray-950">
          <Link to="/InvisibleFriend">
            Access 
          </Link>
        </button>
        <h3 className=" greyFont text-md text-white -my-5">
          Configure your settings and start
        </h3>
      </div>
    </>
  );
};
