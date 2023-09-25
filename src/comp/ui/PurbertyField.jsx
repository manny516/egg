import { useContext } from "react";
import EggProvider from "../utilz/EggProvider";

export const PubertyField = () =>{
    const pubertyAgeRange = [8,9,10,11,12,13,14];
    const {pubertyAge, setPubertyAge} = useContext(EggProvider);

    return(
        <select name="puberty-age" value={pubertyAge} onChange={(e) =>{setPubertyAge(e.currentTarget.value)}}>
            {pubertyAgeRange.map((items)=>{
                return <option key={items.toString()} value={items}> {items} </option>
            })}
        </select>
    )
}