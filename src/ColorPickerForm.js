import React, {useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import { ChromePicker } from 'react-color'
import rgbHex from "rgb-hex";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { makeStyles } from "tss-react/mui";


export default function ColorPickerForm({ colors,newPalette, handlePalette, isPaletteFull, addNewColor }) {
  const [currColor, setCurrColor] = useState("red");
  const changeColor = (c) => {
    setCurrColor("#" + rgbHex(c.rgb.r, c.rgb.g, c.rgb.b, c.rgb.a))
  }
  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value => colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase()))
    ValidatorForm.addValidationRule("isColorUnique", value => colors.every(({ color }) => color !== currColor))
  })
  const handleSubmit = () => {
    addNewColor(currColor)
  }
  const useStyles = makeStyles()(theme => ({
    root: {
      display: 'flex',
      flexDirection: ' column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '20px'
    }
  }))
  const {classes} = useStyles()
  return (
    <div className={classes.root}>
      <ChromePicker
        color={currColor}
        onChange={changeColor}
        />
        <ValidatorForm onSubmit={handleSubmit} className={classes.root}>
          <TextValidator
            label='Color name'
            name='colorName'
            value={newPalette.colorName}
            onChange={handlePalette}
            fullWidth
            validators={["required","isColorNameUnique","isColorUnique"]}
            errorMessages={["Enter a color name","Please enter a unique name","Color already used"]}
          />
          <Button
            variant='contained'
            type='submit'
            color='primary'
            style={{ backgroundColor: isPaletteFull? 'grey' : currColor,width: '100%' , marginTop: '10px'}}
            disabled={isPaletteFull}
          >
            {isPaletteFull? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
    </div>
  )
}
