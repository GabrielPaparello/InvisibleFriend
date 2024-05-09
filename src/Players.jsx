import { useEffect, useState } from "react";
import Playerform from "./playerform";
import LogicComponent from "../logic";

const Players = ({active,index, stilo,initial,cantidad}) => {
  const [MoveDiv, setMoveDiv] = useState(false);
  let[player,setPlayer] = useState([])
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [ID, setID] = useState("");

  const handleSubmit = (e,index) => {
    e.preventDefault();
    setMoveDiv(!MoveDiv);
    setNombre(e.target.nombre.value);
    setEmail(e.target.email.value);
    setID(index);
    const jugador = { ID: index, nombre:e.target.nombre.value, email:e.target.email.value }
    console.log(jugador)
    setPlayer((player) => {
      return [...player, jugador]
      
    })
    e.target.reset();

  };
  
  useEffect(() => {
    // Call back to avoid upping the state and only activated when clicked.
    console.log(active)
    if (active === true) {
      const random = Math.floor(Math.random() * cantidad)
      const clicked = () => {
        const filteredPlayers = player.filter((player) => player.nombre === player.nombre[random]);
        console.log('filtrado', filteredPlayers);
      }
      clicked();
    } else {return }
  },[active])
  return (
    <>
      <LogicComponent player={player} cantidad={cantidad} />

      <div
        style={{ "--index": index }}
        id={index+1}
        className={`transition-all duration-300 w-56 h-56 rounded-3xl bg-gray-500 top-1/4 ml-5  ${
          MoveDiv ? `${stilo}` : `absolute`
        } `}
      >
        {MoveDiv ? (
          <h2 className="inline-block my-2 text-center">{nombre}</h2>
        ) : null}

        {!MoveDiv && (
          <>
            <Playerform handleSubmit={handleSubmit} index={index} />
          </>
        )}
      </div>
    </>
  );
};

export default Players;
