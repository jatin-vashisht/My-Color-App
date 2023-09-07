import React from 'react'
import useStyles from './styles/MiniPaletteStyles'
import DeleteIcon from '@mui/icons-material/Delete';

export default function MiniPalette({ colors, emoji, id, paletteName, handleClick , deletePalette }) { 
    // console.log(useStyles())  // for reference
    const styles = useStyles
    const {classes} = styles()   // grab classes from here and directly use on components
    const miniColorBoxes = colors.map(color => (
        <div className={classes.miniColor} style={{backgroundColor: color.color}} key={color.name}></div>
    ))
    const handleDelete = (e) => {
        e.stopPropagation()
        deletePalette(id)
    }
    return (
        <div className={classes.root} onClick={handleClick}>
            <DeleteIcon className={classes.deleteIcon} onClick={handleDelete} style={{transition: 'all 0.3s ease-in-out'}}/>
            <div className={classes.colors}>{miniColorBoxes}</div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span> </h5>
        </div>
    )
}
