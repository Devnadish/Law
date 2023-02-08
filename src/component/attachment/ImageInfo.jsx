import React from "react";
import { Box, Typography } from "@mui/material";

export function ImageInfo({ imageName, imageDescription }) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "30px",
        backgroundColor: "rgba(0,0,0,.2)",
        borderRadius: "0px 0px 8px 8px",
        p: 1,
        position: "relative"
      }}
    >
      <Typography
        sx={{
          fontFamily: "NX",
          color: "rgba(0,0,0,.6)",
          fontSize: "1rem",
        }}
      >
        {imageName}
      </Typography>
      <Typography
        sx={{
          fontFamily: "NX",
          color: "rgba(0,0,0,.5)",
          fontSize: ".7rem",
        }}
      >
        {imageDescription}
      </Typography>

    </Box>
  );
}
