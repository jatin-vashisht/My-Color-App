import React from 'react'
import { Link } from 'react-router-dom'

export default function PaletteList(palettes) {
  return (
    <div>
        <h1>React Colors</h1>
          {palettes.palettes.map(palette => (
              <p>
                  <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
            </p>
        ))}  
    </div>
  )
}
