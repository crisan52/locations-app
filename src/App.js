import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import './App.css'
import { theme } from './assets/theme'
import { useStyles } from './assets/useStyles'
import InputText from './components/InputText'

/**
 * Code Challenge - Autocomplete Places
 * This app use Material-UI Components v4.0
 * @author Christian Antonio Salinas Escobar
 */
function App () {
  const classes = useStyles()
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container fixed>
          <Grid
            className={classes.contentStyle}
            container
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={12}>
              <Typography variant="h5">
                Where are you located?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                So we know where to drop off the stuff
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                We won´t share your address
              </Typography>
              <Typography variant="subtitle2">
                with your ex (or whoever).
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <InputText />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App
