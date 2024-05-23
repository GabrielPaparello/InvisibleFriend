import { Nav } from "../../utils/Nav";

export const Modal = ({ modalForm }) => {
  return (
    <>
      <Nav />
    <div className="-mt-4 h-screen w-full flex flex-col items-center">
    <div className=" px-10    flex flex-col items-center">
      
        <h1 className="text-2xl font-sans font-bold text-white tracking-wide text-center pt-10 ">
          Amigo Invisible
        </h1>
      </div>
      <div className="m-10 px-6 py-7 blackModalBg rounded-3xl">
        <form
          onSubmit={modalForm}
          className="formSettings flex flex-col justify-center text-center items-center "
          >
            <h2 className="text-lg mt-5   text-nowrap font-sans font-semibold text-white tracking-wider ">
            ¿Cuantos participan?
          </h2>
          <input
            className="mt-4 h-7 text-center w-52 border-2 text-sm shadow-md shadow-black rounded-md "
            type="number"
              name="cantidad"
              required
              placeholder="   Inserte cantidad de jugadores"
            />
            <h3 className="grayText text-xs font-sans font-bold  tracking-wide m-2 mb-5">Inserte cantidad de jugadores</h3>
            <h2 className="text-lg text-start text-nowrap -mb-4 font-sans font-semibold text-white tracking-wider ">Reglas para los jugadores</h2>
            <textarea
            className="mt-7  text-sm  text-start resize-none  border-2 shadow-md shadow-black  rounded-md "
            type="text"
              name="rules"
              placeholder="   Inserte las reglas"
              cols="30"
              rows="2"
            />
            <h3 className="grayText text-xs font-sans font-bold  tracking-wide m-1">Configure parametros</h3>
          
          <input
            type="submit"
              value="Enviar"
              className="mb-2 mt-6 text-sm p-1 min-w-24 h-10 tracking-wide  font-bold   rounded-md violetBg shadow-black transition-all duration-100 hover:scale-110 hover:bg-violet-400 hover:text-black
            text-white shadow-md cursor-pointer "
          ></input>
        </form>
      </div>
      </div>
      
      </>
  );
};
