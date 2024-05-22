import React from "react";
import { Nav } from "../../utils/Nav";
import SecretSanta from "../../assets/SecretSanta.png";
import './index.css'
import { AppsRender } from "../../utils/AppsRender";
export const Home = () => {
  return (
    <>
      <Nav />
          <h1 className="text-3xl my-14 font-sans font-bold text-center text-white ">Pick & chose your app</h1>
      <div className=" grid auto-cols-auto  justify-items-start">
        <div className="flex flex-row items-end">
          <AppsRender SecretSanta={SecretSanta} />

        </div>
      </div>
    </>
  );
};
