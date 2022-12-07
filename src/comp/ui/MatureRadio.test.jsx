
import { MatureRadio } from './MatureRadio';
import EggProvider from '../utilz/EggProvider';
import { render,screen } from '@testing-library/react';

const matureRadioImmatureProps = {
    "maturity" : "immature"
}

const matureRadioProps = {
    "maturity" : "mature"
}

describe('Check Mature Radio buttons have render',() =>{

    it("Checks to see if Immature Radio has rendered",() =>{    

        render(
            <EggProvider.Provider value={false}>
                <MatureRadio {...matureRadioImmatureProps} />
            </EggProvider.Provider>
            
        )
        const labelText = screen.getByLabelText('Immature egg count')
        expect(labelText).toBeInTheDocument();
    });

     it("Checks to see if mature Radio has rendered",() =>{    

        render(
            <EggProvider.Provider value={false}>
                <MatureRadio {...matureRadioProps} />
            </EggProvider.Provider>
            
        )
        const labelText = screen.getByLabelText('Mature egg count')
        expect(labelText).toBeInTheDocument();
    })

 
})