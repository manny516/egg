import Caculation from '../utilz/Caculation';
import {useState,useEffect} from 'react';
import { EggType,EggsStartNumber,FormValue} from '../appTypes';



export const useCalcForm  = () =>{
    const [counteggs,setCountEggs]= useState<number>(0);
    const [fieldState, updateFieldState] = useState<string>(" ");
    const [optionValue,setOptionValue] = useState<string>("300000");
    const [maturity,setMaturity] = useState<EggType>("immature");
    const eggInputData:number = Number(fieldState); 
    const optionData:number = Number(optionValue);      

    const calcBtn = () =>{
        // console.log( "Hello World");
        updateFieldState(fieldState);
        const eggs:number | undefined = Caculation(eggInputData, optionData as EggsStartNumber);
        eggs ? setCountEggs(eggs) : setCountEggs(0);
        console.log(`Egg Count ${eggs}`)
    }

    const restField =() =>{
      setCountEggs(0);  
    }
    useEffect(() =>{
        if(maturity === 'mature' && optionValue !== "400"){
            setOptionValue("300");
        }
        if(maturity === 'immature' && optionValue !== "300000"){
            setOptionValue("400000");
        }

    },[setCountEggs,maturity,optionValue,fieldState]);

    

    const calcData:FormValue = {
        optionValue,
        setOptionValue,
        maturity,
        setMaturity,
        counteggs,
        updateFieldState,
        fieldState,
        calcBtn,
        restField
    }


    return{
        calcData
    }
};