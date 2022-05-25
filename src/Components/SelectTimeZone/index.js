import React from 'react'
import {Select, MenuItem, Box, SvgIcon,Chip} from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import { StyleSelectBox } from '../../Themes';

const timzones =[
    'Estern Timezone (ET)',
    'Pacific Timezone (ET)',
    'Central Timezone (ET)',
    'Mountain Timezone (ET)'
]

const selectContainer = { 
    display: "flex", 
    gap: 1, 
    justifyContent: 'start', 
    alignItems:'center' ,
   
}

const SelectTimeZone = (props) => {
    const classes = StyleSelectBox(props);
    return (
        <Select
            fullWidth
            className={classes.dropdownStyle}
            defaultValue="Estern Timezone (ET)"
            renderValue={(value) => {
                return (
                    <Box sx={selectContainer}>
                        <SvgIcon >
                            <PublicIcon/>
                        </SvgIcon>
                        {value}
                    </Box>
                );
            }}
            
        >
            {
                timzones.map((tz,index)=>(
                    <MenuItem key={index} value={tz}>{tz}</MenuItem>
                ))
            }
        </Select>
    )
}

export default SelectTimeZone;