import './App.css';

// components
import FruitContainer from './Components/FruitContainer'

function App() {
  const fruits = ['banana','watermelon','apple','orange','kiwi','starfruit','crabapple','grape','grapefruit','mango','mangosteen']
  return (
    <div className="App">
      <FruitContainer fruits={fruits}/>
    </div>
  );
}

export default App;

