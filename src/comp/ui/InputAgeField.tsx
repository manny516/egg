import { useContext } from "react";
import EggProvider from "../utilz/EggProvider";

export const InputAgeField = () =>{
    const {updateFieldState,fieldState} = useContext(EggProvider);
    return(
         <>
            <input className=' border border-solid  mr-4'  type="text" onChange={(e) => updateFieldState(e.target.value)} name="age" placeholder="Enter your Age" value={fieldState} />
            <button className=""> Give me count</button>
        </>
    );

}