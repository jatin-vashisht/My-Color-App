import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Picker from '@emoji-mart/react'

export default function PaletteMetaForm({palettes,handleSave,hideForm}) {
  const [stage, setStage] = useState("form")
  const [newPaletteName, setNewPaletteName] = useState('')

  const handleChange = (e) => {
    setNewPaletteName(e.target.value)
  }

  const showEmojiPicker = () => {
    setStage('emoji')
  }
  
  const savePalette = (emoji) => {
    // console.log(emoji)     // for reference
    const newPalette = {
      paletteName: newPaletteName,
      emoji: emoji.native
    }
    handleSave(newPalette)
    setStage('')
  }

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()))
  })
  return (
    <>
      <Dialog open={stage === 'emoji'} onClose={hideForm}>
        <DialogTitle>Choose a Palette Emoji</DialogTitle>
        <Picker onEmojiSelect={savePalette}/>
      </Dialog>
      <Dialog open={stage === 'form'} onClose={hideForm}>
        <DialogTitle>Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
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
            <Button onClick={hideForm}>Cancel</Button>
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
    </>
  );
}
