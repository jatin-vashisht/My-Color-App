import React, { useState } from 'react'
import './ColorBox.css'
import { CopyToClipboard} from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'

export default function ColorBox({ name, background }) {
    const [copied, setCopied] = useState(false)
    function changeCopyState() {       // this will set copied to true for 1.5s , which in turn make our overlay and text visible for 1.5s
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        },1000)
    }
    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div style={{ background }} className='ColorBox'>
                <div style={{ background }} className={`copy-overlay ${copied && 'show' }`} /> {/* this is to put an overlay of the same color*/}
                <div className={`copy-msg ${copied && 'show' }`}>   {/* we can't put text in above div , as the div is scaling so text will also scale*/}
                    <h1>copied!</h1>
                    <p>{background}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className="copy-button">Copy</button>
                </div>
                <Link to='/' onClick={(e) => e.stopPropagation()}>
                    <span className='see-more'>More</span>
                </Link>
            </div>
        </CopyToClipboard>
    ) 
}
