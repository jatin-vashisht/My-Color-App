// eslint-disable-next-line
import React, { useEffect,useMemo } from 'react'
import PaletteHelper from './PaletteHelper'
import seedColors from './seedColors';
import {Route,Routes, useLocation} from 'react-router-dom'
import Page from './Page'
import PaletteList from './PaletteList';
import MoreHelper from './MoreHelper';
import NewPaletteForm from './NewPaletteForm';
import { useState } from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import './App.css';

function App() {
  const location = useLocation()
  const savedPalettes = JSON.parse(localStorage.getItem('palettes'))
  const [palettes, setPalettes] = useState(savedPalettes || seedColors)
  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette])
  }
  
  const syncLocalStorage = () => {
    localStorage.setItem('palettes',JSON.stringify(palettes))
  }
  
  const deletePalette = (id) => {
    setPalettes(palettes.filter(palette => palette.id !== id))
  }

  useEffect(() => {
    syncLocalStorage()
  })

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames='page' timeout={500}>
        <Routes location={location}>
          <Route path='/' element={<Page><PaletteList palettes={palettes} deletePalette={deletePalette} /></Page>} />
          <Route path='/palette/new' element={<Page><NewPaletteForm palettes={palettes} savePalette={savePalette} /></Page>} />
          <Route path='/palette/:id' element={<Page><PaletteHelper palettes={palettes} /></Page>} />
          <Route path='/palette/:paletteId/:colorId' element={<Page><MoreHelper palettes={palettes} /></Page>} />
          <Route path='*' element={<Page><PaletteList palettes={palettes} deletePalette={deletePalette} /></Page>} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
