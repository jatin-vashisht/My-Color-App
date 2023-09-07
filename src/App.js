import PaletteHelper from './PaletteHelper'
import seedColors from './seedColors';
import {Route,Routes, useLocation} from 'react-router-dom'
import PaletteList from './PaletteList';
import MoreHelper from './MoreHelper';
import NewPaletteForm from './NewPaletteForm';
import { useEffect, useState } from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import './App.css';

function App() {
  const location = useLocation()
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
    <TransitionGroup>
      <CSSTransition key={location.key} classNames='fade' timeout={500}>
        <Routes location={location}>
          <Route path='/' element={<div className='page'><PaletteList palettes={palettes} deletePalette={deletePalette} /></div>} />
          <Route path='/palette/new' element={<div className='page'><NewPaletteForm palettes={palettes} savePalette={savePalette} /></div>} />
          <Route path='/palette/:id' element={<div className='page'><PaletteHelper palettes={palettes} /></div>} />
          <Route path='/palette/:paletteId/:colorId' element={<div className='page'><MoreHelper palettes={palettes} /></div>} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
