import { useState } from "react";
import { Modal } from "./modal";
import { PlayerData } from "./PlayerData";

export const App = () => {
  // CANTIDAD DE JUGADORES
  const [cantidad, setCantidad] = useState();

  // REFACTORIZAR
  let [player, setPlayer] = useState([]);
  const [ID, setID] = useState(0);
  const [nombre, setNombre] = useState([]);

  //  ESTADO PARA EMPAREJAR
  const [match, setMatch] = useState({});

  // ESTADO DE ACTIVACION DE LOGICA

  // ESTADO DE DESACTIVACION DE LOGICA
  const [disabled, setDisabled] = useState(false);

  // ESTADO PARA CORROBORAR SI YA SALIO UN JUGADOR
  const [salio, setSalio] = useState([]);

  // User_Input Asigna cantidad de jugadores.
  const modalForm = (e) => {
    e.preventDefault();
    setCantidad(parseInt(e.target.elements.cantidad.value));
    e.target.reset();
  };

  // SETS THE PLAYER DATA

  const playerData = (e) => {
    e.preventDefault();
    setID((prevValue) => prevValue + 1);
    const jugador = {
      ID: ID,
      nombre: e.target.nombre.value,
      email: e.target.email.value,
    };
    setPlayer((player) => {
      return [...player, jugador];
    });
    const nombrecin = e.target.nombre.value;
    setNombre((nombre) => [...nombre, nombrecin]);

    e.target.reset();
  };
  // LOGICA DE EMPAREJAMIENTO

  const [assignments, setAssignments] = useState({});

  const apretameC = () => {
    const shuffledPlayers = [...player].sort(() => Math.random() - 0.5);
    const newAssignments = {};

    shuffledPlayers.forEach((element, index) => {
      const matchIndex = (index + 1) % shuffledPlayers.length;
      const match = shuffledPlayers[matchIndex];
      newAssignments[element.nombre] = match.nombre;
    });

    setAssignments(newAssignments);
    setDisabled(true);
  };

  return (
    <>
      {/* Modal Cantidad Request + Animation */}
      <div
        className={`modalContainer absolute w-full  transition-all  ease-out ${
          cantidad ? `   -top-full` : `top-0`
        }`}
      >
        <Modal modalForm={modalForm} />
      </div>

      {/* Formulario de Usar Data */}
      <div
        className={`absolute left-1/3 w-96  top-1/3  duration-1000${
          cantidad ? ` scale-100` : `hidden scale-0`
        }  ${cantidad == player.length ? `hidden scale-0` : ``}`}
      >
        <PlayerData playerData={playerData} />
      </div>

      {/* Render para animacion de amigo invisble logica */}

      <div className="flex flex-col  items-center ">
        <h1 className="mt-2 font-serif text-3xl">Participantes</h1>
        <div className="flex justify-center my-4">
          {nombre.map((jugador, index) => (
            <div
              key={index}
              className="bg-white to-transparent rounded-2xl my-5 mx-2 p-2 max-w-max min-w-16 text-center text-black  shadow-outline shadow-2xl"
            >
              <h2>{jugador}</h2>
            </div>
          ))}
        </div>
        <button
          onClick={apretameC}
          className={`${
            disabled ? `hidden` : `cursor-pointer`
          }  bg-slate-600 hover:scale-105 hover:bg-slate-400 shadow-black shadow-sm text-white max-w-max p-2 rounded-md`}
        >
          Clickee para emparejar
        </button>
        <div
          className={`${
            disabled ? `scale-1` : `scale-0`
          } duration-700 bg-lime-400 max-w-fit min-w-72 text-center  my-5 rounded-xl shadow-xl`}
        >
          <h1 className="font-serif text-2xl font-bold pt-3">Parejas</h1>

          {/* ARREGLAR EL KEY DE MATH RANDOM TO UUID */}
          <div className="my-4">
            {player.map((player) => (
              <div key={player.id} className={`m-4`}>
                <h2 className="font-semibold font-sans text-start">
                  <em>Participante {player.id}</em> {player.nombre} Te toco a{" "}
                  <span className="font-bold bg-yellow-400">{assignments[player.nombre] || "????"}</span>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
