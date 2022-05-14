import { createTheme } from '@mui/material/styles';
import { teal,purple } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: {
      main: teal[300]
    },
    secondary: {
      main:purple[500]
    },
    background: {
      default:'#a7ffeb'
    },

  }
})

export default theme;