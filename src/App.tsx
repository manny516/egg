import './App.css';
import { useState,} from 'react';
import Forms from './comp/ui/Forms';

function App() {
  const [counteggs,setCountEggs]= useState<number>(NaN);

  return (
    <div className="App">
      <Forms updateEggCount={setCountEggs} />
      <h1 className=' text-neutral-700 text-5xl'> Your Egg count is {counteggs}</h1> 
     
    </div>
  );
}

export default App;
