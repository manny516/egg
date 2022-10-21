import { EggsStartNumber} from '../appTypes';



const Caculation = (age:number, eggTotal:EggsStartNumber) =>{    
    
    if(age >=12){
        const subtractAge = ()=> {
            let subtractCurrentAge= age - 12;
            const multiplyEggs = () =>{
                let multiplyAgeWithEggs:number;
                if((eggTotal === 300) || (eggTotal === 400)){
                    multiplyAgeWithEggs = subtractCurrentAge * 12;
                }else{  
                    multiplyAgeWithEggs = subtractCurrentAge * 12000;
                }
                const giveEggCount = () =>{
                    let returnCount = eggTotal - multiplyAgeWithEggs;
                    if(returnCount < 0 ){
                        returnCount = 0;
                    }
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