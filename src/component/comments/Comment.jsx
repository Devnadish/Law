import React,{useState,useEffect} from 'react';
import { Box, Typography } from "@mui/material";
import DiloagShow from "../dailog/DiloagShow"
import supabase from '../../logic/database/supabase';
import {FORMATDATE} from "../../logic/util"
const Comment=({comment="ملاجظات", date="10/10/2023",commentId})=>{
  const [open,setOpen]=useState(false)
    return (
      <>
        <Box
          sx={{
            width: "100%",
            borderBottom: "1px solid #364d68",
            wordBreak: "break-all",
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor:"pointer"
          }}
          onClick={()=>setOpen(true)}
        >
          <Box sx={{
              width: "100%",
              ml: "5px",
              borderRight: "1px solid #E7EBF0",
              p: 1,
            }} >
            <Typography
              variant="span"
              fontFamily={"NX"}
              fontSize={".85rem"}
              color={"text.secondary"}
              sx={{wordBreak:"break-word"}}
              p={0.5}
            >
              {comment}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography
                variant="span"
                fontFamily={"NX"}
                fontSize={"10px"}
                color={"text.secondary"}
                // p={0.5}
              >
                {date}
              </Typography>
              
              
            </Box>
          </Box>
        </Box>
        {open ? <DiloagShow open={open} toggle={setOpen} titleColor={"#ccc"}><ShowComment commentId={commentId}/></DiloagShow>:null}
      </>
    );
  }

  export default Comment


  const ShowComment=({commentId})=>{
    const [cmt,setCmt]=useState("")

    const getData=async()=>{
      const { data } = await supabase.from("clientComment").select('*').eq("id",commentId)
      setCmt(data);
    }
    useEffect(() => {
      getData()
    
      return () => {
        console.log("dead")
      }
    }, [])
    
    return (
      <>
        <Box
          sx={{ display: "flex", flexDirection: "column", minWidth: "320px" }}
        >
          <Typography sx={{ fontFamily: "NX", fontSize: ".9rem",width:"100%",textAlign:"right",p:1,color:"#383838" }}>
            {cmt[0]?.comment}
          </Typography>
          <Typography sx={{ fontFamily: "NX", fontSize: ".7rem",width:"100%",textAlign:"left",p:1,color:"#b6b5b5" }}>
            {FORMATDATE(cmt[0]?.created_at)}
          </Typography>
        </Box>
      </>
    );
  }
