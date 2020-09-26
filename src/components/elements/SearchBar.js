import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px auto',
  },

  search: {
    border: '2px #f0efeb solid',
    height: 50,
    position: 'relative',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: '#f0efeb',
    },
    maxWidth: 500,
    width: '100%',
    fontSize: '30px',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',

    width: '100%',
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '30px',
  },
  btn: {
    width: '40%',
    height: '50px',
    fontWeight: 'bold',
  },
}))

const SearchBar = ({ callback }) => {
  const classes = useStyles()
  const [searchItem, setSearchItem] = useState('')

  const doSearch = (event) => {
    setSearchItem(event.target.value)
  }
  const doSumbit = (event) => {
    event.preventDefault()
    callback(searchItem)
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item sm={4} xs={12}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search City..."
            onChange={doSearch}
            value={searchItem}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={doSumbit}
          className={classes.btn}
        >
          SEARCH
        </Button>
      </Grid>
    </Grid>
  )
}

export default SearchBar
