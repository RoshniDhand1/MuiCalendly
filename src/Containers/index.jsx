import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SelectTimeZone from '../Components/SelectTimeZone'

export default function Containers() {
  return (
    <Paper sx={{m:5}}>
        <Grid container>
            <Grid item xs={4}>
                <Box sx={{p:5}}>
                    Appointment Details
                </Box>
            </Grid>
            <Grid item xs={8} sx={{borderLeft: '0.1px solid #cdcdcd'}}>
                <Box sx={{p:5}}>
                    <Grid container>
                        <Grid item xs={7}>
                            Calendar
                            <br />
                            <SelectTimeZone/>
                        </Grid>
                        <Grid item xs={5}>
                            TimerView
                        </Grid>

                    </Grid>
                </Box>
            </Grid>
        </Grid>
    </Paper>
  )
}
