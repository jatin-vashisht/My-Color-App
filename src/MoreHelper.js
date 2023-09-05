import React from 'react'
import SingleColorPalette from './SingleColorPalette'
import { generatePalette } from './colorHelpers';
import seedColors from './seedColors';
import { useParams } from 'react-router-dom'

export default function MoreHelper() {
  const { paletteId, colorId } = useParams()
  const allShades = []
  const colors = generatePalette(findPalette(paletteId)).colors
  
  function findPalette(id) {
    for (let p of seedColors) {
      if (p.id === id)
      return p;
  }
}
  function getAllShades(colors) {
    for (let shade in colors) {
      for (let color of colors[shade]) {
        if (color.id === colorId) {
          allShades.push(color)
        }
      }
    }
  }
  getAllShades(colors)

  return (
    <SingleColorPalette allShades={allShades} />
  )
}

