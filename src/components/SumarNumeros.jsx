import blackGoku from './../assets/images/goku-black.jpg'
import'./SumarNumeros.css'

function SumarNumeros(props) {
    const realizrSuma = () =>{
        let suma =parseInt(  props.num1) + parseInt(props.num2) ;
        console.log("Suma = "+suma);
    }

    return(
        <div>
            <button onClick={()=>realizrSuma()}>{props.num1}+{props.num2}</button>
            <img src={blackGoku} alt="Foto de Goku black" />
        </div>
    )
}

export default SumarNumeros;