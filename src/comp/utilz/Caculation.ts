import { EggsStartNumber} from '../appTypes';


const Caculation = (pubertyAge:number = 12, age:number, eggTotal:EggsStartNumber) =>{    
    
    if(age >= pubertyAge){
        const subtractAge = ()=> {
            let subtractCurrentAge= age - pubertyAge;
            const multiplyEggs = () =>{
                let multiplyAgeWithEggs:number;
                if((eggTotal === 300) || (eggTotal === 400)){
                    multiplyAgeWithEggs = subtractCurrentAge * pubertyAge;
                }else{  
                    multiplyAgeWithEggs = subtractCurrentAge * 12000;
                }
                const giveEggCount = () =>{
                    let returnCount = eggTotal - multiplyAgeWithEggs;
                    return returnCount;
                }
                return giveEggCount();
            }
            return multiplyEggs();
        }
        return subtractAge();
    }
}
export default Caculation;