import React from 'react'
import DraggableColorBox from './DraggableColorBox';
import { SortableItem } from 'react-easy-sort'

export default function DraggableColorList({colors,deleteColor}) {
  return (
    <div className='temp' style={{height: '100%',display:'flex',flexWrap:'wrap',alignContent: 'flex-start'}}>
      {colors.map(color => (
        <SortableItem key={color.name} >
          <div className='color' style={{height: '25%',width: '20%'}}>
            <DraggableColorBox name={color.name} color={color.color} key={color.name} deleteColor={deleteColor} />
          </div>
        </SortableItem>
      ))}
    </div>
  )
}
