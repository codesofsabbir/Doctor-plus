import React from "react";
import TextField from "@mui/material/TextField";
function PhoneField({ value, setValue }) {
  return (
    <TextField
      id="phone-basic"
      label="Phone"
      type="text"
      name="phone"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      variant="outlined"
      inputProps={{
        style: {
          color: "white", // input text color
        },
      }}
      sx={{
        // Input border styles
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "white",
          },
          "&:hover fieldset": {
            borderColor: "white",
          },
          "&.Mui-focused fieldset": {
            borderColor: "white",
          },
        },

        // Label default color and focus color
        "& .MuiInputLabel-root": {
          color: "white", // default
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#1976D2", // on focus
        },

        // Border radius
        "& .MuiOutlinedInput-notchedOutline": {
          borderRadius: "10px",
        },
      }}
      fullWidth
    />
  );
}

export default PhoneField;
