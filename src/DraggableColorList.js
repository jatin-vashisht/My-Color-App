import React from 'react'
import DraggableColorBox from './DraggableColorBox';
import { SortableItem } from 'react-easy-sort'
import useStyles from './styles/DraggableColorListStyles'

export default function DraggableColorList({colors,deleteColor}) {
  const styles = useStyles
  const {classes} = styles()
  return (
    <div className='temp' style={{height: '100%',display:'flex',flexWrap:'wrap',alignContent: 'flex-start'}}>
      {colors.map(color => (
        <SortableItem key={color.name} >
          <div className={classes.root}>
            <DraggableColorBox name={color.name} color={color.color} key={color.name} deleteColor={deleteColor} />
          </div>
        </SortableItem>
      ))}
    </div>
  )
}
