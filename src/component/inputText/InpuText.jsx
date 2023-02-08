import React from 'react';
import { TextField, Typography } from '@mui/material';
import { useTheme } from 'styled-components';

export const InpuText = ({ inputName, inputLabel, onChangeEvent, InputValue, colorFont, fx = false, txWidth = "100%", mxLength,Fxdisabled=false }) => {
  const theme = useTheme();

  const handleOnChange = (event) => {
    // console.log({InputValue})
    onChangeEvent(pre => event.target.value);
  };
  return (
    <>

      <TextField
        autoComplete="off"
        size="small"
        name={inputName}
        color="warning"
        variant="filled"
        focused={fx}
        disabled={Fxdisabled}
        value={InputValue}
        onChange={(event) => handleOnChange(event)}
        label={<Typography fontFamily={"NX"} color={"whitesmoke"}>
          {inputLabel}
        </Typography>}
        sx={{ width: { xs: "100%", sm: txWidth }, backgroundColor: theme.soft }}
        InputProps={{
          inputProps: {
            maxLength: mxLength,
            style: {
              textAlign: "right",
              color: colorFont,
              fontFamily: "NX",
              fontSize: ".9rem",
            },
          },
        }} />
    </>
  );
};
