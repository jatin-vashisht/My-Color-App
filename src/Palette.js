import React, { useState } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import useStyles from './styles/PaletteStyles'

export default function Palette(palette) {
    const [level, setLevel] = useState(500)
    const [format, setFormat] = useState('hex')
    const {colors,paletteName,emoji,id} = palette.palette
    const colorBoxes = colors[level].map(color => (
        <ColorBox background={color[format]} name={color.name} key={color.id} id={color.id} showingFullPalette />
    ))
    const changeLevel = (level) => {
        setLevel(level)
    }
    const changeFormat = (val) => {
        setFormat(val)
    }
  
  const styles = useStyles;
  const {classes} = styles()
  return (
      <div className={classes.Palette}>
        <Navbar level={level} changeLevel={changeLevel} changeFormat={changeFormat} showingAllColors />
        <div className={classes.colors}>
            { colorBoxes}
          </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  )
}
