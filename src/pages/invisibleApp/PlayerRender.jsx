const PlayerRender = ({
  player,
  assignments,
  nombre,
  disabled,
  apretameC,
  text,
  color,
  cantidad,
}) => {
  return (
    <>
      {/* Render para animacion de amigo invisble  */}

      <div className="flex flex-col  items-center ">
        <h1
          className={`${
            nombre[0] == undefined ? `hidden` : ``
          } mt-5 font-serif text-2xl tracking-wide text-white font-bold`}
        >
          Participantes
        </h1>
        <div className="flex justify-center flex-wrap my-2">
          {nombre.map((jugador, index) => (
            <div
              key={index}
              className={`${
                disabled ? color : color
              }  rounded-md my-5 mx-2 p-2 font-sans font-semibold text-lg max-w-max min-w-16  min-h-12 text-center text-black  shadow-outline shadow-2xl`}
            >
              <h2>{jugador}</h2>
            </div>
          ))}
        </div>
        <button
          onClick={apretameC}
          className={`${nombre[0] == undefined ? `hidden` : ``}${
            disabled ? `hidden` : ``
          }  violetBg text-lg m-2 p-2 font-sans font-semibold hover:scale-110 hover:bg-violet-400 shadow-black shadow-md text-white max-w-max rounded-md hover:text-violet-900`}
        >
          {text}
        </button>
        <div
          className={`${
            disabled ? ` paired : ` : `not-paired`
          } absolute duration-700 blackModalBg max-w-fit min-w-72 text-center  my-3 rounded-xl shadow-xl`}
        >
          <h1 className="font-serif text-2xl font-bold pt-3 text-white">
            Amigo Invisible
          </h1>

          {/* ARREGLAR EL KEY DE MATH RANDOM TO UUID */}

          <div className=" p-2">
                <h2 className="font-semibold pb-2 text-lg font-sans text-white text-start">
              Mails enviados Correctamente!</h2>
            <p className="font-sans font-semibold text-white text-start">Revisen en el mail ingresado la informacion de las reglas acordadas y a quien te toco como amigo invisible!.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerRender;
