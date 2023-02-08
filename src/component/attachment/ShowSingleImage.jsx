import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { CDNURL } from "./ClientAttatchment";
import { AiTwotoneDelete } from "react-icons/ai";
import supabase from "../../logic/database/supabase";
import ConfirmDelete from "../dailog/ConfirmDelete"


export const ShowSingleImage = ({ imageLink, setShowImage,getImages,cId}) => {
  const [loadImgX1, setloadImgX1] = useState(true);
  const [delConfrmation,setDelConfrmation]=useState(false)
  const [open,setOpen]=useState(false)
  const removeFromStorage=async()=>{
    const { data,error } = await supabase.storage.from("law").remove([imageLink[0]?.link]);
    if(error)console.log(error)
  
 }
 
 const removeFromDb=async()=>{
  const {data}=await supabase.from("client_attachment").update({"delete":"yes"}).eq("id",imageLink[0]?.id)
 
 }

 const decraceCounterDb=async()=>{
    const { data } =  await supabase.from('clients').select().eq("id",cId)
    let counter=data[0]?.has_attatchment-1
    const { data:cmtUpdated,error } = await supabase.from('clients').update({ has_attatchment : counter }).eq("id",cId).select()
 }

 const refreshMainGallery=async ()=>{ await getImages(cId)}
 const deleteAction = async () => {
    // alert("will delete")
      await removeFromStorage()
      await removeFromDb()
      await decraceCounterDb()
      await refreshMainGallery()

 };




 
 const handleDelete = async () => {
  /* open Delete DailogeBox */
  setOpen(true)
   
 };

 


  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "40px",
          p: 1,
          borderBottom: "2px solid",
          borderColor: "rgba(15, 65, 0, 0.5)",
          mb: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "NX",
            color: "rgba(0,0,0,.6)",
            fontSize: "1rem",
          }}
        >
          {imageLink[0]?.description}
        </Typography>
        <IconButton onClick={handleDelete}>
          <AiTwotoneDelete color={"red"} />
        </IconButton>
      </Box>
      <Box
        sx={{
          maxWidth: "100%",
          minWidth: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <img
          src={CDNURL + "/" + imageLink[0]?.link}
          style={{
            maxWidth: "100%",
            minWidth: "300px",
            height: "auto",
            objectFit: "cover",
            overflow: "hidden",
          }}
          onLoad={() => {
            setloadImgX1(false);
          }}
        />
      </Box>
      {loadImgX1 ? (
        <Box
          sx={{
            backgroundImage: "url(/img/drawingLoader.gif)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "NX",
              color: "rgba(0,0,0,.5)",
              fontSize: ".7rem",
            }}
          >
            تحميل المرفق
          </Typography>
        </Box>
      ) : null}
      {open ? (
        <ConfirmDelete
          open={open}
          toggle={setOpen}
          deleteAction={deleteAction}
          setShowImage={setShowImage}
       >asdasd</ConfirmDelete>
      ) : null}
    </>
  );
};
