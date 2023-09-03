import React from 'react'
import './ColorBox.css'

export default function ColorBox({ name,background}) {
  return (
    <div style={{backgroundColor: background}} className='ColorBox'>
        <span>{name}</span>
        <span>MORE</span>
    </div>
  )
}
