import React from 'react'
import MiniPalette from './MiniPalette'
import { Link , useNavigate } from 'react-router-dom';
import useStyles from './styles/PaletteListStyles'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import './styles/PaletteListStyles.css'

export default function PaletteList({ palettes , deletePalette}) {
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
                <TransitionGroup className={classes.palettes}>
                    {palettes.map(palette => (
                        <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                            <MiniPalette {...palette}
                                key={palette.id}
                                id={palette.id}
                                handleClick={() => goToPalette(palette.id)}
                                deletePalette={deletePalette}
                                />
                        </CSSTransition>
                    ))}    
                </TransitionGroup>
            </div>
        </div>
    )
}
