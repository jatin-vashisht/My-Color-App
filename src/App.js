import './App.css';
import Helper from './Helper'
import seedColors from './seedColors';
import {Route,Routes} from 'react-router-dom'
import PaletteList from './PaletteList';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PaletteList palettes={seedColors} />} />
        <Route path='/palette/:id' element={<Helper />} />
      </Routes>
    </>
    // <div className="App">
    //   <Palette palette={palette} />
    // </div>
  );
}

export default App;
