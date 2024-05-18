export const PlayerData = ({ playerData }) => {
  return (
    <>
      <form
        onSubmit={(e) => playerData(e)}
        className="bg-slate-600 h-80 shadow-black shadow-md text-center flex flex-col justify-center "
      >
        <h2 className="mb-10 -ml-4 font-semibold text-2xl font-serif text-slate-50">
          Datos del Participante
        </h2>
        <textarea
          className="resize-none mx-5 mb-4 h-8 rounded-md bg-slate-600 border-2  border-slate-500 hover:border-slate-300 text-center text-white"
          name="nombre"
          id=""
          cols="20"
          rows="1"
          placeholder="   Inserte su nombre"
          autoComplete="on"
        ></textarea>
        <textarea
          name="email"
          className="resize-none mx-5 mb-2 h-8 rounded-md bg-slate-600 border-2  border-slate-500 hover:border-slate-300 text-center text-white"
          id=""
          cols="20"
          rows="1"
          placeholder="   Inserte su mail"
          autoComplete="on"
        ></textarea>
        <input
          className={`w-32 ml-32  text-xl font-semibold mt-8 border-2 rounded-md bg-orange-500 transition-all duration-100 hover:bg-orange-400 hover:scale-110 hover:border-orange-400 hover:text-white  cursor-pointer  text-white shadow-md shadow-black`}
          type="submit"
          value="Enviar"
        />
      </form>
    </>
  );
};
