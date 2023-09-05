import React, {useState} from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import { Link } from 'react-router-dom'
import useStyles from './styles/PaletteStyles'

export default function SingleColorPalette({ allShades,palette }) {
  const [format, setFormat] = useState('hex')
  const { paletteName, emoji, id } = palette;
  const colorBoxes = allShades.map(color => (
    <ColorBox key={color.name} name={color.name} background={color[format]} showLink={false} />
  ))
  const changeFormat = (val) => {
    setFormat(val)
  }

  const styles = useStyles;
  const {classes} = styles()
  return (
    <div className={classes.Palette}>
      <Navbar changeFormat={changeFormat} showingFullPalette={false} />
      <div className={classes.colors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${id}`}>Go Back</Link>
        </div>
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  )
}
