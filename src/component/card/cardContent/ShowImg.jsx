import React from "react";
import { Typography, Box, Button } from "@mui/material";


export const ShowImg = ({ txt, icon }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          // width: "100%",
        }}
      >

        <Button variant="text" startIcon={icon}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            // boxShadow:0,
            borderRadius: 0,
            // backgroundColor:"primary.light",
            minWidth: 0,
            p: 0
          }}>
          <Typography
            variant="body2"
            color="text.main"
            sx={{ lineHeight: 1.5, fontFamily: "NX", fontSize: ".8rem" }}
          >
            {txt}
          </Typography>
        </Button>
      </Box>
    </>
  );
};
