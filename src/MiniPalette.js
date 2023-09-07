import React from 'react'
import useStyles from './styles/MiniPaletteStyles'
import DeleteIcon from '@mui/icons-material/Delete';

export default function MiniPalette({ colors, emoji, id, paletteName, handleClick }) { 
    // console.log(useStyles())  // for reference
    const styles = useStyles
    const {classes} = styles()   // grab classes from here and directly use on components
    const miniColorBoxes = colors.map(color => (
        <div className={classes.miniColor} style={{backgroundColor: color.color}} key={color.name}></div>
    ))
    return (
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.delete}>
                <DeleteIcon className={classes.deleteIcon} style={{transition: 'all 0.3s ease-in-out'}}/>
            </div>
            <div className={classes.colors}>{miniColorBoxes}</div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span> </h5>
        </div>
    )
}
