import { useState } from "react"
function Matematicas(props){
    let ejecutarPapa = props.triple
    let num = props.num1
    const doble= () =>{
        let numDoble = parseInt(num)*2
        console.log(numDoble)
        //console.log(numDoble)
        
    }
    return(
        <div>
            <button  onClick={()=>doble()} >Doble del numero</button>
            <button onClick={()=>ejecutarPapa(5)}>Triple del numero</button>
        </div>
    )
}
export default Matematicas;