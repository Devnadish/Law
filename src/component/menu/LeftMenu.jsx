import React from "react";
import Logo from "../logo/Logo";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const LeftMenu = () => {
  return (
    <>
      <Box
        sx={{
          width: {xs:"15%",sm:"100%"},
          height: {xs:"56px",sm:"100px"},
          display: "flex",

          justifyContent: "center",
          alignItems: "center",

          // backgroundColor:"yellow"
        }}
      >
        <Link to={"/"}>

          <Logo />
        </Link>
      </Box>
    </>
  );
};
