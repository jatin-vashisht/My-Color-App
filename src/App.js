import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

function App() {
  const palette = generatePalette(seedColors[7])
  return (
    <div className="App">
      <Palette palette={palette} />
    </div>
  );
}

export default App;
