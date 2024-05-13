
export const RenderPlayers = ({nombre}) => {
  

    return (
      <>
        
        <h1>Jugadores</h1>
        
        {nombre.map((jugador, index) => (
                <div key={index} className="bg-red-900 m-5 max-w-max min-w-28 text-center text-white">
                    <h2>{jugador}</h2>
                </div>
            ))}
        
        </>
  )
}


