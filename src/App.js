import './App.css';
import PaletteHelper from './PaletteHelper'
import seedColors from './seedColors';
import {Route,Routes} from 'react-router-dom'
import PaletteList from './PaletteList';
import MoreHelper from './MoreHelper';
import NewPaletteForm from './NewPaletteForm';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PaletteList palettes={seedColors} />} />
        <Route path='/palette/new' element={<NewPaletteForm />} />
        <Route path='/palette/:id' element={<PaletteHelper />} />
        <Route path='/palette/:paletteId/:colorId' element={<MoreHelper />} />
      </Routes>
    </>
    // <div className="App">
    //   <Palette palette={palette} />
    // </div>
  );
}

export default App;
