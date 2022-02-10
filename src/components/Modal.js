/* eslint-disable react/prop-types */
import { IconButton, Modal as ModalComponent } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import React, { useState } from 'react'
import { useStyles } from '../assets/useStyles'
import { getModalStyle } from '../utils/functions'
import Message from './Message'
import CloseIcon from '@material-ui/icons/Close'
import { styles } from '../assets/styles'

const Modal = (props) => {
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)
  const { open, onClose, type } = props
  return (
    <ModalComponent
      open={open}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.modalStyle}>
        <Grid
          direction="column"
          container
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid
            direction="column"
            container
            justifyContent="flex-start"
            alignItems="flex-end"
          >
            <Grid item xs={12}>
              <IconButton
                onClick={onClose}
              >
                <CloseIcon style={styles.closeIconStyle}/>
              </IconButton>
            </Grid>
          </Grid>

          <Message onClose={onClose} type={type} />
        </Grid>
      </div>
    </ModalComponent>
  )
}

export default Modal
