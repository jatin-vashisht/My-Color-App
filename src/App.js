import './App.css';
import Helper from './Helper'
import { useState } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
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
