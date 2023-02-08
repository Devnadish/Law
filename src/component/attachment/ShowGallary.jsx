import React, { useState,useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import supabase from "../../logic/database/supabase";
import { CDNURL } from "./ClientAttatchment";
import DiloagShow from "../dailog/DiloagShow"
import {ImageLoader} from "../loader/Loader"
import { ShowSingleImage } from "./ShowSingleImage";
import { ImageInfo } from "./ImageInfo";


export const ShowGallary = ({ data,getImages,cId }) => {
  const [imageLink, setImageLink] = useState("");
  const [showImage,   setShowImage] = useState(false);
  const [loadImg, setLoadImg] = useState(false);
  const [loadsingleImg, setLoadsingleImg] = useState(true);


  const handleShowImage=async(imageId)=>{
    setImageLink("")
    const {data}=await supabase.from("client_attachment").select().eq("id",imageId)
    // const {data}=await supabase.from("client_attachment").select().match({id:imageId,delete:"n"})
    setImageLink(pre=>data)
    setShowImage(true)
  }

  return (
    <>
      {data.length !== 0 ? (
        <Typography
          variant="h5"
          sx={{
            fontFamily: "NX",
            color: "rgba(0,0,0,.5)",
          }}
          textAlign="center"
        >
          عرض المرفقات
        </Typography>
      ) : (
        <>
          <Box  sx={{ width: "100%" }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "NX",
                color: "rgba(0,0,0,.5)",
                borderBottom: "4px solid",
                width: "fit-content",
                margin: "auto",
              }}
              textAlign="center"
            >
              لا توجد مرفقات
            </Typography>
          </Box>
        </>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
          margin: "auto",
        }}
      >
        {data.map((image) => {
          return (
            <React.Fragment key={image.id}>
              <Box
                sx={{
                  maxWidth: "320px",
                  minWidth: "80px",
                  border: "1px solid",
                  borderColor: "rgba(0,0,0,.5)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: 2,
                  width: "112px",
                  position: "relative",
                  cursor: "pointer",
                }}
                onClick={() => handleShowImage(image.id)}
              >
                {loadsingleImg && (
                  <Box
                    sx={{
                      backgroundImage: "url(/img/drawingLoader.gif)",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
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
                )}

                <img
                  src={CDNURL + "/" + image.link + "?width=100&height=100"}
                  width="100%"
                  loading="lazy"
                  style={{
                    maxWidth: "112px",
                    width: "100%",
                    borderRadius: "8px 8px 0px 0px",
                    objectFit: "cover",
                  }}
                  onLoad={() => {
                    setLoadsingleImg(false);
                  }}
                />
                <ImageInfo
                  imageName={image.name}
                  imageDescription={image.description}
                />
              </Box>
            </React.Fragment>
          );
        })}
      </Box>
      {showImage ? (
        <DiloagShow
          open={showImage}
          toggle={setShowImage}
          titleColor={"green"}
          title={
            <Typography 
         
         sx={{
          color:"white" ,
          fontFamily:"NX",
          fontSize:".8rem"
         }}>
           {imageLink[0]?.name}
         </Typography>}
          Xfullscreen={false}
        >
          <ShowSingleImage imageLink={imageLink} setLoadImg={setLoadImg} setShowImage={setShowImage} getImages={getImages} cId={cId}/>
        </DiloagShow>
      ) : null}
      {loadImg && <ImageLoader />}
    </>
  );
};
