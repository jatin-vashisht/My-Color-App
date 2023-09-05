import React, { useState } from 'react'
import './ColorBox.css'
import { CopyToClipboard} from 'react-copy-to-clipboard'
import { Link, useLocation } from 'react-router-dom'
import chroma from 'chroma-js'
import { makeStyles } from "tss-react/mui";

export default function ColorBox({ name, background, id, paletteId,showingFullPalette}) {
    const {pathname} = useLocation();
    const [copied, setCopied] = useState(false)
    const lum = chroma(background).luminance()

    function changeCopyState() {       // this will set copied to true for 1.5s , which in turn make our overlay and text visible for 1.5s
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        },1000)
    }

    const useStyles = makeStyles()(theme => ({
        ColorBox: {
            width: '20%',
            height: showingFullPalette? '25%' : '50%',
            margin: '0 auto',
            display: 'inline-block',
            position: 'relative',
            cursor: 'pointer',
            marginBottom: '-3.5px',
            ':hover button': {
                opacity: 1
            }
        },
        copyText: {
            color: lum >= 0.7? 'black' : 'white'
        },
        colorName: {
            color: lum <= 0.08? 'white' : 'black'
        },
        seeMore: {
            color: lum >= 0.7? 'rgba(0,0,0,0.6)' : 'white',
            background: 'rgba(255,255,255,0.3)',
            position: 'absolute',
            border: 'none',
            right: '0',
            bottom: '0',
            width: '60px',
            height: '30px',
            textAlign: 'center',
            lineHeight: '30px',
            textTransform: 'uppercase'
        },
        copyButton: {
            color: lum >= 0.7? 'rgba(0,0,0,0.6)' : 'white',
            width: '100px',
            height: '30px',
            position: 'absolute',
            display: 'inline-block',
            top: '50%',
            left: '50%',
            marginLeft: '-50px',
            marginTop: '-15px',
            textAlign: 'center',
            outline: 'none',
            background: 'rgba(255,255,255,0.3)',
            border: 'none',
            fontSize: '1rem',
            lineHeight: '30px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            opacity: 0
        }
    }))
    const { classes } = useStyles(lum)    // make sure to pass the changing param in useStyles too ,
    // else it will only apply styles based on inital values, been stuck here for 1.5 hours.So better keep this in mind
    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div style={{ background }} className={classes.ColorBox}>
                <div style={{ background }} className={`copy-overlay ${copied && 'show' }`} />  {/* this is to put an overlay of the same color*/}
                <div className={`copy-msg ${copied && 'show' }`}>  {/* we can't put text in above div , as the div is scaling so text will also scale*/}
                    <h1>copied!</h1>
                    <p className={classes.copyText}>{background}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
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
