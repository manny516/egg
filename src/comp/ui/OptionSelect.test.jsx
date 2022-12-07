import { OptionSelect } from './OptionSelect';
import { InputAgeField } from './InputAgeField';
import { MatureRadio } from './MatureRadio';
import { useCalcForm } from '../hooks/useCalcForm';
import EggProvider from '../utilz/EggProvider';
import { render,screen } from '@testing-library/react';

const optionsProp = {
    "maturity" : "mature"
}
describe("Check for OptionSelect Component", ()=>{
    it("check if Options is present",() =>{
        render(
        <EggProvider.Provider value={useCalcForm} >
            <InputAgeField />
            <MatureRadio />
            <OptionSelect {...optionsProp} />
        </EggProvider.Provider>
        )

        
    })
})