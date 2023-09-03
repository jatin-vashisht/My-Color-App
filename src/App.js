import './App.css';
import Pallete from './Pallete';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

function App() {
  const pallete = generatePalette(seedColors[7])
  return (
    <div className="App">
      <Pallete pallete={pallete} />
    </div>
  );
}

export default App;
