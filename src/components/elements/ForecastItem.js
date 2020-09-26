import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import BeachAccessIcon from '@material-ui/icons/BeachAccess'

export default function ForecastItem({ avg, date }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <BeachAccessIcon color="primary" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={avg} secondary={date} />
    </ListItem>
  )
}
