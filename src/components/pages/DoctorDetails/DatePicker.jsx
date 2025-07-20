import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function PatientDatePicker({ date, setDate }) {
  const value = date ? dayjs(date) : null;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Date"
        value={value}
        onChange={(newValue) => {
          setDate(newValue ? newValue.format("YYYY-MM-DD") : "");
        }}
      />
    </LocalizationProvider>
  );
}

export default PatientDatePicker;
