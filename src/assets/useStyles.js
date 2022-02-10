import { makeStyles } from '@material-ui/core'
import colors from '../utils/colors'

export const useStyles = makeStyles((theme) => ({
  contentStyle: {
    flexGrow: 1,
    backgroundColor: colors.grayBackground,
    paddingTop: 100,
    paddingBottom: 100
  },
  inputTextStyle: {
    width: '100%',
    backgroundColor: colors.white,
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
  },
  listStyle: {
    width: '100%',
    backgroundColor: colors.white,
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
  },
  modalStyle: {
    position: 'absolute',
    width: '25%',
    backgroundColor: colors.white,
    border: '1px #000',
    boxShadow: theme.shadows[2],
    padding: theme.spacing(5, 5, 5, 5)
  },
  buttonStyle: {
    borderRadius: '20px',
    opacity: '0.6',
    boxShadow: theme.shadows[2],
    paddingLeft: '80px',
    paddingRight: '80px'
  },
  typoStyle: {
    flexGrow: 1,
    textAlign: 'center'
  }
}))
