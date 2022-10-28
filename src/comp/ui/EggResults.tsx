import { useContext } from "react";
import EggProvider from "../utilz/EggProvider";
export  const EggsResult = () =>{
    const {counteggs} = useContext(EggProvider); 
    return(
        <h1 className=' text-neutral-700 text-5xl border-b-2 border-solid p-4'> Your Egg count is {counteggs  < 0 ? 0 : (counteggs > 0 ? counteggs : " ")}</h1> 
    )
}