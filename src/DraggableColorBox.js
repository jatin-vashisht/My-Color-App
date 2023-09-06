import React from 'react'
import { makeStyles } from 'tss-react/mui'
import DeleteIcon from '@mui/icons-material/Delete';

export default function DraggableColorBox({ color, name, deleteColor }) {
  const useStyles = makeStyles()(theme => ({
    root: {
      width: '20%',
      height: '25%',
      margin: '0 auto',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      marginBottom: '-3.5px',
      ':hover svg': {
        color: 'white',
        transform: 'scale(1.5)'
      }
    },
    boxContent: {
      position: 'absolute',
      width: '100%',
      left: '0',
      bottom: '0',
      padding: '10px',
      color: 'rgba(0,0,0,0.5)',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontSize: '12px',
      display: 'flex',
      justifyContent: 'space-between'
    },
    deleteIcon: {
      transition: 'all 0.3s ease-in-out'
    }
  }))
  const { classes } = useStyles()
  const handleClick = () => {
    deleteColor(name)
  }
  return (
    <div className={classes.root} style={{backgroundColor: color}}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  )
}
