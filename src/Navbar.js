import React,{useState} from 'react'
import Select from '@mui/material/Select/Select';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar({ level, changeLevel,changeFormat }) {
    const [format, setFormat] = useState('hex')
    const [open, setOpen] = useState(true)
    const handleChange = (e) => {
        setFormat(e.target.value)
        setOpen(true)
        changeFormat(e.target.value)
    }
    const closeSnackBar = () => {
        setOpen(false)
    }
  return (
      <header className='Navbar'>
        <div className="logo">
            <Link to="/">ReactColorPicker</Link>
        </div>
        <div className="slider-container">
            <span>Level: {level}</span>
            <div className="slider">
                <Slider defaultValue={level} min={100} max={900} step={100} onChange={changeLevel} />
            </div>      
        </div>
        <div className="select-container">
            <Select value={format} onChange={handleChange}>
                <MenuItem value='hex'>HEX - #ffffff</MenuItem>        
                <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>        
                <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>        
            </Select>
          </div>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              open={open}
              autoHideDuration={3000}
              message={
                  <span id='message-id'>Format Changed To {format.toUpperCase()}</span>
              }
              ContentProps={{
                'aria-describedby': 'message-id'
              }}
              onClose={closeSnackBar}
              action={[
                  <IconButton
                    onClick={closeSnackBar}
                    color='inherit'
                    key='close'
                    aria-label='close'
                  >
                      <CloseIcon />
                  </IconButton>
              ]}
          />
    </header>
  )
}
