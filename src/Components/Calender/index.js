import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import Grid from '@mui/material/Grid';
import SelectTimeZone from '../SelectTimeZone';

// const minDate = new Date('2020-01-01T00:00:00.000');
// const maxDate = new Date('2034-01-01T00:00:00.000');

export default function Calender() {
  const [date, setDate] = React.useState(new Date());

  return (
    <>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid>
            <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
          </Grid>
        </LocalizationProvider>
    <   SelectTimeZone />
    </>
  );
}
