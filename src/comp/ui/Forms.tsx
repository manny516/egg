import Caculation from '../utilz/Caculation';
import {useState,useEffect} from 'react';
import { FormProps,EggType,EggsStartNumber } from '../appTypes';



const Forms = ({updateEggCount}:FormProps)=>{
    const [fieldState, updateFieldState] = useState<string>();
    const [optionValue,setOptionValue] = useState<string>("300000");
    const [maturity,setMaturity] = useState<EggType>("immature");
    const eggInputData:number = Number(fieldState); 
    const optionData:number = Number(optionValue);      
    const eggs = Caculation(eggInputData, optionData as EggsStartNumber);

    useEffect(() =>{
        if(maturity === 'mature' && optionValue !== "400"){
            setOptionValue("300");
        }
        if(maturity === 'immature' && optionValue !== "300000"){
            setOptionValue("400000");
        }
        updateEggCount(eggs);
    },[updateEggCount,maturity,optionValue,eggs]);

    console.log(eggInputData);
    console.log(optionValue);

    return(
        <form  className="egg-count form "> 
        <h1> {maturity}</h1>
        <section>
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
        <section>
            <label> Immauture egg count</label>
            <input type="radio" name="maturity" value="immature" checked={maturity === "immature"} onChange={(e) => setMaturity(e.target.value as EggType)}/><br/>
            <label> Mature egg count</label>
            <input type="radio" name='maturity' value="mature" checked={maturity === "mature"}  onChange={(e) => setMaturity(e.target.value as EggType) } />

        </section>
            <input  type="text" onChange={(e) => updateFieldState(e.target.value)} name="age" placeholder="Enter your Age" value={fieldState} />
            <button className=""> Give me count</button>
        </form>
    );
}

export default Forms;