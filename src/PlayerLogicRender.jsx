import Players from "./Players"
const PlayerLogicRender = (props) => {
    
  return (
    <>
     
          {props.modal === true && (  
              Array.from({ length: props.cantidad }).map((_, index) => (
                 
                      <Players  key={index}/>
               
        ))

        )}
       
      </>
  )
}

export default PlayerLogicRender