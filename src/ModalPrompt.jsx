import { createContext, useEffect, useState } from "react";

import PlayerLogicRender from "./PlayerLogicRender";
export const CantidadContext = createContext();

export const ModalPrompt = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  const [Submited, setSubmited] = useState(false);
  const [Cantidad, setCantidad] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const cantidadValue = e.target.elements.cantidad.value;
    setCantidad(cantidadValue);
    setSubmited(true);
    e.target.reset();
  };

  return (
    <>
      <div className={`flex justify-center items-center}`}>
        <div
          className={`bg-slate-400 flex flex-col justify-center w-96 h-80 absolute  transition-all duration-700
        ${ModalOpen ? `top-1/4` : `-top-1/2`}
        ${Submited ? `hidden` : ``}

        `}
        >
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <h2 className="text-lg font-medium">¿Cuatos participan?</h2>
            <input className="m-4" type="number" name="cantidad" />
            <input type="submit" value="Enviar"></input>
          </form>
        </div>
      </div>
      <PlayerLogicRender cantidad={Cantidad} modal={Submited} />
    </>
  );
};
