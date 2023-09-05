import React from 'react'
import ColorBox from './ColorBox'

export default function SingleColorPalette({ allShades }) {
  allShades.shift()
  const colorBoxes = allShades.map(color => (
    <ColorBox key={color.id} name={color.name} background={color.hex} showLink={false} />
  ))
  return (
    <div className='Palette'>
      <h1>Single Color Palette</h1>  
      <div className='Palette-colors'>{colorBoxes}</div>
    </div>
  )
}
