import React, {useEffect, useState} from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ChromePicker } from 'react-color'
import rgbHex from "rgb-hex";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useNavigate } from 'react-router-dom';
import DraggableColorList from './DraggableColorList';
import SortableList from 'react-easy-sort'
import { arrayMoveImmutable } from 'array-move';
import PaletteFormNav from './PaletteFormNav';

export default function NewPaletteForm({ palettes, savePalette }) {
  const [currColor, setCurrColor] = useState("red");
  const [newPalette, setNewPalette] = useState({
    paletteName: '',
    colorName: ''
  })
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(palettes[0].colors);
  const navigate = useNavigate()
  const isPaletteFull = colors.length === 20
  
  const drawerWidth = 400;

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      height: 'calc(100vh - 64px)',
      padding: theme.spacing(3),
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

  const changeColor = (c) => {
    setCurrColor("#" + rgbHex(c.rgb.r, c.rgb.g, c.rgb.b, c.rgb.a))
  }

  const clearColors = () => {
    setColors([])
  }

  const addRandomColor = () => {
    const allColors = palettes.map(p => p.colors).flat() // combining all palettes
    const randomColor = allColors[Math.floor(Math.random() * allColors.length)]
    setColors([...colors,randomColor])
  }

  const addNewColor = () => {
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

  const handleSave = (newPaletteName) => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g,'-'),
      colors: colors
    }
    savePalette(newPalette)
    navigate('/')
  }

  const deleteColor = (name) => {
    setColors(colors.filter(color => color.name !== name))
  }

  const onSortEnd = (oldIndex, newIndex) => {
    setColors((array) => arrayMoveImmutable(array, oldIndex, newIndex))
  }

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value => colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase()))
    ValidatorForm.addValidationRule("isColorUnique", value => colors.every(({ color }) => color !== currColor))
  })

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
        <Divider />
        <Typography variant='h4'>Design Your Palette</Typography>
        <div>
          <Button variant='contained' color='secondary' onClick={clearColors}>Clear Palette</Button>
          <Button variant='contained' color='primary' onClick={addRandomColor} disabled={isPaletteFull}>Random Color</Button>
        </div>
        <ChromePicker
          color={currColor}
          onChange={changeColor}
        />
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator
            label='Color name'
            name='colorName'
            value={newPalette.colorName}
            onChange={handlePalette}
            validators={["required","isColorNameUnique","isColorUnique"]}
            errorMessages={["Enter a color name","Please enter a unique name","Color already used"]}
          />
          <Button
            variant='contained'
            type='submit'
            color='primary'
            style={{ backgroundColor: isPaletteFull? 'grey' : currColor }}
            disabled={isPaletteFull}
          >
            {isPaletteFull? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
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






