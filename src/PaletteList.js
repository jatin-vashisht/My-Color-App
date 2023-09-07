import React,{useState} from 'react'
import MiniPalette from './MiniPalette'
import { Link , useNavigate } from 'react-router-dom';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Avatar from '@mui/material/Avatar';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { blue,red } from '@mui/material/colors';
import useStyles from './styles/PaletteListStyles'
import './styles/PaletteListStyles.css'

export default function PaletteList({ palettes, deletePalette }) {
    const [open, setOpen] = useState(false)
    const [deleteId,setDeleteId] = useState('')
    const styles = useStyles 
    const { classes } = styles()
    const navigate = useNavigate()
    function goToPalette(id) {
        navigate(`/palette/${id}`)
    }
    const openDialog = (id) => {
        setOpen(true)
        setDeleteId(id)
    }
    const closeDialog = () => {
        setOpen(false)
    }
    const handleDelete = () => {
        deletePalette(deleteId)
        closeDialog()
    }
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Colors</h1>  
                    <Link to='/palette/new'>Create Palette</Link>
                </nav>
                <TransitionGroup className={classes.palettes}>
                    {palettes.map(palette => (
                        <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                            <MiniPalette {...palette}
                                key={palette.id}
                                id={palette.id}
                                handleClick={() => goToPalette(palette.id)}
                                openDialog={openDialog}
                                />
                        </CSSTransition>
                    ))}    
                </TransitionGroup>
            </div>
            <Dialog open={open} onClose={closeDialog}>
                <DialogTitle>Delete This Palette?</DialogTitle>
                <List>
                    <ListItem>
                        <ListItemButton onClick={handleDelete}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100] , color: blue[600] }}>
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                        <ListItemText primary='Delete'/>
                    </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={closeDialog}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: red[100] , color: red[600] }}>
                                    <CloseIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Cancel' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Dialog>
        </div>
    )
}
