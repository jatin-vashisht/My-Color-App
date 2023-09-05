import React, {useState} from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import { Link } from 'react-router-dom'

export default function SingleColorPalette({ allShades,palette }) {
  const [format, setFormat] = useState('hex')
  const { paletteName, emoji, id } = palette;
  const colorBoxes = allShades.map(color => (
    <ColorBox key={color.name} name={color.name} background={color[format]} showLink={false} />
  ))
  const changeFormat = (val) => {
    setFormat(val)
}
  return (
    <div className='SingleColorPalette Palette'>
      <Navbar changeFormat={changeFormat} showingFullPalette={false} />
      <div className='Palette-colors'>
        {colorBoxes}
        <div className='go-back ColorBox'>
          <Link to={`/palette/${id}`} className="back-button">Go Back</Link>
        </div>
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  )
}
