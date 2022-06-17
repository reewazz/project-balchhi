import React from 'react'
import { Button } from '@mui/material'

function Btn({text}) {
  return (
    <Button variant="contained" style={{textTransform:"capitalize"}}>{text}</Button>
  )
}

export default Btn