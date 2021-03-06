import { Button, Grid, Paper, Typography} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { blue } from '@mui/material/colors';
import Calender from '../Components/Calender';

export default function Containers() {
  return (
    <Paper sx={{m:5}}>
        <Grid container>
            <Grid item xs={4}>
                <Box sx={{p:5}}>
                    <a href='#'><ArrowCircleLeftOutlinedIcon  sx={{ '&:hover': { color: 'blue' ,fontSize:'450'} }}/></a> <br/>
                    <Typography fontWeight="bold" sx={{color:'#595959',fontStyle: 'normal'}}>
                        Benefit Specialists
                    </Typography>
                    <Typography variant="h5"  fontWeight="bold"  sx={{ fontStyle: 'normal' }}>
                        Federal Employee Complimentary Phone Meeting
                    </Typography>
                   
                    <Box sx={{display:'flex', gap: 1, mt:3, justifyContent:"start", alignContent:"center", color:'#595959',fontStyle: 'normal'}}>
                        <WatchLaterIcon /> 
                        <Typography fontWeight="bold">
                            30 min 
                        </Typography>
                    </Box>
                </Box>
            </Grid> 
            <Grid item xs={8} sx={{borderLeft: '0.1px solid #cdcdcd'}}>
                <Box sx={{p:5}}>
                    <Grid container>
                        <Grid item xs={7}>
                        <Typography variant="h6"  fontWeight="bold"  sx={{ fontStyle: 'normal' }}>
                            Select a Date & Time
                        </Typography>
                        
                            <Calender />
                            
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
