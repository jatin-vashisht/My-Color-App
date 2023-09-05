import React, { useState } from 'react'
import './ColorBox.css'
import { CopyToClipboard} from 'react-copy-to-clipboard'
import { Link, useLocation } from 'react-router-dom'

export default function ColorBox({ name, background, id, paletteId}) {
    const {pathname} = useLocation();
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
                <div style={{ background }} className={`copy-overlay ${copied && 'show' }`} />  {/* this is to put an overlay of the same color*/}
                <div className={`copy-msg ${copied && 'show' }`}>  {/* we can't put text in above div , as the div is scaling so text will also scale*/}
                    <h1>copied!</h1>
                    <p>{background}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className="copy-button">Copy</button>
                </div>
                {/* we need /palette/paletteId/colorId for more of every color , we can use useLocation to get the current location 
                , which includes paletteId in it , for colorId we can pass from palette to each colorBox*/}
                <Link to={`${pathname}/${id}`} onClick={(e) => e.stopPropagation() }>   {/* this is to stop copy happening when more is clicked */}
                    <span className='see-more'>More</span>  
                </Link>
            </div>
        </CopyToClipboard>
    ) 
}
