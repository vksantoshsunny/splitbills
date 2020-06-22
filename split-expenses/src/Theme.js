import {createMuiTheme} from '@material-ui/core/styles'




// Note this styling is being applied based on the ETA project work so far

export const Theme = createMuiTheme({
  typography: {
    fontFamily: 'MuseoModerno',
  },
  palette: {
    primary: {
      light: '#000000',
      main: '#000000',
      dark: '#000000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#FFFFFF',
      main: '#FFFFFF',
      dark: '#FFFFFF',
    },
    text: {
      primary: '#323849',
      primaryMediumEmphasis: 'rgba(255, 255, 255, 0.6)',
      secondary: '#e0f2f1',
      secondaryMediumEmphasis: 'rgba(0, 0, 0, 0.6)',
    },
  },
})
