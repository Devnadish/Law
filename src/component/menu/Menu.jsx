import React from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { Box } from "@mui/material";
import { MiddleMenu } from "./MiddleMenu";
import { LeftMenu } from "./LeftMenu";
import { useTheme } from 'styled-components';


const SideWrapper = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  background-color: rgba(255, 255, 255, 1);
  color: #ffffff;
  min-width: 0px;
  z-index: 100;
`;

export const MenuImageWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:${({screenSize})=>screenSize ? "row":"column"} ;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  gap:${({screenSize})=>screenSize ? ".5rem":".1rem"};
  /* border:1px solid black; */
`;
export const MenuImage = styled.img`
  max-width: 25px;
  max-height: 25px;
`;

export const BasketMenuImageWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  /* background-color: red; */
`;

function Menu() {

  const theme = useTheme();
  

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection:{xs:"row",sm:"column"},
        width:{xs:"100%",sm:"120px"},
        height: {xs:"56px",sm:"100%"},
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 1,
        boxShadow: 1,
        backgroundColor: theme.barndbaColor,
      }}
    >
  
      <LeftMenu />
      <MiddleMenu />
      {/* <RightMenu /> */}
    </Box>
  );
}
export default Menu;


