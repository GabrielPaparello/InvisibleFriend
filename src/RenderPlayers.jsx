
export const RenderPlayers = ({nombre,apretameC,match,disabled}) => {
  

    return (
      <>
          {/* Logica posible , Refactor THIS */}
        
        <h1>Jugadores</h1>
        
        {nombre.map((jugador, index) => (
                <div key={index} className="bg-red-900 m-5 max-w-max min-w-28 text-center text-white">
                    <h2>{jugador}</h2>
                </div>
        ))}
        
        
        <button  onClick={apretameC} className={`${disabled ? `hidden` : `cursor-pointer`}  bg-slate-600 text-white max-w-max p-2 ml-5`}>Apretame</button>

          
        
          <div className={`${disabled ? `` : `hidden`} bg-amber-400 max-w-fit min-w-72 text-center absolute left-28`}>
            <h1>Pareja</h1>
          <div>
            {/* ARREGLAR EL KEY DE MATH RANDOM TO UUID */}
            {/* {match.map(elementos=> (
            <div key={Math.random+2}>
                {elementos.map(elemento => (
                    <div key={Math.random}>{elemento}</div>

                    
        ))}
    </div>
))} */}
          </div>
          </div>
        
    
        </>
  )
}


