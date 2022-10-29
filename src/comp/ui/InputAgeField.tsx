import { useContext } from "react";
import EggProvider from "../utilz/EggProvider";

export const InputAgeField = () =>{
    const {updateFieldState,fieldState,calcBtn,restField} = useContext(EggProvider);
    return(
         <>
            <input className=' border border-solid  mr-4'  type="text" onChange={(e) => updateFieldState(e.target.value)} name="age" placeholder="Enter your Age" value={fieldState} />
            <button className="w-2/6 border border-solid mr-2" onClick={() =>calcBtn()}> Egg count</button>
            <button className="w-2/6 border border-solid" onClick={() => restField()}> Reset </button>
        </>
    );

}