import React, { useState } from 'react'
import { CopyToClipboard} from 'react-copy-to-clipboard'
import { Link, useLocation } from 'react-router-dom'
import chroma from 'chroma-js'
import useStyles from './styles/ColorBoxStyles'

export default function ColorBox({ name, background, id, paletteId, showingFullPalette }) {
    const {pathname} = useLocation();
    const [copied, setCopied] = useState(false)
    const lum = chroma(background).luminance()

    function changeCopyState() {       // this will set copied to true for 1.5s , which in turn make our overlay and text visible for 1.5s
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        },1000)
    }

    const styles = useStyles;
    const props = {
        lum: lum,
        showingFullPalette: showingFullPalette
    }
    const { classes } = styles(props)    // make sure to pass the changing param in useStyles too ,
    // else it will only apply styles based on inital values, been stuck here for 1.5 hours.So better keep this in mind
    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div style={{ background }} className={classes.ColorBox}>
                <div style={{ background }} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} />  {/* this is to put an overlay of the same color*/}
                <div className={`${classes.copyMsg} ${copied && classes.showMsg }`}>  {/* we can't put text in above div , as the div is scaling so text will also scale*/}
                    <h1>copied!</h1>
                    <p className={classes.copyText}>{background}</p>
                </div>
                <div>
                    <div className={classes.boxContent}>
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <button className={classes.copyButton}>Copy</button>
                </div>
                {/* we need /palette/paletteId/colorId for more of every color , we can use useLocation to get the current location 
                , which includes paletteId in it , for colorId we can pass from palette to each colorBox*/}
                {showingFullPalette && (
                    <Link to={`${pathname}/${id}`} onClick={(e) => e.stopPropagation()}>   {/* this is to stop copy happening when more is clicked */}
                        <span className={classes.seeMore}>More</span>  
                    </Link>
                )}
            </div>
        </CopyToClipboard>
    ) 
}
