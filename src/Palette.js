import React, { useState } from 'react'
import ColorBox from './ColorBox'
import './Palette.css'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'


export default function Palette(palette) {
    const [level, setLevel] = useState(500)
    const [format, setFormat] = useState('hex')
    const {colors,paletteName,emoji,id} = palette.palette
    const colorBoxes = colors[level].map(color => (
        <ColorBox background={color[format]} name={color.name} key={color.id} id={color.id} showLink />
    ))
    const changeLevel = (level) => {
        setLevel(level)
    }
    const changeFormat = (val) => {
        setFormat(val)
    }
  return (
      <div className='Palette'>
        <Navbar level={level} changeLevel={changeLevel} changeFormat={changeFormat} showingAllColors />
        <div className="Palette-colors">
            { colorBoxes}
          </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  )
}
