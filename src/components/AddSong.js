import { TextField,InputAdornment,Button } from '@mui/material'
import React from 'react'
import AddLinkIcon from '@mui/icons-material/AddLink';
import { AddBoxOutlined } from '@mui/icons-material';


function AddSong() {
  return (
    <div>
      <TextField
        placeholder="Add youtube or Sondcloud Url"
        fullWidth
        margin="normal"
        type="url"
        inputProps={{
          startAdorment: (
            <InputAdornment>
              <AddLinkIcon/>
            </InputAdornment>
          )
        }}
      />
      <Button
        variant="contained"
        color="primary"
        endIcon={<AddBoxOutlined/>}
      >Add</Button>
    </div>
  )
}

export default AddSong