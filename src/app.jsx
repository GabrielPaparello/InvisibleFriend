import { useState } from "react";
import { Modal } from "./modal";
import { Logica } from "./Logica";
import { PlayerData } from "./PlayerData";


export const App = () => {
    // CANTIDAD DE JUGADORES
    const [cantidad, setCantidad] = useState()
    
    // REFACTORIZAR
  let[player,setPlayer] = useState([])
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [ID, setID] = useState(0);



// SETS THE AMOUNT OF PLAYERS
const modalForm = (e) => {
    e.preventDefault();
    setCantidad(parseInt(e.target.elements.cantidad.value));
    e.target.reset();
    };
    

// SETS THE PLAYER DATA
    const playerData = (e) => {
    e.preventDefault();
    setNombre(e.target.nombre.value);
    setEmail(e.target.email.value);
    setID( (prevValue) => prevValue ++);
    const jugador = { ID: ID, nombre:e.target.nombre.value, email:e.target.email.value }
    setPlayer((player) => {return [...player, jugador]})
      
    e.target.reset();
    }
    
    

  return (
      <>
          <div className={`modalContainer absolute w-full transition-all  ease-out ${cantidad ? `   -top-full` : `top-0` }`}>
              <Modal modalForm={modalForm} />
          </div>

          <Logica cantidad={cantidad} player={player} />

            <div className={`absolute left-1/3 w-96  top-1/3  ${cantidad ? `` : `hidden` }  ${cantidad == player.length ? `hidden` : ``}`}>
              <PlayerData playerData={playerData} />  
            </div>
      </>
  )
}
