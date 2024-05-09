import { useEffect } from "react";

const LogicComponent = ({ player,cantidad ,isDone,clicked}) => {
    //     [playera,playerb,playerc,playerd]
    // recorre la lista y empieza por el primer indice y la compara con su mismo indice 1 empareja con indice[random]
//         [playera] saca a player b
//         nuevodeplayers que no salieron aun [] = [player a,playerc,playerd]
//         recorre la lista con indice 2 y empareja comparando ocn la lista nueva de players que no salieron aun[]
    //          
    // 

  return (
      <>
               

          {/* {isDone ===true? <h1>true</h1>:<h1>false</h1>} */}
          {player.map((item, i) => (
          
        <li key={i} className='text-'>
                  {/* Nombre: {item.nombre}, Email: {item.email}, ID: {item.ID} */}
              </li>
              
          ))}
    </>
  );
};

export default LogicComponent;
