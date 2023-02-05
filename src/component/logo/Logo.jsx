import { Box } from "@mui/material";
import styled from "styled-components";

const  LogoImage = styled.img`
max-width: 100%;
max-height: 100%;
`;



 
function Logo() {
  return (
    <>
      <Box
        sx={{
          width:"100%",
          display:"flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LogoImage src="/vite.svg" />
      </Box>
    </>
  )
}
export default Logo