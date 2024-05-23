import React from "react";
import { Nav } from "../../utils/Nav";
import SecretSanta from "../../assets/SecretSanta.png";
import './index.css'
import { AppsRender } from "../../utils/AppsRender";
export const Home = () => {
  return (
    <>
      <Nav />
          <h1 className="text-2xl my-14 font-sans font-bold text-center text-white ">Elija su aplicacíon</h1>
      <div className=" grid auto-cols-2  justify-items-center md:justify-items-center">
        <div className="flex flex-col items-center md:flex-row  flex-wrap gap-7">
          <AppsRender SecretSanta={SecretSanta} />

        </div>
      </div>
    </>
  );
};
