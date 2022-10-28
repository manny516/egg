
import { OptionSelect } from './OptionSelect';
import { MatureRadio } from './MatureRadio';
import { InputAgeField } from './InputAgeField';

const Forms = ()=>{
    return(
        <>
            <section  className="mt-10 egg-count form flex flex-cols-2 w-8/12 rounded-lg p-8 m-auto border border-solid border-red-700 "> 
                <article className=' border border-solid w-5/6'>
                    <MatureRadio />
                    <OptionSelect />
                </article>
                <article>
                <InputAgeField /> 
                </article>
            </section>   
        </>
         
    );
}

export default Forms;