import { EggType } from "../appTypes"
import { useContext } from "react"
import EggProvider from "../utilz/EggProvider"

export const MatureRadio = () =>{
    const {maturity,setMaturity} = useContext(EggProvider);
    return(
        <section className="">
        <section>
            <label className='pr-1 '> Immauture egg count</label>
            <input type="radio" name="maturity" value="immature" checked={maturity === "immature"} onChange={(e) => setMaturity(e.target.value ) as EggType}/><br/>
        </section>
        <section>
            <label className='pr-1 ml-3'> Mature egg count</label>
            <input type="radio" name='maturity' value="mature" checked={maturity === "mature"}  onChange={(e) => setMaturity(e.target.value) as EggType } />
        </section>
    </section>
    )
    
}