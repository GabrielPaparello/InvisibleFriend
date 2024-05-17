import { useEffect, useState } from "react";
import { Modal } from "./modal";
import { PlayerData } from "./PlayerData";
import PlayerRender from "./PlayerRender";

export const App = () => {
  // CANTIDAD DE JUGADORES
  const [cantidad, setCantidad] = useState();

  // REFACTORIZAR
  let [player, setPlayer] = useState([]);
  const [ID, setID] = useState(0);
  const [nombre, setNombre] = useState([]);

 

  // ESTADO DE DESACTIVACION DE LOGICA
  const [disabled, setDisabled] = useState(false);

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

  // LOGICA PARA ANIMACION DE COLORES
  const [text, setText] = useState("Click para emparejar");
  const [color, setColor] = useState("bg-slate-600");
  const colors = ["bg-red-500", "bg-blue-500"]; // Define an array of colors
  let index = 0; // Initialize an index variable to keep track of the current color index
  const [stop, setStop] = useState(false); // State to control stopping the color change
// simula animacion de emparejamiento
  useEffect(() => {
    const interval = setInterval(() => {
      if (stop) {
        setColor(colors[index]); // Set the color based on the current index
        index = (index + 1) % colors.length; // Update the index for the next color
      }
    }, 500);

    return () => clearInterval(interval); // Clean up the interval
  }, [stop]);

  // inicia emparejamiento y animacion
  const apretameC = () => {
    const shuffledPlayers = [...player].sort(() => Math.random() - 0.5);
    const newAssignments = {};

    shuffledPlayers.forEach((element, index) => {
      const matchIndex = (index + 1) % shuffledPlayers.length;
      const match = shuffledPlayers[matchIndex];
      newAssignments[element.nombre] = match.nombre;
    });
    setText("Emparejando...");
    setAssignments(newAssignments);
    setStop(true);

    const time = setTimeout(() => {
      setDisabled(true);
      setStop(false);
    }, 5000);
    return () => clearTimeout(time);
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

      {/* Render para animacion de amigo invisble  */}
      <PlayerRender
        player={player}
        assignments={assignments}
        nombre={nombre}
        disabled={disabled}
        apretameC={apretameC}
        text={text}
        color={color}
      />
    </>
  );
};
