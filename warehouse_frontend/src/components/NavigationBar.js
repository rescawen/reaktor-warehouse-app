import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CategoryIcon from '@material-ui/icons/Category';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Beanie } from "../icons/beanie.svg";
import { ReactComponent as Facemask } from "../icons/facemask.svg";
import { ReactComponent as Glove } from "../icons/glove.svg";
import { Link, useLocation } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > svg': {
      margin: theme.spacing(2),
    }
  },
  menuButton: {
    marginRight: theme.spacing(8),
  }
}))

const BeanieIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <Beanie />
    </SvgIcon>
  )
}

const FacemaskIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <Facemask />
    </SvgIcon>
  )
}

const GloveIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <Glove />
    </SvgIcon>
  )
}

const NavigationBar = () => {
  const classes = useStyles()
  const location = useLocation()

  const allButtonColor = () => {
    switch (location.pathname) {
      case "/":
        return "default"
      default:
        return "inherit"
    }
  }

  // if and when specific product is rendered, then might have to change to if (location.path.contains) etc...

  const beanieButtonColor = () => {
    switch (location.pathname) {
      case "/beanies":
        return "default"
      default:
        return "inherit"
    }
  }

  const facemaskButtonColor = () => {
    switch (location.pathname) {
      case "/facemasks":
        return "default"
      default:
        return "inherit"
    }
  }

  const gloveButtonColor = () => {
    switch (location.pathname) {
      case "/gloves":
        return "default"
      default:
        return "inherit"
    }
  }

  // console.log(location.pathname)
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#8d6e63' }}>
        <Toolbar className={classes.root}>
          <Button
            color={allButtonColor()}
            className={classes.menuButton}
            startIcon={<CategoryIcon />}
            component={Link} to="/">
            All Categories
            </Button>
          <Button
            color={beanieButtonColor()}
            className={classes.menuButton}
            startIcon={<BeanieIcon />}
            component={Link} to="/beanies">
            Beanies
              </Button>
          <Button
            color={facemaskButtonColor()}
            className={classes.menuButton}
            startIcon={<FacemaskIcon />}
            component={Link} to="/facemasks">
            Facemasks
              </Button>
          <Button
            color={gloveButtonColor()}
            className={classes.menuButton}
            startIcon={<GloveIcon />}
            component={Link} to="/gloves">
            Gloves
              </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavigationBar