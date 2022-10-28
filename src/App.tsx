import './App.css';
import Forms from './comp/ui/Forms';
import { useCalcForm } from './comp/hooks/useCalcForm';
import EggProvider from './comp/utilz/EggProvider';
import { EggsResult } from './comp/ui/EggResults';

function App() {
  console.count("Render Project : ");
  const {calcData} = useCalcForm();
  return (
    <div className="App">
      <EggProvider.Provider value={calcData}>
        <EggsResult />
        <Forms/>
      </EggProvider.Provider>      
    </div>
  );
}

export default App;
