import { makeStyles } from "tss-react/mui";
import sizes from "./sizes";
export default makeStyles()(theme => ({
  root: {
    height: '25%',
    width: '20%',
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%'
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '10%'
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '5%'
    }
  }
}))