import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#e0e1dd',
    margin: '0px auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between',
  },
}))

export default function LocalForm({ time, name, url, aqi, geo }) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  if (!name) {
    name = 'Fairyland on earth'
  }
  if (!aqi) {
    aqi = 0
  }

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            AIR
          </Avatar>
        }
        title={'Your Location: ' + name}
        subheader={time}
      />

      <CardContent>
        <Grid container className="info" spaceing={6}>
          <Grid item sm={6} xs={12}>
            <Typography variant="body1" color="textSecondary">
              Today's AQI (Air Quality Information)Index:
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="h3">{aqi}</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="favourite">
          <FavoriteIcon color="primary" />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            AQI LINK: <a href={url}>{url}</a>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
