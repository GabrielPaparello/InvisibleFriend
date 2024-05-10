import { useState } from "react";
import { Modal } from "./modal";

export const App = () => {
    // CANTIDAD DE JUGADORES
    const [cantidad, setCantidad] = useState()
    




// SETS THE AMOUNT OF PLAYERS
const modalForm = (e) => {
    e.preventDefault();
    setCantidad(parseInt(e.target.elements.cantidad.value));
    e.target.reset();
  };

  return (
      <>
          <div className={`transition-all duration-1000 ease-out ${cantidad ? `absolute   -top-full` : null }`}>
              <Modal modalForm={modalForm} />
              </div>
      </>
  )
}
