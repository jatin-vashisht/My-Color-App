import React from 'react'
import { useParams } from 'react-router-dom'
import Palette from './Palette';
import { generatePalette } from './colorHelpers';

export default function Helper({ palettes }) {
  const { id } = useParams();
  function findPalette(id) {
      for (let p of palettes) {
          if (p.id === id)
              return p;
      }
  }
  return (
    <Palette palette={generatePalette(findPalette(id))} />
  )
}
