import SaludoHijo from "./SaludoHijo";
function SaludoPadre() {
    //NECESITAMOS UN METODO EN EL PADRE PARA QUE EL HIJO PUEDA EJECUTARLO
    const metodoPadre = (nombre)=>{
        console.log("Yo suy tu padre," +nombre);
    }

    return(
        <div>
            <h1 style={{color:"red"}}>
                Saludo Padre
            </h1>
            {/*Desde props enviamos el metodoPadre para que el hijo pueda realizar la llamada */}

            <SaludoHijo idHijo="1" metodoPadre={metodoPadre} />
            <SaludoHijo idHijo="2" metodoPadre={metodoPadre} />
            <SaludoHijo idHijo="3" metodoPadre={metodoPadre} />

        </div>
    )
}
export default SaludoPadre;