import Players from "./Players"
const PlayerLogicRender = (props) => {
    
  return (
    <>
     <div className="flex flex-wrap w-full justify-center top-3/4 ">
          {props.modal === true && (  
              Array.from({ length: props.cantidad }).map((_, index) => (
                    
                      <Players index={index} key={index}/>
               
        ))

        )}
       </div>
      </>
  )
}

export default PlayerLogicRender