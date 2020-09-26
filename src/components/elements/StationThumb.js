import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import WorkIcon from '@material-ui/icons/Work'

export default function ForecastItem({ aqi, name }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <WorkIcon color="primary" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={aqi} secondary={name} />
    </ListItem>
  )
}
