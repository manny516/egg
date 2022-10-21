type EggType = "mature" | "immature" ;

interface FormProps{
    updateEggCount : Function;
}

type EggsStartNumber = 300 | 400 | 300000 | 400000;


export type {EggType, FormProps, EggsStartNumber}