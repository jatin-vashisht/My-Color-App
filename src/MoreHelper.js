import React from 'react'
import SingleColorPalette from './SingleColorPalette'
import { generatePalette } from './colorHelpers';
import { useParams } from 'react-router-dom'

export default function MoreHelper({ palettes }) {
  const { paletteId, colorId } = useParams()
  const allShades = []
  const palette = generatePalette(findPalette(paletteId))
  function findPalette(id) {
    for (let p of palettes) {
      if (p.id === id)
      return p;
  }
}
  function getAllShades(colors) {
    for (let shade in colors) {
      for (let color of colors[shade]) {
        if (color.id === colorId && color.name.substr(-2) !== '50') {
          allShades.push(color)
        }
      }
    }
  }
  getAllShades(palette.colors)

  return (
    <SingleColorPalette allShades={allShades} palette={palette} />
  )
}

