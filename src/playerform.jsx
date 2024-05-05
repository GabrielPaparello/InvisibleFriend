

const Playerform = ({handleSubmit , index}) => {
  return (
   <>
        <form onSubmit={handleSubmit} className="text-center flex flex-col">
          <h2 className="inline-block my-2 -ml-4">
            Participante {index}
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
            
          
        </form>
      </>
  )
}

export default Playerform