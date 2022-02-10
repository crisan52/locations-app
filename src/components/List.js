/* eslint-disable react/prop-types */
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import { List as ListComponent } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import RoomIcon from '@material-ui/icons/Room'
import React from 'react'
import { styles } from '../assets/styles'
import { useStyles } from '../assets/useStyles'

const List = (props) => {
  const classes = useStyles()
  const { data, onClick } = props
  return (
    <Grid container justifyContent="center">
      <Grid item xs={6}>
        <ListComponent className={classes.listStyle}>
          {data.map((item, key) => {
            return (
              <>
                <ListItem key={key} onClick={() => onClick(item)}>
                  <ListItemAvatar>
                    <RoomIcon style={styles.iconStyle} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.structured_formatting.main_text}
                    secondary={item.structured_formatting.secondary_text}
                  />
                </ListItem>
                {key < data.length - 1 && <Divider />}
              </>
            )
          })}
        </ListComponent>
      </Grid>
    </Grid>
  )
}

export default List
