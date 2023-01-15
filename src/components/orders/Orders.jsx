import { Typography } from '@mui/material'
import React from 'react'

const Orders = ( {order} ) => {
  return (
    <div style={{textAlign:'center'}}>
        <Typography variant='h2' align='justify' sx={{marginTop:'1rem', textAlign:'center'}} >{order?.buyer?.name}</Typography>
    </div>
  )
}

export default Orders