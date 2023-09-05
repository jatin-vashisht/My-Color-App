import React from 'react'
import useStyles from './styles/PaletteFooterStyles'

export default function PaletteFooter({ paletteName, emoji }) {
  const styles = useStyles
  const {classes} = styles()
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  )
}
