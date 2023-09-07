import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import useStyles from './styles/DraggableColorBoxStyles'

export default function DraggableColorBox({ color, name, deleteColor }) {
  const styles = useStyles
  const {classes} = styles()
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
