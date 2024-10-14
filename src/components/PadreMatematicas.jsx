import Matematicas from "./Matematicas";
function PadreMatematicas(props){
    const triple = (num2) =>{
        let numTriple =parseInt(num2)*3;
        console.log(numTriple)
    }
    return(
        <div>
            <Matematicas num1="5" triple={triple} />
        </div>
    )
}

export default PadreMatematicas;