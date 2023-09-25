
import { OptionSelect } from './OptionSelect';
import { MatureRadio } from './MatureRadio';
import { InputAgeField } from './InputAgeField';
import { PubertyField } from './PurbertyField';

const Forms = ()=>{
    return(
        <>
            <section  className="mt-10 egg-count form p-4 m-auto border-2 border-solid border-greys"> 
                <section className=' sm:flex m-auto  border-solid border-primary border-4'>
                    <article className='border sm:mr-4 sm:pl-4 sm:pr-4 border-solid rounded-lg bg-offwhite pt-4 pb-4  lg:w-6/12 sm:w-full'>
                        <MatureRadio />
                    </article>
                    <article className='border pl-4 pr-4 border-solid rounded-lg bg-offwhite pt-4 pb-4   lg:w-6/12 sm:w-full'>
                        <OptionSelect />
                    </article>
                    
                </section>
                <section>
                    <article className='border pl-4 pr-4 border-solid rounded-lg bg-offwhite pt-4 pb-4   lg:w-6/12 sm:w-full'>
                    <PubertyField />
                    </article>
                </section>
                <section className=''>
                    <InputAgeField /> 
                </section>
            </section>   
        </>
         
    );
}

export default Forms;