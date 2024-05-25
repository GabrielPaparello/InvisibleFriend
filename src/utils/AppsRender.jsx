import { Link } from "react-router-dom";

export const AppsRender = ({ AppImg, AppName, AppLink, AppDescription }) => {
  return (
    <>
      <h2 className="md:hidden text-white font-serif text-xl tracking-wide text-center">
        {AppName}
      </h2>
      <div className="rounded-xl    border-gray-950 border-y-2 shadow-md shadow-gray-950 ">
        <img
          className=" h-72 min-w-72 md:h-60 md:max-w-60 scale duration-500 cursor-pointer bg-current rounded-xl"
          src={AppImg}
          alt="Meta Img Invisible App"
        />
      </div>
      <h3 className="mx-4 -m-6 md:hidden text-xs greyFont">
        Toque para hacer zoom
      </h3>
      <div className="flex flex-col flex-wrap md:max-w-40 md:mr-10">
        <h2 className="hidden lg:block text-white font-serif text-3xl tracking-wide">
          {AppName}
        </h2>
        <h2 className="hidden lg:block text-white font-serif text-sm md:mt-6 md:w-52 text-wrap  tracking-wide">
          {AppDescription}
        </h2>
        <button className="my-6 border-2 text-sm border-current  yellowBg p-1  tracking-wide  font-bold rounded-md duration-300  hover:scale-125  hover:text-black  cursor-pointer  text-black shadow-md shadow-gray-950">
          <Link to={AppLink}>Click para Iniciar</Link>
        </button>
        <h3 className=" greyFont  text-xs text-white -my-4 md:my-2">
          Configure su aplicacíon para jugar
        </h3>
      </div>
    </>
  );
};
