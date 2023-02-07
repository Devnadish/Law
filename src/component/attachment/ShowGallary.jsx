import React, { useState,useEffect } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import supabase from "../../logic/database/supabase";
import { CDNURL } from "./ClientAttatchment";
import DiloagShow from "../dailog/DiloagShow"
import {ImageLoader} from "../loader/Loader"
import {AiTwotoneDelete} from "react-icons/ai"
import { borderBottom } from "@mui/system";

export const ShowGallary = ({ data }) => {
  const [imageLink, setImageLink] = useState("");
  const [showImage,   setShowImage] = useState(false);
  const [loadImg, setLoadImg] = useState(false);
  const [loadsingleImg, setLoadsingleImg] = useState(true);


  const getLink = (xx) => {
    const { data: xxData, error: xxError } = supabase.storage
      .from("law")
      .getPublicUrl(xx, {
        transform: {
          width: 200,
          height: 600,
        },
      });
    // console.log(xxData)
    return xxData;
  };

  const handleShowImage=async(imageId)=>{
    
    // setLoadImg(true)
    // setImageLink("")
    setShowImage(true)
    const {data}=await supabase.from("client_attachment").select().eq("id",imageId)
    setImageLink(data)

  
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
          <Box  sx={{
         width: "100%",
        //  backgroundImage: "url(/img/drawingLoader.gif)",
         backgroundRepeat:"no-repeat",
         backgroundPosition:"center",
         backgroundSize:"cover"
         
        }}>
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
          title={imageLink[0]?.name}
          Xfullscreen={false}
        >
          <ShowSingleImage imageLink={imageLink} setLoadImg={setLoadImg}/>
        </DiloagShow>
      ) : null}
      {loadImg && <ImageLoader />}
    </>
  );
};



const ShowSingleImage=({imageLink,setLoadImg})=>{
 
  return (
    <>
    <Box sx={{
          
          display: "flex",
          justifyContent:"space-between",
          alignItems: "center",
          width: "100%",
          height:"40px",
          p:1,
          borderBottom:"2px solid",
          borderColor:"rgba(15, 65, 0, 0.5)",
          mb:2
       
        }}>
          <Typography
           sx={{
            fontFamily: "NX",
            color: "rgba(0,0,0,.6)",
            fontSize: "1rem",
          }}
          
           >{imageLink[0]?.description}</Typography>
          <IconButton
       
           ><AiTwotoneDelete color={"red"}/></IconButton>

        </Box>
      <Box
        sx={{
          maxWidth: "100%",
          minWidth: "80px",
          display: "flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems: "flex-start",
          width: "100%",
          // height:"100vh",
          // p:10,
          // backgroundColor:"blue"
          
          
          
        }}
      >
        <img
          src={CDNURL + "/" + imageLink[0]?.link }
          style={{
            maxWidth: "100%",
            minWidth: "300px",
           height:"auto",
            objectFit: "cover",
            overflow:"hidden",
            // borderRadius:"8px"
          
          }}
          // onLoad={()=>{()=>{setLoadImg(false)}}}
        />
          
      </Box>
    </>
  );}

function ImageInfo({ imageName, imageDescription }) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "30px",
        backgroundColor: "rgba(0,0,0,.2)",
        borderRadius: "0px 0px 8px 8px",
        p: 1,
        position:"relative"
      }}
    >
      <Typography
        sx={{
          fontFamily: "NX",
          color: "rgba(0,0,0,.6)",
          fontSize: "1rem",
        }}
      >
        {imageName}
      </Typography>
      <Typography
        sx={{
          fontFamily: "NX",
          color: "rgba(0,0,0,.5)",
          fontSize: ".7rem",
        }}
      >
        {imageDescription}
      </Typography>
    
    </Box>
  );
}
