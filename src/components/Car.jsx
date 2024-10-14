import { useState } from "react";


function Car(props) {
    //CREAR UNA VARIABLE QUE PERMITA VISUALIZAR
    //EL ESTADO DEL COCHE
    const [estado, setEstado] = useState(false);
    //UNA VARIABLE PARA VISUALIZAR LA VELOCIDAD ACTUAL DEL COCHE
    const [velocidad, setVelocidad] = useState(0);
    //CREAR OBJETO CUYAS PROPIEDADES VIENEN DEFINIDAS
    //LA ETIQUETA PARENT
    let coche = {
        marca: props.marca,
        modelo: props.modelo,
        velocidadMax: parseInt(props.velocidadmax),
        aceleracion: parseInt(props.aceleracion)
    }
    //INCLUIR METODO PARA COMPROBAR EL ESTADO DEL COCHE
    //DEPENDIENDO DE ESE ESTADO DEVOLVEREMOS EL CODIGO HTML
    //CORRESPONDIENTE

    const comprobarEstado = () => {
        if (estado == true) {
            return (<h1 style={{ color: "green" }}>Coche arrancado</h1>)
        } else {
            return (<h1 style={{ color: "red" }}>Coche detenido</h1>)
        }
    }

    //METODO PARA CAMBIAR LA ACELERACION DEL COCHE
    const acelerarCoche = () => {
        if (estado == false) {
            alert("El coche esta detenido");
            setVelocidad(0);
        } else {
            if (velocidad >= coche.velocidadMax) {
                setVelocidad(coche.velocidadMax);
            } else {
                setVelocidad(velocidad + coche.aceleracion);
            }
        }
    }
    return (
        <div>
            <h1 style={{ color: "blue" }}>
                Coche: {coche.marca}, {coche.modelo}
            </h1>
            <h2 style={{color:"fuchsia"}}>
                Velocidad actual : {velocidad} km/h
            </h2>
            <div>
                {comprobarEstado ()}
                <button onClick={()=>{
                    //MODIFICAR EL ESTADO 
                    setEstado(!estado);
                }}>Arrancar/Detener
                </button>
                <button onClick={()=>{
                    acelerarCoche()
                }}>
                    Acelerar coche
                </button>
                <button onClick={()=>{
                    if (estado == true) {
                        velocidad <= 0 ? setVelocidad(0): setVelocidad(velocidad - 20)    
                    }
                    else{
                        alert("El coche esta Detenido" )
                    }
                    
                }}>
                    Frenar
                </button>
            </div>
        </div>
    )


}

export default Car;