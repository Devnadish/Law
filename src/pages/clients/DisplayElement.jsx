import React from 'react';
import { Box, Typography } from '@mui/material';

export const DisplayElement = ({ title = "الاسم", dataTitle = "خالد علي", titleColor = "white", borderColor = "white" }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          minWidth: "200px",
          width: "100%",
          bgcolor: "grey",
          margin: "auto",
          minHeight: "40px",
          alignItems: "center",
          border: "1px solid",
          borderColor: borderColor,
          borderRadius: .5,
          // px: 1,
          backgroundColor: "#4b4b4b",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#696969",
            minHeight: "40px",
            border: "1px solid ",
            borderColor: borderColor,
            px: 1,
            mr: 2
          }}
        >
          <Typography sx={{ color: titleColor, fontFamily: "NX" }}>
            {title}
          </Typography>
        </Box>

        <Typography fontFamily={"NX"}>{dataTitle}</Typography>
      </Box>
    </>
  );



};
