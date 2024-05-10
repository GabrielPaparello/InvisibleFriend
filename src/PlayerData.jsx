
export const PlayerData = ({playerData}) => {



  return (
      <>
        <form onSubmit={(e) => playerData(e)} className="bg-slate-600 h-80 text-center flex flex-col justify-center">
            <h2 className="mb-10 -ml-4 font-semibold text-xl">Datos del Participante
            </h2>
            <textarea
            className="resize-none mx-3 mb-2 h-8"
            name="nombre"
            id=""
            cols="20"
            rows="1"
        placeholder="Inserte su nombre"
        autoComplete="on"
            ></textarea>
            <textarea
            name="email"
            className="resize-none mx-3 mb-2 h-8"
            id=""
            cols="20"
            rows="1"
        placeholder="Inserte su mail"
         autoComplete="on"
          
            ></textarea>
              <input className={`w-32 ml-32  text-xl font-semibold mt-8 border-2 rounded-md bg-orange-300 hover:bg-orange-600 hover:text-white shadow-2xl cursor-pointer`}type="submit" value="Enviar" />
            
          
              </form>
      </>


)
}
