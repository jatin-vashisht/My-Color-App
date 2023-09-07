import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function PaletteMetaForm({palettes,handleSave}) {
  const [open, setOpen] = useState(false);

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
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <ValidatorForm onSubmit={handleSubmit} style={{display:'flex'}}>
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
                style={{padding: '15px',marginLeft:'10px'}}
              >
                Save Palette
              </Button>
            </ValidatorForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
