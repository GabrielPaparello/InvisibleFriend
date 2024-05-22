import React from "react";
import { Link } from "react-router-dom";

export const AppsRender = ({ SecretSanta }) => {
  return (
    <>
      <div className="rounded-xl  border-2   border-gray-950 shadow-xl shadow-gray-950 ">
        <img
          className=" h-96 min-w-96 scale duration-500 cursor-pointer bg-current rounded-xl"
          src={SecretSanta}
          alt="Meta Img Invisible App"
        />
        <h3 className="mx-4 text-md greyFont">Hover to zoom</h3>
      </div>
      <div className="flex flex-col  flex-wrap">
        <h2 className=" text-white font-serif text-3xl tracking-wide">
          Secret Santa
        </h2>
        <h3 className=" greyFont  text-md text-white">
          Configure your settings and start
        </h3>
        <button className="my-10 border-2 border-black  yellowBg p-1 w-2/4 tracking-wide  font-bold rounded-md  hover:scale-110  hover:text-black  cursor-pointer  text-black shadow-md shadow-gray-950">
          <Link to="/InvisibleFriend">
            Access 
          </Link>
        </button>
      </div>
    </>
  );
};
