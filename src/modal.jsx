
export const Modal = ({modalForm}) => {
    return (
        <div className='bg-slate-600'>
          <form onSubmit={modalForm} className="flex flex-col items-center pt-4">
            <h2 className="text-lg font-medium">¿Cuantos participan?</h2>
            <input className="m-4 text-center cursor-pointer " type="number" name="cantidad" />
            <input type="submit" value="Enviar" className="mb-2 p-1 font-bold border-2 rounded-md bg-orange-300 hover:bg-orange-600 hover:text-white shadow-2xl cursor-pointer"></input>
          </form>
    </div>
    
  )
}
