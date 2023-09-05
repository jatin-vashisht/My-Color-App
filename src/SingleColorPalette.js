import React, {useState} from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import { Link } from 'react-router-dom'
import { makeStyles } from "tss-react/mui";

export default function SingleColorPalette({ allShades,palette }) {
  const [format, setFormat] = useState('hex')
  const { paletteName, emoji, id } = palette;
  const colorBoxes = allShades.map(color => (
    <ColorBox key={color.name} name={color.name} background={color[format]} showLink={false} />
  ))
  const changeFormat = (val) => {
    setFormat(val)
  }
  const useStyles = makeStyles()(theme => ({
    Palette: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    colors: {
      height: '90%'
    },
    goBack: {
      width: '20%',
      height: '50%',
      margin: '0 auto',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      marginBottom: '-3.5px',
      opacity: 1,
      backgroundColor: 'black',
      'a': {
        color: 'white',
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
      }
    }
  }))
  const {classes} = useStyles()
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
