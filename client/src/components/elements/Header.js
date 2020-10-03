import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Location from './../images/location.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  header: {
    margin: '0 auto',
    height: '100%',
  },
  title: {
    fontSize: '30px',
    height: '50px',
    lineHeight: '50px',

    alignItems: 'center',
    alignContent: 'center',
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Grid container className={classes.header}>
            <Grid item xs={9} sm={9} className={classes.title}>
              Air Quality Index
            </Grid>

            <Grid item xs={3} sm={3}>
              <img src={Location} alt="location" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}
