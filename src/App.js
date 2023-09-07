import './App.css';
import PaletteHelper from './PaletteHelper'
import seedColors from './seedColors';
import {Route,Routes} from 'react-router-dom'
import PaletteList from './PaletteList';
import MoreHelper from './MoreHelper';
import NewPaletteForm from './NewPaletteForm';
import { useEffect, useState } from 'react';

function App() {
  const savedPalettes = JSON.parse(localStorage.getItem('palettes'))
  const [palettes, setPalettes] = useState(savedPalettes || seedColors)
  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette])
  }
  useEffect(() => {
    syncLocalStorage()
  }, [palettes, savedPalettes])
  
  const syncLocalStorage = () => {
    localStorage.setItem('palettes',JSON.stringify(palettes))
  }
  
  const deletePalette = (id) => {
    setPalettes(palettes.filter(palette => palette.id !== id))
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<PaletteList palettes={palettes} deletePalette={deletePalette} />} />
        <Route path='/palette/new' element={<NewPaletteForm palettes={palettes} savePalette={savePalette} />} />
        <Route path='/palette/:id' element={<PaletteHelper palettes={palettes} />} />
        <Route path='/palette/:paletteId/:colorId' element={<MoreHelper palettes={palettes} />} />
      </Routes>
    </>
  );
}

export default App;
