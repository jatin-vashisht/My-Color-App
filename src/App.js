import './App.css';
import Pallete from './Pallete';
import seedColors from './seedColors';

function App() {
  return (
    <div className="App">
      <Pallete {...seedColors[7]} />
    </div>
  );
}

export default App;
