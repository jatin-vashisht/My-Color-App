import React from 'react'
import MiniPalette from './MiniPalette'
import { makeStyles } from "tss-react/mui";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles()(theme => ({
    root: {
        backgroundColor: 'blue',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,30%)',
        gap: '5%'
    }
}))

export default function PaletteList(palettes) {
    const { classes } = useStyles()
    const navigate = useNavigate()
    function goToPalette(id) {
        navigate(`/palette/${id}`)
    }
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Colors</h1>  
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
