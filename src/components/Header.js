import React from 'react'
import { AppBar, Toolbar, Typography,CssBaseline } from '@mui/material'
import {HeadsetTwoTone} from '@mui/icons-material'
const styles = {
  title: {
    marginLeft:5,
  }
}

function Header() {

  return (
      <AppBar xs={styles.title} position='fixed'>
        <Toolbar>
          <HeadsetTwoTone />
          <Typography sx={styles.title} variant='h6' component="h1">
            Apollo Music Share
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Header