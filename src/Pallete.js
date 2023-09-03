import React from 'react'
import ColorBox from './ColorBox'
import './Pallete.css'

export default function Pallete({ paletteName, id, emoji, colors }) {
    const colorBoxes = colors.map(color => (
        <ColorBox background={color.color} name={color.name} />
    ))
  return (
    <div className='Pallete'>
        <div className="Pallete-colors">
              { colorBoxes}
        </div>
    </div>
  )
}
