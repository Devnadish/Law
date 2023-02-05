import React,{useEffect} from 'react'
import { Box, Typography } from '@mui/material'
import {TfiCommentsSmiley} from "react-icons/tfi"
import { Link } from 'react-router-dom';



function Comments({commentCount}) {
  
  
  
  return (
    <Link to={"/commentpage"}>
      <Box
        sx={{
          position: "fixed",
          top: "60px",
          left: "8px",
          width: "40px",
          height: "50px",
          boxShadow: 1,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#BEF264",
          p: 1,
          cursor: "pointer",
          "&:hover": {
            boxShadow: 4,
          },
        }}
      >
        <TfiCommentsSmiley color={"blue"} size={"25px"} />
        <Typography fontSize={"12px"} color={"black"}>
             {commentCount}
        </Typography>
      </Box>
    </Link>
  );
}

export default Comments