import blackGoku from './../assets/images/goku-black.jpg'
import'./SumarNumeros.css'

function SumarNumeros() {
    const realizrSuma = (num1, num2) =>{
        let suma = num1+num2;
        console.log("Suma = "+suma);
    }

    return(
        <div>
            <button onClick={()=>realizrSuma(5,6)}>5 + 6</button>
            <button onClick={()=>realizrSuma(2,7)}>2 + 7</button>
            <img src={blackGoku} alt="Foto de Goku black" />
        </div>
    )
}

export default SumarNumeros;