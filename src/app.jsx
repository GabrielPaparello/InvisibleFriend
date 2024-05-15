import { useEffect, useState } from "react";
import { Modal } from "./modal";
import { RenderPlayers } from "./RenderPlayers";
import { PlayerData } from "./PlayerData";

export const App = () => {
  // CANTIDAD DE JUGADORES
  const [cantidad, setCantidad] = useState();

  // REFACTORIZAR
  let [player, setPlayer] = useState([]);
  const [ID, setID] = useState(0);
  const [nombre, setNombre] = useState([]);

  //  ESTADO PARA EMPAREJAR
  const [match, setMatch] = useState([]);

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

  const apretameC = () => {

    player.forEach((element) => {
      let match2 = player[Math.floor(Math.random() * cantidad)];
      if (!salio.some((el) => el.nombre !== match2.nombre)) {
        if (element.nombre != match2.nombre) {
          setSalio((prevSalio) => [...prevSalio, match2.nombre]);
          setMatch((prevMatch) => [
            ...prevMatch,
            [element.nombre, match2.nombre],
          ]);
        //   setDisabled(true);
        }
      }
    });
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
        className={`absolute left-1/3 w-96  top-1/3  ${
          cantidad ? `` : `hidden`
        }  ${cantidad == player.length ? `hidden` : ``}`}
      >
        <PlayerData playerData={playerData} />
      </div>

      {/* Render para animacion de amigo invisble logica */}
      <RenderPlayers
        nombre={nombre}
        disabled={disabled}
        apretameC={apretameC}
        match={match}
        cantidad={cantidad}
      />
    </>
  );
};
