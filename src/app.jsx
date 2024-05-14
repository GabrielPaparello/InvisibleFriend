import {  useState } from "react";
import { Modal } from "./modal";
import {  RenderPlayers } from "./RenderPlayers";
import { PlayerData } from "./PlayerData";


export const App = () => {
    // CANTIDAD DE JUGADORES
    const [cantidad, setCantidad] = useState()
    
    // REFACTORIZAR
    let [player, setPlayer] = useState([])
    const [ID, setID] = useState(0);
    const [nombre, setNombre] = useState([])

    //  ESTADO PARA EMPAREJAR 
    const [match,setMatch] = useState([])

    // ESTADO DE ACTIVACION DE LOGICA

    // ESTADO DE DESACTIVACION DE LOGICA
    const [disabled, setDisabled] = useState(false)
    
    // ESTADO PARA CORROBORAR SI YA SALIO UN JUGADOR
    const [isIn,setIsIn]=useState([])

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
        const jugador = { ID: ID, nombre: e.target.nombre.value, email: e.target.email.value }
        setPlayer((player) => { return [...player, jugador] })
        const nombrecin = e.target.nombre.value
        setNombre((nombre) => [...nombre, nombrecin])

        e.target.reset();
    }
    // LOGICA DE EMPAREJAMIENTO
    
    const apretameC = () => {
// FILTER???? filter = element != elementparafiltrar ?
        player.forEach(element => {
            let match2 = ('random', player[Math.floor(Math.random() * cantidad)])
            let find = isIn.includes(match2,0)
            if (match2 != element && find == false) {
                setMatch((prevMatch) => [...prevMatch, [element.nombre, match2.nombre]])
                setIsIn((prevIn)=>[...prevIn,match2.nombre])  
                setDisabled(true)
                }
            
            
        });
        
        
            
        
        
}
  return (
      <>
          {/* Modal Cantidad Request + Animation */}
          <div className={`modalContainer absolute w-full  transition-all  ease-out ${cantidad ? `   -top-full` : `top-0` }`}>
              <Modal modalForm={modalForm} />
          </div>

          {/* Formulario de Usar Data */}
            <div className={`absolute left-1/3 w-96  top-1/3  ${cantidad ? `` : `hidden` }  ${cantidad == player.length ? `hidden` : ``}`}>
              <PlayerData playerData={playerData} />  
          </div>
          
          {/* Render para animacion de amigo invisble logica */}
          <RenderPlayers nombre={nombre} disabled={disabled} apretameC={apretameC} match={match} cantidad={cantidad} />

          
      </>
  )
}
