"use client";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
function PasswordField({ label }) {
  const [visibility, setVisibility] = React.useState(true);
  const handleVisibility = () => {
    setVisibility(!visibility);
  };
  return (
    <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
      <InputLabel
        htmlFor="outlined-adornment-password"
        sx={{ color: "white" }} // Label color
      >
        {label}
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={visibility ? "text" : "password"}
        label="Password"
        sx={{
          color: "white", // Input text color
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // default border
            borderRadius: "10px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
            borderWidth: "2px",
          },

          "& input": {
            color: "white", // Ensures the typed text is white
          },
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={
                visibility ? "hide the password" : "display the password"
              }
              edge="end"
              onClick={handleVisibility}
            >
              {visibility ? (
                <span className="material-icons-outlined">
                  {/* your SVG here */}
                </span>
              ) : (
                <span className="material-icons-outlined">
                  {/* your SVG here */}
                </span>
              )}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default PasswordField;
