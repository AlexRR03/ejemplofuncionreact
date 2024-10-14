function SaludoHijo(props){
    let ejecutarPadre = props.metodoPadre;
    let idHijo = props.idHijo
    return(
        <div>
            <h1 style={{color:"blue"}}>
                Saludo Hijo
            </h1>
            <button onClick={ ()=> ejecutarPadre("Luke Skywalker"+idHijo) }>Llamar al papa</button>
        </div>
        
    )

}
export default SaludoHijo;