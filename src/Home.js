import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Grid } from '@material-ui/core'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import LocalForm from './components/elements/LocalForm'
import useSearchFetch from './components/hooks/useSearchFetch'
import useFeedFetch from './components/hooks/useFeedFetch'
import useLocalFetch from './components/hooks/useLocalFetch'
import SearchBar from './components/elements/SearchBar'
import DetailsBoard from './components/elements/DetailsBoard'
import ForecastItem from './components/elements/ForecastItem'
import StationThumb from './components/elements/StationThumb'
import SnackBarError from './components/elements/SnackBarError'
import SnackBarWarn from './components/elements/SnackBarWarn'
import Spinner from './components/elements/Spinner'
import { API_KEY, SEARCH_URL, FEED_URL, FEED_KEY, LOCAL_URL } from './config'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    height: 400,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'right',
    justifyContent: 'right',
    alignContent: 'center',
    maxWidth: 400,
    minWidth: 350,
    height: 300,
  },
  list: {
    backgroundColor: '#e0e1dd',
    borderRadius: '5px',
  },
  title: {
    marginLeft: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
  },
}))

const Home = ({ className, ...rest }) => {
  const classes = useStyles()
  const [inputError, setInputError] = useState(false)
  const [{ feed, feedError, feedLoading }, feedFetch] = useFeedFetch()
  const [{ local, localError, localLoading }, localFetch] = useLocalFetch()

  const [
    { searchedData, searchError, searchLoading },
    fetchSearch,
  ] = useSearchFetch()

  const searchCities = (value) => {
    if (value === '') {
      setInputError(true)
    } else {
      setInputError(false)
    }

    const endpointSearch = `${SEARCH_URL}${value}${API_KEY}`
    const endpointFeed = `${FEED_URL}${value}${FEED_KEY}`
    fetchSearch(endpointSearch)
    feedFetch(endpointFeed)
  }

  useEffect(() => {
    feedFetch(`${FEED_URL}Melbourne${FEED_KEY}`)
    localFetch(LOCAL_URL)
    fetchSearch(`${SEARCH_URL}melbourne${API_KEY}`)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {localLoading ? (
        <Spinner />
      ) : (
        <LocalForm
          name={local.name}
          aqi={local.aqi}
          time={local.time}
          url={local.url}
          geo={local.geo}
        />
      )}
      <SearchBar callback={searchCities} />
      {localError === true && searchError === true && <SnackBarError />}
      {inputError === true && <SnackBarError />}
      {feedError !== '' && inputError === false && <SnackBarWarn />}

      <Grid
        {...rest}
        className={clsx(classes.root, className)}
        container
        spacing={1}
      >
        {feedLoading ? (
          <Spinner />
        ) : (
          <Grid item sm={4} xs={12}>
            <DetailsBoard
              name={feed.name}
              aqi={feed.aqi}
              time={feed.time}
              url={feed.url}
            />
          </Grid>
        )}
        {feedLoading ? (
          <Spinner />
        ) : (
          <Grid item sm={4} xs={12}>
            <List className={classes.list}>
              <Typography className={classes.title}>
                {feed.name} AQI Forecast:{' '}
              </Typography>
              {feed.forecast &&
                feed.forecast.map((item) => (
                  <ForecastItem
                    key={item.id}
                    id={item.id}
                    avg={item.avg}
                    date={item.day}
                  />
                ))}
            </List>
          </Grid>
        )}

        {searchLoading ? (
          <Spinner />
        ) : (
          <Grid item sm={4} xs={12}>
            <List className={classes.list}>
              <Typography className={classes.title}>Station List: </Typography>
              {searchedData &&
                searchedData.map((item) => (
                  <StationThumb
                    key={item.id}
                    id={item.id}
                    aqi={item.aqi}
                    name={item.station.name}
                  />
                ))}
            </List>
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default Home
