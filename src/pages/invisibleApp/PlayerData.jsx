export const PlayerData = ({ playerData }) => {
  return (
    <>
      <form
        onSubmit={(e) => playerData(e)}
        className="blackModalBg  shadow-black  shadow-md text-center flex flex-col gap-4 justify-start rounded-2xl"
      >
        <h2 className="text-xl -ml-4 mt-5 font-bold tracking-wide font-sans text-slate-50">
          Datos del Participante
        </h2>
        <h2 className="text-md font-sans  font-semibold text-white text-start pl-6 ">
          Nombre
        </h2>
        <textarea
          className="resize-none mx-7 text-sm  h-10 rounded-md p-2 border-2 border-current hover:border-black "
          name="nombre"
          id=""
          cols="20"
          rows="1"
          placeholder="   Inserte su nombre"
          autoComplete="on"
          required
        ></textarea>
        <h2 className="text-md font-sans font-semibold text-white text-start pl-6 ">
          Email
        </h2>
        <textarea
          name="email"
          className="resize-none mx-7 p-2 h-10 rounded-md  border-2  border-slate-500 hover:border-slate-300 text-sm"
          id=""
          cols="20"
          rows="1"
          placeholder="   Inserte su mail"
          autoComplete="on"
        ></textarea>
        <input
          className={`w-28 h-10 ml-28  text-xl mb-9 mt-2  font-semibold   rounded-md violetBg transition-all duration-100 hover:bg-violet-400 hover:scale-110 hover:text-black  cursor-pointer  text-white shadow-md shadow-black`}
          type="submit"
          value="Enviar"
        />
      </form>
    </>
  );
};
