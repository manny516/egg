import { useContext } from "react";
import EggProvider from "../utilz/EggProvider";
import { CapFirstLetter } from "../utilz/CapFirstLetter";
export  const EggsResult = () =>{
    const {counteggs,maturity} = useContext(EggProvider); 
    return(
        <h1 className=' text-neutral-700 text-5xl border-b-2 border-solid p-4'> {CapFirstLetter(maturity)} egg count is {counteggs  < 0 ? 0 : (counteggs > 0 ? counteggs : " ")}</h1> 
    )
}