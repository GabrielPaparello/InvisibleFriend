import { Nav } from "../../utils/Nav";

export const Modal = ({ modalForm }) => {
  return (
    <>
      <Nav />
    <div className="bg-slate-600 h-screen w-full flex flex-col items-center">
      <div>
        <h1 className="text-3xl font-sans font-bold text-white tracking-wide text-center pt-10 ">
          Invisible Friend
        </h1>
      </div>
      <div className="mt-5 ">
        <form
          onSubmit={modalForm}
          className="formSettings flex flex-col justify-center text-center items-center"
        >
          <h2 className="text-xl   font-sans font-bold text-white tracking-wide ">
            ¿Cuantos participan?
          </h2>
          <input
            className="m-4 text-center  border-2 shadow-md shadow-black  rounded-md "
            type="number"
            name="cantidad"
          />
          <input
            type="submit"
            value="Enviar"
            className="mb-2 p-1 w-2/4 tracking-wide  font-bold border-2 rounded-md bg-orange-300 shadow-black transition-all duration-100 hover:bg-orange-500 hover:scale-110 hover:border-orange-500 hover:text-white shadow-md cursor-pointer "
          ></input>
        </form>
      </div>
      </div>
      </>
  );
};
