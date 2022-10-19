import {useState} from 'react';


const Caculation = (age:number, eggTotal:number) =>{
    const [eggsStart] = useState<number>(eggTotal);
    const subtractAge = ()=> {
        let subtractCurrentAge= age - 12;
         const multiplyEggs = () =>{
            let multiplyAgeWithEggs = subtractCurrentAge * 12;
            const giveEggCount = () =>{
                return  eggsStart - multiplyAgeWithEggs;
            }
            return giveEggCount();
        }
        return multiplyEggs();
    }
    return subtractAge();
}
export default Caculation;