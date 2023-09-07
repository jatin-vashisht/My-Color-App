import { makeStyles } from "tss-react/mui";
export default makeStyles()(theme => ({  // make all styles here
  // root: {          // example styles   , created a styles class named root
  //     backgroundColor: 'yellow',
  //     width: '50%',
  //     margin: 'auto',
  //     "h1": {                          // styles for h1 inside root
  //         color: 'red'
  //     },
  //     ":hover": {
  //         backgroundColor: 'blue'
  //     }
  // }
    root: {
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        cursor: 'pointer',
        ":hover svg": {
            opacity: 1
        }
    },
    colors: {
        backgroundColor: '#dae1e4',
        height: '150px',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 0,
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative'
    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1.5rem'
    },
    miniColor: {
      height: '25%',
      width: '20%',
      display: 'inline-block',
      margin: '0 auto',
      position: 'relative',
      marginBottom: '-3.5px'
    },
    delete: {
      
    },
    deleteIcon: {
        color: 'white',
        backgroundColor: '#eb3d30',
        width: '20px',
        height: '20px',
        position: 'absolute',
        top: 0,
        right: 0,
        padding: '10px',
        zIndex: 10,
        opacity: 0
    }
}))