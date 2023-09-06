import './App.css';
import PaletteHelper from './PaletteHelper'
import seedColors from './seedColors';
import {Route,Routes} from 'react-router-dom'
import PaletteList from './PaletteList';
import MoreHelper from './MoreHelper';
import NewPaletteForm from './NewPaletteForm';
import { useState } from 'react';

function App() {
  const [palettes, setPalettes] = useState(seedColors)
  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette])
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<PaletteList palettes={palettes} />} />
        <Route path='/palette/new' element={<NewPaletteForm palettes={palettes} savePalette={savePalette} />} />
        <Route path='/palette/:id' element={<PaletteHelper palettes={palettes} />} />
        <Route path='/palette/:paletteId/:colorId' element={<MoreHelper palettes={palettes} />} />
      </Routes>
    </>
  );
}

export default App;
