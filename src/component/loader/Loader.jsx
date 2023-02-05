
import BounceLoader from "react-spinners/BounceLoader";

import RingLoader from "react-spinners/RingLoader";
import PacmanLoader from "react-spinners/PacmanLoader";



import { Box, Typography } from "@mui/material";

function Loader({color="red"}) {
  return (
    <>
      <Box
        sx={{
          width: "5rem",
          height: "5rem",
          position: "relative",
        }}
      >
        <BounceLoader
          color="#F4D35E"
          size={100}
        />
      </Box>
    </>
  );
}

export default Loader



export const CommentLoader=({color="red"})=> {
  return (
    <>
      <Box
      sx={{
        position: "fixed",
        top: "70px",
        left: "8px",
        width: "40px",
        height: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      >
        <BounceLoader
          color="#BEF264"
          size={40}
          style={{
            display: "inline",
            position: "absolute",
            top: "-5px",
            left: "-5px",
          }}
        />
      </Box>
    </>
  );
}



export const  ImageLoader=({color="#bef264b2"})=> {
  return (
    <>
     
        <RingLoader
          color={color}
          size={250}
          style={{
            display: "inline",
            position: "absolute",
            top: "-5px",
            left: "-5px",
          }}
        />
    
    </>
  );
}




export const  DataLoader=({color="#bef264b2"})=> {
  return (
    <>
     
        <RingLoader
          color={color}
          size={250}
          // style={{
          //   display: "inline",
          //   position: "absolute",
          //   top: "-5px",
          //   left: "-5px",
          // }}
        />
    
    </>
  );
}



export const  Underconstraction=({title,pagename})=> {
  return (
    <>
     <Box sx={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"1rem"}}>
        <PacmanLoader  color="#F4D35E" size={50}/>
        <Typography fontFamily={"CB"} variant="h3" >{pagename}</Typography>
        <Typography fontFamily={"CB"} variant="h3" >{title}</Typography>
</Box>
    
    </>
  );
}
