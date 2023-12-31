import { makeStyles } from "tss-react/mui";
import sizes from './sizes'
export default makeStyles()(theme => ({
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  colors: {
    height: '90%'
  },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    opacity: 1,
    backgroundColor: 'black',
    'a': {
      color: 'white',
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-15px',
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255,255,255,0.3)',
      border: 'none',
      fontSize: '1rem',
      lineHeight: '30px',
      textTransform: 'uppercase',
      textDecoration: 'none',
    },
    [sizes.down('lg')]: {
      width: '100%',
      height: '25%'
    },    
    [sizes.down('md')]: {
      width: '50%',
      height: '20%'
    },    
    [sizes.down('xs')]: {
      width: '100%',
      height: '10%'
    },    
  }
}))