import './App.css';
import Helper from './Helper'
import { useState } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Palette List Goes here</h1>} />
        <Route path='/palette/:id' element={<Helper />} />
      </Routes>
    </>
    // <div className="App">
    //   <Palette palette={palette} />
    // </div>
  );
}

export default App;
