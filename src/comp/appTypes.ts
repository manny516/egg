type EggType = "mature" | "immature" ;

interface FormProps{
    updateEggCount : Function;
}

interface FormValue{
    optionValue : string,
    setOptionValue : React.Dispatch<React.SetStateAction<string>>,
    maturity : EggType,
    setMaturity : React.Dispatch<React.SetStateAction<EggType>>,
    setFieldState : React.Dispatch<React.SetStateAction<string>>,
    counteggs : number,
    fieldState : string,
    calcBtn: Function,
    restField : Function,
    botCheck : Boolean,
    setBotCheck :  React.Dispatch<React.SetStateAction<Boolean>>,
    pubertyAge : string,
    setPubertyAge :  React.Dispatch<React.SetStateAction<string>> 

}


type EggsStartNumber = 300 | 400 | 300000 | 400000;


export type {EggType, FormProps, EggsStartNumber,FormValue}