


export const Logica = ({cantidad,player}) => {
// CREA ARRAY VACIO DE JUGADORES EN FUNCION DE LA User_INPUT_CANTIDAD
    let JUGADORES = Array(cantidad).fill(undefined)


// MAPEA POR LOS Player_input Y Hace Fill del Array Jugadores CONTENIENDO c/Player-input/Nombre/Email
  
  JUGADORES = JUGADORES.map((_, index) => {
    const playerName = player[index]
    return playerName;
});
console.log(`This is after Mapping`,JUGADORES)
    return (
        <>
        
        
        </>
  )
}


