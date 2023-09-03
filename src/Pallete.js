import React, { useState } from 'react'
import ColorBox from './ColorBox'
import './Pallete.css'
import Navbar from './Navbar'

export default function Pallete(pallete) {
    const [level, setLevel] = useState(500)
    const [format, setFormat] = useState('hex')
    const {colors} = pallete.pallete
    const colorBoxes = colors[level].map(color => (
        <ColorBox background={color[format]} name={color.name} key={color.name} />
    ))
    const changeLevel = (level) => {
        setLevel(level)
    }
    const changeFormat = (val) => {
        setFormat(val)
    }
  return (
      <div className='Pallete'>
        <Navbar level={level} changeLevel={changeLevel} changeFormat={changeFormat} />
        <div className="Pallete-colors">
            { colorBoxes}
        </div>
    </div>
  )
}
