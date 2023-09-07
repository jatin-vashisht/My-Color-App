import { makeStyles } from "tss-react/mui";
import sizes from "./sizes";
export default makeStyles()(theme => ({
    root: {
        backgroundColor: 'blue',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    container: {
        width: '60%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        [sizes.down('lg')]: {
            width: '70%'
        }
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: "white",
        'a': {
            color: 'white',
            textDecoration: 'none'
        }
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,30%)',
        gap: '2rem',
        [sizes.down('md')]: {
            gridTemplateColumns: 'repeat(2,50%)',
            gap: '1.5rem',
        },
        [sizes.down('xs')]: {
            gridTemplateColumns: 'repeat(1,100%)',
            gap: '1rem',
        }
    }
}))