import { makeStyles } from "tss-react/mui";
import chroma from "chroma-js";
export default makeStyles()((theme,color) => ({
  root: {
    width: '100%',
    height: '100%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    ':hover svg': {
      color: 'white',
      transform: 'scale(1.5)'
    }
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0',
    bottom: '0',
    padding: '10px',
    color: chroma(color).luminance() <= 0.8? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out'
  }
}))