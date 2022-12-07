import { useContext } from "react";
import EggProvider from "../utilz/EggProvider";

export const InputAgeField = () =>{
    const {updateFieldState,fieldState,calcBtn,restField} = useContext(EggProvider);
    return(
         <>
            <input className=" border-b-2 mt-4 border-solid w-full text-greys mb-4 placeholder: indent-4 border-b-primary text-5xl"  type="text" onChange={(e) => updateFieldState(e.target.value)} name="age" placeholder="Enter your Age" value={fieldState} />
            <button type="submit" className="border border-solid mr-2 w-1/6 p-4 bg-primary text-offwhite min-w-max" onClick={() =>calcBtn()}> Calculate</button>
            <button className=" border border-solid w-1/6 p-4 text-offwhite bg-primary min-w-max" onClick={() => restField()}> Reset </button>
        </>
    );

}