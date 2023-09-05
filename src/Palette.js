import React, { useState } from 'react'
import ColorBox from './ColorBox'
import './Palette.css'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import { makeStyles } from "tss-react/mui";

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
  
  const useStyles = makeStyles()(theme => ({
    Palette: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    colors: {
      height: '90%'
    },
    footer: {
      backgroundColor: '#fff',
      height: '5vh',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      fontWeight: 'bold'
    },
    emoji: {
      fontSize: '1.5rem',
      margin: '0 1rem'
    }
  }))
  const {classes} = useStyles()
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
