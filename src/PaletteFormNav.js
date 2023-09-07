import React, {useEffect, useState} from 'react'
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';


const drawerWidth = 400;
const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open', })(
  ({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
export default function PaletteFormNav({ open, palettes, handleSave, handlePalette, handleDrawerOpen }) {
  const [newPaletteName, setNewPaletteName] = useState('')
  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()))
  })
  const handleSubmit = () => {
    handleSave(newPaletteName)
  }
  const handleChange = (e) => {
    setNewPaletteName(e.target.value)
  }
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" open={open} color='default'>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}  // basically adding styles
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
          <div>
            <ValidatorForm onSubmit={handleSubmit}>
              <TextValidator
                label='Palette Name'
                name='paletteName'
                value={newPaletteName}
                onChange={handleChange}
                validators={["required","isPaletteNameUnique"]}
                errorMessages={["Enter a Palette name","Palette name already in use"]}
              />
              <Button
                variant='contained'
                color='primary'
              type='submit'
              >
                Save Palette
              </Button>
              <Link to='/'>
                <Button
                  variant='contained'
                  color='secondary'
                >
                  Go Back
                </Button>
              </Link>
            </ValidatorForm>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
