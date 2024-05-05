import { useEffect, useState } from "react";
import Playerform from "./playerform";
const Players = ({index, stilo}) => {

  const [MoveDiv, setMoveDiv] = useState(false);
  let [players, setPlayers] = useState([{ nombre: "", email: "", ID:'' }]);
  let [nombre, setNombre] = useState("");
  let [email, setEmail] = useState("");
  let [ID, setID] = useState("");


  const handleSubmit = (e,index) => {
    e.preventDefault();
    const newNombre = e.target.nombre.value;
    const newEmail = e.target.email.value;
    const newID = index
    setMoveDiv(!MoveDiv);
    setNombre((prevNombre) => newNombre);
    setEmail((prevEmail) => newEmail);
    setID((prevID) => newID);
    setPlayers({ nombre: newNombre, email: newEmail,ID:newID });
    e.target.reset();
  };
 
  
  return (
    <>
      <div
        style={{ "--index": index }}
        className={`transition-all duration-300 w-56 h-56 rounded-3xl bg-gray-500 top-1/4 ml-5  ${
          MoveDiv ? `${stilo}` : "absolute"
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