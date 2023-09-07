import React, {useEffect, useState} from 'react'
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import PaletteMetaForm from './PaletteMetaForm';


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
  
export default function PaletteFormNav({ open, palettes, handleSave, handleDrawerOpen }) {
  const [showingForm, setShowingForm] = useState(false)
  const showForm = () => {
    setShowingForm(true)
  }
  const hideForm = () => {
    setShowingForm(false)
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
            Create a Palette
          </Typography>
          <div style={{display: 'flex',marginLeft: 'auto',alignItems:'center'}}>
            <Link to='/'>
              <Button
                variant='contained'
                color='secondary'
                size='large'
                style={{marginRight:'10px'}}
              >
                Go Back
              </Button>
            </Link>
            <Button variant="contained" onClick={showForm} style={{padding: '8px',marginRight:'10px'}}>
              Save
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {showingForm && <PaletteMetaForm palettes={palettes} handleSave={handleSave}  hideForm={hideForm} />}
    </div>
  )
}
