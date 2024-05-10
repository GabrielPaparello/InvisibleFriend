import { useEffect, useState } from "react";
import Players from "./Players";
const PlayerLogicRender = ({ modal, cantidad , }) => {
  const [active,setActive] = useState(false)
 
  const click = () => {
    setActive(true)
    
   
    // Timeout to allow to repress the button for next Player
    const timer = setTimeout(() => {
        setActive(false)
      }, 500)
    return () => clearTimeout(timer);
  }
 
  return (
    <>
      <div className="flex flex-wrap w-full justify-center top-3/4 ">
         <button className={`mt-10 w-20 h-20 bg-slate-600`} onClick={click}>delete232</button>
        {modal === true &&
          Array.from({ length: cantidad }).map((_, index) => (
            <Players active={active} index={index} cantidad={cantidad} stilo={'transform'} key={index} />
          ))}
      </div>
    </>
  );
};

export default PlayerLogicRender;