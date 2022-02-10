import { createTheme } from '@material-ui/core'
import colors from '../utils/colors'

export const theme = createTheme({
  typography: {
    h6: {
      fontSize: 16
    },
    h5: {
      fontWeight: 700
    },
    subtitle1: {
      fontWeight: 700
    },
    subtitle2: {
      color: colors.grayText
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  overrides: {
    // Name of the component ⚛️
    MuiFilledInput: {
      root: {
        // The default props to change
        backgroundColor: 'white'
      }
    }
  }
})
