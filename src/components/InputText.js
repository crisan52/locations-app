import { TextField } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import { ThemeProvider } from '@material-ui/core/styles'
import RoomIcon from '@material-ui/icons/Room'
import React, { useState } from 'react'
import useGoogle from 'react-google-autocomplete/lib/usePlacesAutocompleteService'
import { theme } from '../assets/theme'
import { useStyles } from '../assets/useStyles'
import List from '../components/List'
import Modal from '../components/Modal'
import params from '../utils/params'
import { zipCodes } from '../utils/zipCodes'

const Find = () => {
  const classes = useStyles()
  // Find places on specific country
  // const [country, setCountry] = useState('us')
  const [inputAddress, setInputAddress] = useState('')
  const [open, setOpen] = useState(false)
  const [inRange, setInRange] = useState(false)

  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading, placesService } = useGoogle({
    apiKey: params.MAPS_API_KEY,
    options: {
      types: ['address'],
      fields: [
        'address_components',
        'place_id',
        'name',
        'formatted_address'
      ]
      // componentRestrictions: { country }
    }
  })

  const _getDetailPlace = async (placeId) => {
    return new Promise((resolve, reject) => {
      placesService?.getDetails(
        {
          placeId: placeId
        },
        (placeDetails) => resolve(placeDetails)
      )
    })
  }

  const handleCheckLocation = async (item) => {
    // Get the detail of selected location
    let placeDetail = {}
    let postalCode = 0
    placeDetail = await _getDetailPlace(item.place_id)

    // Search the postal code in detail
    for (const component of placeDetail.address_components) {
      const componentType = component.types[0]
      switch (componentType) {
        case 'postal_code': {
          postalCode = `${component.long_name}`
          break
        }
      }
    }

    // Find postal code in array of valid zipcodes
    if (postalCode !== 0 && postalCode !== undefined) {
      const valid = zipCodes.find((location) => location.toString() === postalCode)
      if (valid !== undefined) {
        // Postal Code in range
        setInRange(true)
      } else {
        // Postal Code out of range
        setInRange(false)
      }
    } else {
      setInRange(false)
    }

    handleOpenModal()
  }

  // Limit the number of results
  const limitPlacePredictions = placePredictions.slice(0, 3)
  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <TextField
            className={classes.inputTextStyle}
            fullWidth
            placeholder="Please type an address"
            color="primary"
            variant="filled"
            value={inputAddress}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RoomIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {isPlacePredictionsLoading && (
                    <CircularProgress size={25} color="secondary" />
                  )}
                </InputAdornment>
              )
            }}
            onChange={(evt) => {
              getPlacePredictions({ input: evt.target.value })
              setInputAddress(evt.target.value)
            }}
          />
        </Grid>
      </Grid>
      {!isPlacePredictionsLoading && placePredictions.length > 0 && (
        <List data={limitPlacePredictions} onClick={handleCheckLocation}/>
      )}

      <Modal open={open} onClose={handleCloseModal} type={inRange}/>
    </ThemeProvider>
  )
}

export default Find
