import { useState } from "react";
const Players = () => {
    const [MoveDiv, setMoveDiv] = useState({ left: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
      const value = Math.floor(Math.random() * 900);
      setMoveDiv({ left: value, top: "55%" ,transform: 'scale(.4)'});
     
  };

  return (
    <>
        <div className="flex justify-center">
          <div
            style={MoveDiv}
            className={`w-56 h-56 rounded-3xl bg-gray-500 absolute  top-1/4`}
          >
            <form onSubmit={handleSubmit} className="text-center flex flex-col">
              <label className="inline-block my-2">Participante 1</label>
              <textarea
                className="resize-none m-2"
                name=""
                id=""
                cols="20"
                rows="1"
                placeholder="Inserte su nombre"
              ></textarea>
              <textarea
                className="resize-none m-2"
                id=""
                cols="20"
                rows="1"
                placeholder="Inserte su mail"
              ></textarea>
              <input type="submit" value="Enviar" />
            </form>
          </div>
        </div>
     
    </>
  );
};

export default Players;
