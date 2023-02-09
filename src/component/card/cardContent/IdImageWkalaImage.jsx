import React,{useState,useRef} from "react";
import { Box, Button, Typography } from "@mui/material";

import  DiloagShow from "../../dailog/DiloagShow"
import WriteComment from "../../comments/WriteComment"
import CommentPage from "../../comments/CommentPage"

import supabase from '../../../logic/database/supabase';
import {FaCommentSlash,FaComment} from "react-icons/fa"


import {BsCardImage} from "react-icons/bs"
import {MdOutlineCancelPresentation} from "react-icons/md"
import ClientAttatchment from "../../attachment/ClientAttatchment"


export function IdImageWkalaImage({ cId,cName,hasComment, hasattatchment,  theme}) {
  const [open,setOpen]=useState(false)
  const [gallaryOpen,setGallaryOpen]=useState(false)
  const noteRef=useRef()

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
          width: "100%",
        }}
      >
        {/* <Counter badgeContent={hasComment}> */}

        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: theme.soft,
            position: "relative",
            width: "50%",
          }}
          fullWidth
        >
          <Typography fontFamily={"NX"} lineHeight={"1"} fontSize={".8rem"} ref={noteRef}>
            ملاحظات
          </Typography>
        

          {hasComment === 0 ? (
            <>
             <Typography
              id={"note"+cId}
            fontFamily={"NX"}
            lineHeight={"1"}
            fontSize={".8rem"}
            sx={{ border: "1px solid rgba(255,255,255,.3)", fontSize:".6rem", px: .5,py:.5 ,borderRadius:1,color:"rgba(255,255,255,.9)" }}
          >
            0
          </Typography>
              <FaCommentSlash color={theme.yellowColor} />
            </>
          ) : (
            <>
              <Typography
              id={"note"+cId}
            fontFamily={"NX"}
            lineHeight={"1"}
            fontSize={".8rem"}
            sx={{ border: "1px solid rgba(255,255,255,.3)", fontSize:".6rem", px: .5,py:.5 ,borderRadius:1,color:"rgba(255,255,255,.9)" }}
          >
            {hasComment}
          </Typography>
              <FaComment color={theme.barndbaColor} />
            </>
          
              
            
          )}
        </Button>

        <Button
          variant="contained"
          onClick={() => setGallaryOpen(true)}
          // endIcon=
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: theme.soft,
            position: "relative",
            width: "50%",
          }}
        >
          <Typography fontFamily={"NX"} lineHeight={"1"} fontSize={".8rem"}>
            المرفقات
          </Typography>
          {hasattatchment === 0 ? (
            <>
             <Typography
              id={"atta"+cId}
            fontFamily={"NX"}
            lineHeight={"1"}
            fontSize={".8rem"}
            sx={{ border: "1px solid rgba(255,255,255,.3)", fontSize:".6rem", px: .5,py:.5 ,borderRadius:1,color:"rgba(255,255,255,.7)" }}
          >
            0
          </Typography>
              <MdOutlineCancelPresentation color={theme.yellowColor} />
            </>
          ) : (
            <>
              <Typography
              id={"atta"+cId}
            fontFamily={"NX"}
            lineHeight={"1"}
            fontSize={".8rem"}
            sx={{ border: "1px solid rgba(255,255,255,.3)", fontSize:".6rem", px: .5,py:.5 ,borderRadius:1,color:"rgba(255,255,255,.7)" }}
          >
            {hasattatchment}
          </Typography>
              <BsCardImage color={theme.barndbaColor}  size={"1rem"}/>
            </>
          )}
        </Button>
        
      </Box>

      {open ? (
        <DiloagShow
          open={open}
          toggle={setOpen}
          title={
            <Box sx={{ minWidth: "320px" }}>
              <Typography
                fontFamily={"NX"}
                fontSize={".8rem"}
                color={"whitesmoke"}
              >
                {cId} / {cName}
              </Typography>
            </Box>
          }
        >
            
          <Note cId={cId} noteRef={noteRef}/>
        </DiloagShow>
      ) : null}
      {/* --------------------------- */}
      {gallaryOpen? (
        <DiloagShow
          open={gallaryOpen}
          toggle={setGallaryOpen }
          title={
            <Box sx={{ minWidth: "320px" }}>
              <Typography
                fontFamily={"NX"}
                fontSize={".8rem"}
                color={"whitesmoke"}
              >
                {cId} / {cName}
              </Typography>
            </Box>
          }
        >
          
          <ClientAttatchment cId={cId} />
        </DiloagShow>
      ) : null}
    </>
  );
}

const Note = ({cId,noteRef}) => {
  const [comments,setComments]=useState([])
  const [comment,setComment]=useState("")
  const [loading,setLoading]=useState(false)
  const fechdata=async ()=>{
    setLoading(true)
      const { data, error } = await supabase.from('clientComment').select('*').eq("client_id",cId);
      if (data?.length!==0){    setComments(data)    }
  }

  return (
    <>
      <Box>
        <WriteComment cId={cId} commentTilte={"اضف ملاحظاتك"} fechdata={fechdata} noteRef={noteRef}/>
        <CommentPage setLoading={setLoading} loading={loading} cId={cId} comments={comments} setComments={setComments} comment={comment} setComment={setComment} fechdata={fechdata}/>
      </Box>
    </>
  );
};
