/* eslint-disable react/prop-types */
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { styles } from '../assets/styles'
import { useStyles } from '../assets/useStyles'

const Message = (props) => {
  const classes = useStyles()
  const { onClose, type } = props
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h5">
          {type ? 'Address updated' : 'Out of Delivery Area'}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          {type
            ? 'New address added to your account'
            : '"Wherever I go, there I am."'}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" className={classes.typoStyle}>
          {type
            ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
            : 'Sadly, this qoute is not true for us. In other words, we are \n not operating in your area (yet), but things change \n everyday.'}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">
          {type
            ? 'Nisi ut aliquip ex ea commodo consequat'
            : 'Sing up to our newsletter to get notified.'}
        </Typography>
      </Grid>
      <div style={styles.buttonStyle}>
        <Button
          className={classes.buttonStyle}
          variant="contained"
          color="secondary"
          size="large"
          onClick={onClose}
        >
          Understood
        </Button>
      </div>
    </>
  )
}

export default Message
