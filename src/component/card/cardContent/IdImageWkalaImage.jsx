import React,{useState} from "react";
import { Box, Button, Typography } from "@mui/material";

import  DiloagShow from "../../dailog/DiloagShow"
import WriteComment from "../../comments/WriteComment"
import CommentPage from "../../comments/CommentPage"

import supabase from '../../../logic/database/supabase';
import {FaCommentSlash,FaComment} from "react-icons/fa"


import {BsCardImage} from "react-icons/bs"
import {MdOutlineCancelPresentation} from "react-icons/md"
import ClientAttatchment from "../../attachment/ClientAttatchment"


export function IdImageWkalaImage({ cId,cName,hasComment,   theme}) {
  const [open,setOpen]=useState(false)
  const [gallaryOpen,setGallaryOpen]=useState(false)

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
          // endIcon=
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
          <Typography fontFamily={"NX"} lineHeight={"1"} fontSize={".8rem"}>
            ملاحظات
          </Typography>
        

          {hasComment === 0 ? (
            <>
              <FaCommentSlash color={theme.yellowColor} />
            </>
          ) : (
            <>
              <Typography
            fontFamily={"NX"}
            lineHeight={"1"}
            fontSize={".8rem"}
            sx={{ border: "1px solid rgba(255,255,255,.3)", fontSize:".6rem", px: .5,py:.5 ,borderRadius:1,color:"rgba(255,255,255,.5)" }}
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
          {hasComment === 0 ? (
            <>
              <MdOutlineCancelPresentation color={theme.yellowColor} />
            </>
          ) : (
            <>
              <Typography
            fontFamily={"NX"}
            lineHeight={"1"}
            fontSize={".8rem"}
            sx={{ border: "1px solid rgba(255,255,255,.3)", fontSize:".6rem", px: .5,py:.5 ,borderRadius:1,color:"rgba(255,255,255,.7)" }}
          >
            {hasComment}
          </Typography>
              <BsCardImage color={theme.barndbaColor}  size={"1rem"}/>
            </>
          
              
            
          )}
        </Button>
        {/* <ShowImg
            txt={"الهوية"}
            icon={<BsFillImageFill color="gray" size={"1rem"} />}
          />
          <ShowImg
            txt={"الوكالة"}
            icon={<BsFillImageFill color="gray" size={"1rem"} />}
          /> */}
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
          <Note cId={cId} />
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

const Note = ({cId}) => {
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
        <WriteComment cId={cId} commentTilte={"اضف ملاحظاتك"} fechdata={fechdata}/>
        <CommentPage setLoading={setLoading} loading={loading} cId={cId} comments={comments} setComments={setComments} comment={comment} setComment={setComment} fechdata={fechdata}/>
      </Box>
    </>
  );
};
