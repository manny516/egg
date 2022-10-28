type EggType = "mature" | "immature" ;

interface FormProps{
    updateEggCount : Function;
}

interface FormValue{
    optionValue : string,
    setOptionValue : Function,
    maturity : EggType,
    setMaturity : Function,
    updateFieldState : Function,
    counteggs : Number,
    fieldState : string,
}

type EggsStartNumber = 300 | 400 | 300000 | 400000;


export type {EggType, FormProps, EggsStartNumber,FormValue}