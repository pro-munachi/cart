import React from 'react'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import './style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            <Link to='/' className='logo'>E-Commerce</Link>
          </Typography>
          <Link to='/cart' className='link'>
            <Button color='inherit'>Cart</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}
