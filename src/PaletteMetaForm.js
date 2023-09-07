import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function PaletteMetaForm({palettes,handleSave}) {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    handleSave(newPaletteName)
  }

  const handleChange = (e) => {
    setNewPaletteName(e.target.value)
  }
  const [newPaletteName, setNewPaletteName] = useState('')
  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()))
  })
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Choose a Palette Name</DialogTitle>
      <ValidatorForm onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your Palette. Make sure it's unique.
          </DialogContentText>
              <TextValidator
                label='Palette Name'
                name='paletteName'
                value={newPaletteName}
                onChange={handleChange}
                fullWidth
                validators={["required","isPaletteNameUnique"]}
                errorMessages={["Enter a Palette name","Palette name already in use"]}
              />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
                variant='contained'
                color='primary'
                type='submit'
              >
                Save Palette
              </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}
