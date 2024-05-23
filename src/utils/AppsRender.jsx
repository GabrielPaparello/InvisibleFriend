import React from "react";
import { Link } from "react-router-dom";

export const AppsRender = ({ SecretSanta }) => {
  return (
    <>
      <h2 className="md:hidden text-white font-serif text-xl tracking-wide text-center">
        Secret Santa
      </h2>
      <div className="rounded-xl    border-gray-950 border-y-2 shadow-md shadow-gray-950 ">
        <img
          className=" h-72 min-w-72 md:h-96 md:min-w-96 scale duration-500 cursor-pointer bg-current rounded-xl"
          src={SecretSanta}
          alt="Meta Img Invisible App"
        />
      </div>
      <h3 className="mx-4 -m-6 md:hidden text-xs greyFont">Toque para hacer zoom</h3>
      <div className="flex flex-col flex-wrap">
        <h2 className="hidden lg:block text-white font-serif text-3xl tracking-wide">
          Amigo Invisible
        </h2>
        <button className="my-6 border-2 text-sm border-current  yellowBg p-1  tracking-wide  font-bold rounded-md  hover:scale-110  hover:text-black  cursor-pointer  text-black shadow-md shadow-gray-950">
          <Link to="/InvisibleFriend">Click para Iniciar</Link>
        </button>
        <h3 className=" greyFont  text-xs text-white -my-4">
          Configure your settings and start
        </h3>
      </div>
    </>
  );
};
