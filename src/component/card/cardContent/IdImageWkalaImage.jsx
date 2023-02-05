import React,{useState} from "react";
import { Box, Button, Typography } from "@mui/material";
import { BsFillImageFill } from "react-icons/bs";
import { ShowImg } from "./ShowImg";
import  DiloagShow from "../../dailog/DiloagShow"
import WriteComment from "../../comments/WriteComment"
import CommentPage from "../../comments/CommentPage"
import { toast } from "react-toastify";
import supabase from '../../../logic/database/supabase';

export function IdImageWkalaImage({ cId,cName}) {
  const [open,setOpen]=useState(false)

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
        <Button variant="contained" onClick={() => setOpen(true)}>
          <Typography fontFamily={"NX"} lineHeight={"1"} fontSize={".8rem"}>
            ملاحظات
          </Typography>
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 1,
          }}
        >
          <ShowImg
            txt={"الهوية"}
            icon={<BsFillImageFill color="gray" size={"1rem"} />}
          />
          <ShowImg
            txt={"الوكالة"}
            icon={<BsFillImageFill color="gray" size={"1rem"} />}
          />
        </Box>
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
