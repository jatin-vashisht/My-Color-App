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
        },
        boxContent: {
            position: 'absolute',
            width: '100%',
            left: '0',
            bottom: '0',
            padding: '10px',
            color: 'black',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontSize: '12px'
        },
        copyOverlay: {
            opacity: '0',
            zIndex: '0',
            width: '100%',
            height: '100%',
            transition: 'transform 0.6s ease-in-out',
            transform: 'scale(0.1)'
        },
        showOverlay: {
            opacity: '1',
            transform: 'scale(50)',
            zIndex: '10',
            position: 'absolute'
        },
        copyMsg: {
            position: 'fixed',
            left: '0',
            right: '0',
            top: '0',
            bottom: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4rem',
            transform: 'scale(0.1)',
            opacity: '0',
            color: 'white',
            'h1': {
                fontWeight: '400',
                textShadow: '1px 2px black',
                background: 'rgba(255,255,255,0.3)',
                width: '100%',
                textAlign: 'center',
                marginBottom: '0',
                padding: '1rem',
                textTransform: 'uppercase',
                opacity: 1
            },
            'p': {
                fontSize: '2rem',
                fontWeight: '100'
            }
        },
        showMsg: {
            opacity: 1,
            transform: 'scale(1)',
            zIndex: '25',
            transition: 'all 0.4s ease-in-out',
            transitionDelay: '0.3s'
        }
    }))
    const { classes } = useStyles(lum)    // make sure to pass the changing param in useStyles too ,
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
