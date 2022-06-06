import React ,{useState} from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import Grid from '@mui/material/Grid';
import SelectTimeZone from '../SelectTimeZone';

export default function Calender({onDateSelect,setOnDateSelect}) {
  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setOnDateSelect(date)
  };

   const disableWeekends = (date)=>{
     return date.getDay() === 0 || date.getDay() === 6;
   }
  return (
    <>
     <Grid container spacing={6}>
     <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid  item xs={12} md={6}> 
          <CalendarPicker
          className='main_calender'
          date={onDateSelect}
          onChange={handleDateChange}
          disablePast
          shouldDisableDate={disableWeekends}
          views={['day']}

        />
          </Grid>
        </LocalizationProvider>
        </Grid>
      
       
    <   SelectTimeZone />
    </>
  );
}
