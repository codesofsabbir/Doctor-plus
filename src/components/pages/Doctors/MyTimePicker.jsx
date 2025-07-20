"use client";

import React, { useState } from "react";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { TextField } from "@mui/material";
import dayjs from "dayjs";

export default function MyTimePicker({ handleSelectedTime }) {
  const [value, setValue] = useState(dayjs().minute(0).second(0));
  const hour = value.format("hh");
  const minute = value.format("mm");
  const ampm = value.format("A");
  const selectedTime = `${hour}:${minute} ${ampm}`;
  console.log(selectedTime);
  const shouldDisableTime = (timeValue, clockType) => {
    if (clockType === "minutes") {
      if (timeValue === 0 && timeValue === 30) {
        return true;
      } else {
        return 0;
      }
    }

    return false;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label="Pick a time"
        value={value}
        onChange={(newValue) => {
          // Ensure value is not null and minutes are 00 or 30

          if (
            newValue &&
            (newValue.minute() === 0 || newValue.minute() === 30)
          ) {
            setValue(newValue.second(0));
            handleSelectedTime({ value });
          }
        }}
        minutesStep={30}
        shouldDisableTime={shouldDisableTime}
        viewRenderers={{
          hours: renderTimeViewClock,
          minutes: renderTimeViewClock,
        }}
        ampm={true}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
    </LocalizationProvider>
  );
}
