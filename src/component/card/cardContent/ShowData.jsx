import React from "react";
import { Typography, Box } from "@mui/material";


export const ShowData = ({ txt, icon }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          gap: 1,
          width: "100%",
        }}
      >
        {icon}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.5, fontFamily: "NX" }}
        >
          {txt}
        </Typography>
      </Box>
    </>
  );
};
