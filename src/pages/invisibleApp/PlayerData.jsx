export const PlayerData = ({ playerData }) => {
  return (
    <>
      <form
        onSubmit={(e) => playerData(e)}
        className="blackModalBg heightModal shadow-black shadow-md text-center flex flex-col justify-around rounded-2xl"
      >
        <h2 className="text-3xl -ml-4  font-bold tracking-wide font-sans text-slate-50">
          Datos del Participante
        </h2>
        <h2 className="text-2xl font-sans -mb-12 font-semibold text-white text-start pl-6 ">
          Nombre
        </h2>
        <textarea
          className="resize-none mx-7 text-2xl -mb-8  h-14 rounded-md p-2 border-2 border-current hover:border-black "
          name="nombre"
          id=""
          cols="20"
          rows="1"
          placeholder="   Inserte su nombre"
          autoComplete="on"
          required
        ></textarea>
        <h2 className="text-2xl font-sans font-semibold text-white text-start pl-6 pb-1 -mb-12">
          Email
        </h2>
        <textarea
          name="email"
          className="resize-none mx-7 p-2 -mb-6 h-14 rounded-md  border-2  border-slate-500 hover:border-slate-300 text-2xl"
          id=""
          cols="20"
          rows="1"
          placeholder="   Inserte su mail"
          autoComplete="on"
        ></textarea>
        <input
          className={`w-32 h-12 ml-32 mb-4 text-2xl font-semibold mt-8  rounded-md violetBg transition-all duration-100 hover:bg-violet-400 hover:scale-110 hover:text-black  cursor-pointer  text-white shadow-md shadow-black`}
          type="submit"
          value="Enviar"
        />
      </form>
    </>
  );
};
