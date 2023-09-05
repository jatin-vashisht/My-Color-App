import React, {useState} from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'

export default function SingleColorPalette({ allShades,palette }) {
  const [format, setFormat] = useState('hex')
  const { paletteName, emoji } = palette;
  const colorBoxes = allShades.map(color => (
    <ColorBox key={color.name} name={color.name} background={color[format]} showLink={false} />
  ))
  const changeFormat = (val) => {
    setFormat(val)
}
  return (
    <div className='Palette'>
      <Navbar changeFormat={changeFormat} showingAllColors={false} />
      <div className='Palette-colors'>{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  )
}
