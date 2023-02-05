import React from 'react'
import styled from "styled-components";
import { Box } from '@mui/material';
import { Link } from "react-router-dom";

const SideWrapper = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 56px;
  height: 100%;
  /* background-color: rgba(29, 29, 31); */
  background-color:#f0f014;
  color: #ffffff;
  min-width: 0px;
  z-index: 100;
  /* box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5); */
`;
 
 const MenuImageWraper=styled.div`
 width: 30px;
 height: 30px;
 cursor: pointer;
 `;

const Menu=styled.div`
width: 30px;
height: 30px;
cursor: pointer;
`;



 const  MenuImage = styled.img`
 /* transform: rotate(90deg); */
max-width: 100%;
max-height: 100%;
`;

function SideMenu() {
  return (
    <SideWrapper>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link to={"/grap"}>
          <MenuImageWraper>
            <MenuImage src="/images/logo-assets/grapeLogo1.png" />
          </MenuImageWraper>
        </Link>
        <Link to={"/crumb"}>
          <MenuImageWraper>
            <MenuImage src="/images/logo-assets/crom.png" />
          </MenuImageWraper>
        </Link>
        <Link to={"/backary"}>
          <MenuImageWraper>
            <MenuImage src="/images/logo-assets/muagnat.png" />
          </MenuImageWraper>
        </Link>
        <Link to={"/frozen"}>
          <MenuImageWraper>
            <MenuImage src="/images/logo-assets/mfrznat.png" />
          </MenuImageWraper>
        </Link>
      </Box>
    </SideWrapper>
  );
}

export default SideMenu