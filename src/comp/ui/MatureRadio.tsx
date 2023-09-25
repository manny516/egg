import { EggType } from "../appTypes"
import { useContext } from "react"
import EggProvider from "../utilz/EggProvider"

export const MatureRadio = () =>{
    const {maturity,setMaturity,botCheck,setBotCheck,restField} = useContext(EggProvider);
    return(
        <section className="bg-offwhite px-6">
        <section>
            <h2 className='text-2xl'> Egg Count Start </h2>
            <label className='pr-1 ' htmlFor="immatureEggCount"> Immature egg count</label>
            <input id="immatureEggCount" type="radio" name="maturity" value="immature" checked={maturity === "immature"} onChange={(e) => setMaturity(e.target.value ) as EggType} onClick={e => restField()}/><br/>
        </section>
        <section>
            <label className='pr-1 ml-3' htmlFor="matureEggCount"> Mature egg count</label>
            <input id="matureEggCount" type="radio" name='maturity' value="mature" checked={maturity === "mature"}  onChange={(e) => setMaturity(e.target.value) as EggType } onClick={e => restField()} />
        </section>
        <input className="hidden" type="checkbox" name='mustcheck' value={botCheck}  onClick={() => setBotCheck(true) } />
    </section>
    )
    
}