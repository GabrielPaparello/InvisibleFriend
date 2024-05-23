import React from "react";

const PlayerRender = ({
  player,
  assignments,
  nombre,
  disabled,
  apretameC,
  text,
  color,
}) => {
  return (
    <>
      {/* Render para animacion de amigo invisble  */}

      <div className="flex flex-col  items-center ">
        <h1 className="mt-10 font-serif text-3xl">Participantes</h1>
        <div className="flex justify-center my-4">
          {nombre.map((jugador, index) => (
            <div
              key={index}
              className={`${
                disabled ? color : color
              }  rounded-2xl my-5 mx-2 p-2 max-w-max min-w-16 text-center text-white  shadow-outline shadow-2xl`}
            >
              <h2>{jugador}</h2>
            </div>
          ))}
        </div>
        <button
          onClick={apretameC}
          className={`${
            disabled ? `hidden` : `block`
          }  bg-slate-600 hover:scale-105 hover:bg-slate-400 shadow-black shadow-sm text-white max-w-max p-2 rounded-md`}
        >
          {text}
        </button>
        <div
          className={`${
            disabled ? ` paired : ` : `not-paired`
          } absolute duration-700 bg-lime-400 max-w-fit min-w-72 text-center  my-3 rounded-xl shadow-xl`}
        >
          <h1 className="font-serif text-2xl font-bold pt-3">Parejas</h1>

          {/* ARREGLAR EL KEY DE MATH RANDOM TO UUID */}

          <div className="my-4">
            {player.map((player) => (
              <div key={player.id} className={`m-4`}>
                <h2 className="font-semibold font-sans text-start">
                  <em>Participante {player.id}</em> <span className="font-bold bg-emerald-500">{player.nombre}</span> Te toco a{" "}
                  <span className="font-bold bg-yellow-400">
                    {assignments[player.nombre] || "????"}
                  </span>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerRender;
