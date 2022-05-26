import React from 'react'
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

const StyleSelectBox = makeStyles((theme )=> ({
    dropdownStyle: 
    {
      borderRadius: "40px !important",
      border: "0px solid rgba(0,0,0,0)",
      paddingLeft :14,
      height: 30,
      fontSize :"13px !important",
      width:"230px !important",
      "&:hover ": {
        backgroundColor: "rgba(0,0,0,.1)"
      },
     
    },
    
  
    
    
}));

export {StyleSelectBox};