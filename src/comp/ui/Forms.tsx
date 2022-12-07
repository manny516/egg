
import { OptionSelect } from './OptionSelect';
import { MatureRadio } from './MatureRadio';
import { InputAgeField } from './InputAgeField';
// import { PurbertyField } from './PurbertyField';

const Forms = ()=>{
    return(
        <>
            <section  className="mt-10 egg-count form w-10/12 flex   p-4 m-auto"> 
                <section className='w-4/12 mr-3'>
                    <article className='mb-4 border pt-4 pb-4 border-solid rounded-lg bg-offwhite'>
                        <MatureRadio />
                    </article>
                    <article className='mt-4 border pt-4 pb-4 border-solid rounded-lg bg-offwhite'>
                        <OptionSelect />
                    </article>
                    {/* <PurbertyField /> */}
                </section>
               
                <section className='w-6/12 grow'>
                    <InputAgeField /> 
                </section>
            </section>   
        </>
         
    );
}

export default Forms;