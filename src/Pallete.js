import React, { useState } from 'react'
import ColorBox from './ColorBox'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Pallete.css'

export default function Pallete(pallete) {
    const [level, setLevel] = useState(500)
    const {colors} = pallete.pallete
    const colorBoxes = colors[level].map(color => (
        <ColorBox background={color.hex} name={color.name} key={color.name} />
    ))
    const changeLevel = (level) => {
        setLevel(level)
    }
  return (
      <div className='Pallete'>
        <div className="slider">
            <Slider defaultValue={level} min={100} max={900} step={100} onChange={changeLevel} />
        </div>
        <div className="Pallete-colors">
            { colorBoxes}
        </div>
    </div>
  )
}
