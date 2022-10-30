// import { FormValue } from "../appTypes"
import { useContext } from "react"
import { CapFirstLetter } from "../utilz/CapFirstLetter";
import EggProvider from "../utilz/EggProvider";

export const OptionSelect = () =>{
    const {maturity,optionValue,setOptionValue} = useContext(EggProvider);
    return(
        <section>
        <h1> {CapFirstLetter(maturity)} egg staring count :</h1>
        {maturity === "immature" &&(
            <select className="bg-offwhite" name="egg-options" value={optionValue} onChange={(e) =>setOptionValue(e.currentTarget.value)}>
                <option value="400000">400000</option>
                <option value="300000">300000</option>
            </select>    
        )}

        {maturity ==="mature" &&(
            <select className="bg-offwhite" name='egg-options' value={optionValue} onChange={(e) =>setOptionValue(e.currentTarget.value)}>
                <option value="400">400</option>
                <option value={"300"}>300</option>
            </select>   
        )}
    </section>
    )
    
}