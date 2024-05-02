import { useEffect, useState } from "react"

export const ModalPrompt = () => {
  const [ModalOpen, setModalOpen] = useState(false)
  const [Submited, setSubmited] = useState(false)
  useEffect(() => {
     const timer= setTimeout(() => {
        setModalOpen(true)
      }, 700);
      return () => clearTimeout(timer)
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmited(true)
    e.target.reset()
  }
  console.log('modal',ModalOpen);
  console.log('submit',Submited);
  return (
    <>
      <div className={`flex justify-center items-center}`}>
        <div className={

          `bg-slate-400 w-96 h-80 absolute  transition-all duration-700
        ${ModalOpen ? `top-1/4` : `-top-1/2`}
        ${Submited ? setModalOpen(false) : ``}

        `}>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <label>¿Cuatos participan?</label>
              <input type="number" name='cantidad' />
            <input type="submit" value='Enviar'></input>
          </form>
        </div>
      
      </div>
      </>
  )
}
