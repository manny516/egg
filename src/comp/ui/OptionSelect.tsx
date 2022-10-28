// import { FormValue } from "../appTypes"
import { useContext } from "react"
import EggProvider from "../utilz/EggProvider";

export const OptionSelect = () =>{
    const {maturity,optionValue,setOptionValue} = useContext(EggProvider);
    return(
        <section className='flex flex-cols-2'>
        <h1> {maturity} egg staring count :</h1>
        {maturity === "immature" &&(
            <select name="egg-options" value={optionValue} onChange={(e) =>setOptionValue(e.currentTarget.value)}>
                <option value="400000">400000</option>
                <option value="300000">300000</option>
            </select>    
        )}

        {maturity ==="mature" &&(
            <select name='egg-options' value={optionValue} onChange={(e) =>setOptionValue(e.currentTarget.value)}>
                <option value="400">400</option>
                <option value={"300"}>300</option>
            </select>   
        )}
    </section>
    )
    
}