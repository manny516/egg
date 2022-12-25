import Caculation from '../utilz/Caculation';
import {useState,useEffect} from 'react';
import { EggType,EggsStartNumber,FormValue} from '../appTypes';



export const useCalcForm  = () =>{
    const [counteggs,setCountEggs]= useState<number>(0);
    const [fieldState, updateFieldState] = useState<string>("");
    const [optionValue,setOptionValue] = useState<string>("400");
    const [maturity,setMaturity] = useState<EggType>("mature");
    const eggInputData:number = Number(fieldState); 
    const optionData:number = Number(optionValue);      
    const [ageTracker,setAgeTracker] = useState<Object>(); 
    const [siteDomain, setSiteDomain] = useState<string | undefined>();
    const [botCheck, setBotCheck] = useState<Boolean>(false);

    const calcBtn = () =>{
        if(!botCheck){
            updateFieldState(fieldState);
            const eggs:number | undefined = Caculation(eggInputData, optionData as EggsStartNumber);
            eggs ? setCountEggs(eggs) : setCountEggs(0);
            console.log(`Egg Count ${eggs}`)
            localStorage.setItem('age',JSON.stringify(fieldState));
            setAgeTracker( [
                { "age": fieldState,
                [maturity] : optionValue,
                "domain" : siteDomain
                },
            ]);        
            console.log("age",ageTracker);
            }   

    }

    const restField =() =>{
      setCountEggs(0);  
      updateFieldState("");
      setBotCheck(false);
    }

    useEffect(() =>{
        
        if(maturity === 'mature' && optionValue !== "400"){
            setOptionValue("300");
        }
        if(maturity === 'immature' && optionValue !== "300000"){
            setOptionValue("400000");
        }
        setSiteDomain(document.location.href);
        setAgeTracker( [
            {"age": fieldState,
                [maturity] : optionValue,
                "domain" : siteDomain,
            },
        ]);

        console.log("BotCheck",botCheck);
    },[setCountEggs,maturity,optionValue,fieldState,siteDomain,botCheck]);

    

    const calcData:FormValue = {
        optionValue,
        setOptionValue,
        maturity,
        setMaturity,
        counteggs,
        updateFieldState,
        fieldState,
        calcBtn,
        restField,
        botCheck,
        setBotCheck,
    }


    return{
        calcData
    }
};