import {createMuiTheme} from '@material-ui/core/styles'
import { blueGrey } from '@material-ui/core/colors';




// Note this styling is being applied based on the ETA project work so far

export const Theme = createMuiTheme({
  typography: {
    fontFamily: 'Fira Sans',
  },
  palette: {
    primary: {
      light: '#e0f2f1',
      main: '#323849',
      dark: '#323849',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#FFFFFF',
      main: blueGrey[500],
      dark: blueGrey[700],
    },
    text: {
      primary: '#323849',
      primaryMediumEmphasis: 'rgba(0, 0, 0, 0.6)',
      secondary: '#e0f2f1',
      secondaryMediumEmphasis: 'rgba(255, 255, 255, 0.6)',
    },
  },
})
