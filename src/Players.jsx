import { useEffect, useState } from "react";
const Players = (props) => {
  const [MoveDiv, setMoveDiv] = useState(false);
  let [players, setPlayers] = useState([{ nombre: "", email: "" }]);
  let [nombre, setNombre] = useState("");
  let [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newNombre = e.target.nombre.value;
    const newEmail = e.target.email.value;
    setMoveDiv(!MoveDiv);
    setNombre((prevNombre) => newNombre);
    setEmail((prevEmail) => newEmail);
    setPlayers({ nombre: newNombre, email: newEmail });
    e.target.reset();
  };
  
  return (
    <>
      <div
        style={{ "--index": props.index }}
        className={`transition-all duration-300 w-56 h-56 rounded-3xl bg-gray-500 top-1/4 ml-5  ${
          MoveDiv ? "transform " : "absolute"
        } `}
      >{MoveDiv ? <h2 className="inline-block my-2 text-center">{nombre}</h2> : null}
        <form onSubmit={handleSubmit} className="text-center flex flex-col">
          {!MoveDiv && (
            <>
          <h2 className="inline-block my-2 -ml-4">
            Participante {props.index}
          </h2>
              <textarea
                className="resize-none m-2"
                name="nombre"
                id=""
                cols="20"
                rows="1"
                placeholder="Inserte su nombre"
              ></textarea>
              <textarea
                name="email"
                className="resize-none m-2"
                id=""
                cols="20"
                rows="1"
                placeholder="Inserte su mail"
              ></textarea>
              <input type="submit" value="Enviar" />
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Players;
