import { useState } from "react"

function Contador() {
    //DECLARA UNA VARIABLE TIPO STATE
    //EN LA CREACION INDICAMOS EL TIPO DE DATO
    const [numero, SetNumero] = useState(0);
    const sumarContador = ()=>{

        SetNumero(numero+1);
    }

    return(
        <div style={{color:"blure"}}>
            <h1>Contador: Ejemplo de uso del Hook useState</h1>
            <h2 style={{color:"goldenrod"}}>Contador: {numero}</h2>
            <button onClick={()=>sumarContador()}>Sumar el contador</button>
            <button onClick={()=>{
                numero <= 0 ? SetNumero(numero-0): SetNumero(numero-1)
            }}>
                Restar contador
            </button>
        </div>
    )
}
export default Contador;