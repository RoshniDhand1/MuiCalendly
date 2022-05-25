import React from 'react'
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

const StyleSelectBox = makeStyles((theme )=> ({
    dropdownStyle: 
    {
      borderRadius: "40px !important",
      height: 30,
      fontSize :"13px !important",
      width:"230px !important",
      "&:hover ": {
        backgroundColor: "rgba(0,0,0,.1)"
      }
    },
    
}));

export {StyleSelectBox};