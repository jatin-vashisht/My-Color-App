import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';
import DraggableColorList from './DraggableColorList';
import SortableList from 'react-easy-sort'
import { arrayMoveImmutable } from 'array-move';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import seedColors from './seedColors'

export default function NewPaletteForm({ palettes, savePalette }) {
  const [newPalette, setNewPalette] = useState({
    paletteName: '',
    colorName: ''
  })
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(seedColors[0].colors);
  const navigate = useNavigate()
  const isPaletteFull = colors.length === 20
  
  const drawerWidth = 400;

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      height: 'calc(100vh - 64px)',
      padding: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const clearColors = () => {
    setColors([])
  }

  const addRandomColor = () => {
    const allColors = palettes.map(p => p.colors).flat() // combining all palettes
    let randomColor = allColors[Math.floor(Math.random() * allColors.length)]
    while (colors.find(color => color.name === randomColor.name)) {
      randomColor = allColors[Math.floor(Math.random() * allColors.length)]
    }
    setColors([...colors,randomColor])
  }

  const addNewColor = (currColor) => {
    const newColor = {
      name: newPalette.colorName,
      color: currColor
    }
    setColors([...colors, newColor])
    setNewPalette({paletteName:'',colorName:''})
  }

  const handlePalette = (e) => {
    setNewPalette({ ...newPalette, [e.target.name]: e.target.value })
    console.log(newPalette)
  }

  const handleSave = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-')
    newPalette.colors = colors
    savePalette(newPalette)
    navigate('/')
  }

  const deleteColor = (name) => {
    setColors(colors.filter(color => color.name !== name))
  }

  const onSortEnd = (oldIndex, newIndex) => {
    setColors((array) => arrayMoveImmutable(array, oldIndex, newIndex))
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <PaletteFormNav open={open} palettes={palettes} handleDrawerOpen={handleDrawerOpen} handleSave={handleSave} handlePalette={handlePalette} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <div style={{height:'100%',display:'flex',width:'90%',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
          <Typography variant='h4'>Design Your Palette</Typography>
          <div>
            <Button variant='contained' color='secondary' onClick={clearColors}>Clear Palette</Button>
            <Button variant='contained' color='primary' onClick={addRandomColor} disabled={isPaletteFull}>Random Color</Button>
          </div>
          <ColorPickerForm colors={colors} isPaletteFull={isPaletteFull} addNewColor={addNewColor} newPalette={newPalette} handlePalette={handlePalette} />
        </div>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <SortableList onSortEnd={onSortEnd} className="list" draggedItemClassName="dragged" style={{ height: '100%' }}>
            <DraggableColorList colors={colors} deleteColor={deleteColor} />
        </SortableList>
      </Main>
    </Box>
  );
}






