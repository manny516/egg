import './App.css';
import Caculation from './comp/Caculation';

function App() {
  const eggCount = Caculation(25,300);
  return (
    <div className="App">
      <h1 className=' text-neutral-700 text-5xl'> Your Egg count is {eggCount} </h1> 
    </div>
  );
}

export default App;
