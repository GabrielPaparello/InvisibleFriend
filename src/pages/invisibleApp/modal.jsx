import { Nav } from "../../utils/Nav";

export const Modal = ({ modalForm }) => {
  return (
    <>
      <Nav />
    <div className="bg-black h-screen w-full flex flex-col items-center">
    <div className=" px-10    flex flex-col items-center">
      
        <h1 className="text-3xl font-sans font-bold text-white tracking-wide text-center pt-10 ">
          Secret Santa
        </h1>
      </div>
      <div className="m-10 p-10 blackModalBg rounded-3xl">
        <form
          onSubmit={modalForm}
          className="formSettings flex flex-col justify-center text-center items-center "
            >
            <h2 className="text-2xl  font-sans font-bold text-white tracking-wider ">Reglas para los jugadores</h2>
            <textarea
            className="mt-10  w-56  text-start resize-none  border-2 shadow-md shadow-black  rounded-md "
            type="text"
            name="rules"
            />
            <h3 className="grayText text-sm font-sans font-bold  tracking-wide m-1">Configure parametros</h3>
          <h2 className="text-xl mt-10  font-sans font-bold text-white tracking-wider ">
            ¿Cuantos participan?
          </h2>
          <input
            className="mt-4 text-center w-50 border-2 shadow-md shadow-black  rounded-md "
            type="number"
            name="cantidad"
            />
            <h3 className="grayText text-sm font-sans font-bold  tracking-wide m-2 mb-5">Inserte cantidad de jugadores</h3>
          <input
            type="submit"
            value="Enviar"
            className="mb-2 p-1 w-2/4 tracking-wide  font-bold border-2 border-violet-900 rounded-md violetBg shadow-black transition-all duration-100 hover:scale-110  hover:text-white shadow-md cursor-pointer "
          ></input>
        </form>
      </div>
      </div>
      
      </>
  );
};
