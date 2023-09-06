import React from 'react'
import { makeStyles } from 'tss-react/mui'

export default function DraggableColorBox({ color, name }) {
  const useStyles = makeStyles()(theme => ({
    root: {
      width: '20%',
      height: '25%',
      margin: '0 auto',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      marginBottom: '-3.5px',
    }
  }))
  const {classes} = useStyles()
  return (
    <div className={classes.root} style={{backgroundColor: color}}>
      {name}
    </div>
  )
}
