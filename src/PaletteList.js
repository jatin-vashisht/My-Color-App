import React from 'react'
import MiniPalette from './MiniPalette'
import { Link , useNavigate } from 'react-router-dom';
import useStyles from './styles/PaletteListStyles'


export default function PaletteList(palettes) {
    const styles = useStyles 
    const { classes } = styles()
    const navigate = useNavigate()
    function goToPalette(id) {
        navigate(`/palette/${id}`)
    }
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Colors</h1>  
                    <Link to='/palette/new'>Create Palette</Link>
                </nav>
                <div className={classes.palettes}>
                    {palettes.palettes.map(palette => (
                        <MiniPalette {...palette}
                            key={palette.id}
                            handleClick={() => goToPalette(palette.id)} />
                    ))}    
                </div>
            </div>
        </div>
    )
}
