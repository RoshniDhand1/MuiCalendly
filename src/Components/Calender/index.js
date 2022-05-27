import React ,{useState} from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import Grid from '@mui/material/Grid';
import SelectTimeZone from '../SelectTimeZone';

// const minDate = new Date('2020-01-01T00:00:00.000');
// const maxDate = new Date('2034-01-01T00:00:00.000');

export default function Calender() {
  const [date, setDate] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
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
            date={selectedDate}
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
