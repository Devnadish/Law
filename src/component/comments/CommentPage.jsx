import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Comment from "./Comment";
import supabase from "../../logic/database/supabase";
import {FORMATDATE} from "../../logic/util"
import  Loader  from "../loader/Loader"
function CommentPage({
  cId,
  comments,
  setComments,
  comment,
  setComment,
  fechdata,
  setLoading,loading
}) {
 
  // function CommentPage( {cId} ) {
  //   const [comments,setComments]=useState([])
  //   const [comment,setComment]=useState("")
  //   const fechdata=async ()=>{
  //       const { data, error } = await supabase.from('clientComment').select('*').eq("client_id",cId);
  //       if (data.length===0){  toast.info("لاتوجد ملاحظات ") }else{
  //           setComments(data)
  //       }
  //   }
  useEffect(() => {
    setLoading(true)
     fechdata();
     setLoading(false)
  }, [comment]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "65vh",
          display: "flex",
          border: "1px solid #E7EBF0",
          margin: "1rem auto",
        }}
      >
        <BodyItem data={comments}   setLoading={setLoading} loading={loading}/>
        
      </Box>
    </>
  );
}
export default CommentPage;

/* ------------------------------------------------------------------------------ */

const BodyItem = ({  data  }) => {
  
  return (
    <>
      {
      data?.length === 0 ? (
        <NoNote record={data?.length}  />
      ) : 
      (
        <LoopInData data={data}     />
      )
      }
    </>
  );
};

function LoopInData({ data  }) {
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        backgroundColor: "white",
        width: "100%",
        overflowY: "auto",
        borderRadius: "8px",
        m: 0.5,
        position: "relative",
      }}
    >
      {data?.map((el) => {
        return (
          <React.Fragment key={el.id}>
            <Comment
              comment={el.comment}
              commentId={el.id}
              date={FORMATDATE(el.created_at)}
            />
          </React.Fragment>
        );
      })}
       
    </Box>
  );
}


const NoNote = ({record,loading}) => {
 
 
   
  return (
    <>
      <Box
        sx={{
          // backgroundColor: "red",
          width: "100%",
          backgroundImage: "url(/img/nodata.svg)",
          backgroundRepeat:"no-repeat",
          backgroundPosition:"center",
          backgroundSize:"80%"
          
        }}
      >
     
      
 

      </Box>
    </>
  );
};