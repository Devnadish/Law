import React, { useState,useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import supabase from "../../logic/database/supabase";
import { InpuText } from "../../component/inputText/InpuText";

import {ImUpload} from "react-icons/im"
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";


export const NewAttachement = ({ cId ,getImages}) => {
  const [attName, setAttName] = useState();
  const [attDesc, setAttDesc] = useState("");
  const [ImgToUpload, setImgToUpload] = useState("");
  const [ImgNameToUpload, setImgNameToUpload] = useState("");
  const [imgName, setImgName] = useState();
  const [loading, setLoading] = useState(false);
  
  const imageInput=useRef()

  async function uploadImage(e) {
    e.preventDefault();
    let file = e.target.files[0];
    setImgToUpload(file);
    setImgName(file.name)
    setImgNameToUpload(cId + "/" + "CIL_"+uuidv4());
    console.log(ImgToUpload, ImgNameToUpload);
  }

  const addAttatchmentCounter=async (cId)=>{
    const { data } =  await supabase.from('clients').select().eq("id", cId)
    let counter=data[0]?.has_attatchment+1
    const { data:cmtUpdated,error } = await supabase.from('clients').update({ has_attatchment : counter }).eq("id", cId).select()
    console.log(cmtUpdated)
      /* change the connter Pure Js By Element Id This For Note Conter */
      const AttaCounter = document.getElementById("atta"+cId);
      AttaCounter.innerHTML=counter
    
}



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imgName) {
      toast.warn("لايوجد مرفق");
      return
    }
    if (!attName) {
      toast.warn("لايوجد اسم للمرفق");
      return
    }
    setLoading(true)
    const { data: imgX, error: imgXError } = await supabase.storage
      .from("law")
      .upload(ImgNameToUpload, ImgToUpload);

console.log({imgX},{imgXError})

    const { data, error } = await supabase
      .from("client_attachment")
      .insert([
        {
          client: cId,
          name: attName,
          description: attDesc,
          link: ImgNameToUpload,
        },
      ])
      .select();


      getImages(cId)
      addAttatchmentCounter(cId)
      setLoading(false)
  };

  return (
    <>
      <Typography variant="h4" fontFamily={"NX"}>
        المرفقات
      </Typography>
      {/* <form
              onClick={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                margin: "auto",
              }}
            > */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          gap: "1rem",
          width: "100%",
        }}
      >
        <InpuText
          inputName={"ClientName"}
          inputLabel={"الاسم"}
          colorFont={"grey"}
          fx={true}
          txWidth={"50%"}
          InputValue={attName}
          onChangeEvent={setAttName}
        />
        <InpuText
          inputName={"ClientId"}
          inputLabel={"الوصف"}
          colorFont={"grey"}
          fx={true}
          txWidth={"50%"}
          InputValue={attDesc}
          onChangeEvent={setAttDesc}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          gap: "1rem",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          p: 1,
          borderBottom: "10px solid",
          backgroundColor: "rgba(0,0,0,.2)",
        }}
      >
        <Box
          sx={{
            boxShadow: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "55px",
          }}
        >
          <label
            htmlFor="ff"
            style={{
              width: "100%",
              height: "100%",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography fontFamily={"NX"}>صورة المرفق</Typography>
              <Typography
                // variant="p"
               
                sx={{
                  fontFamily:"NX",
                  fontSize:".7rem",
                  alignSelf:"flex-end",
                  color:"rgba(0,0,0,0.5)",
                  mr:1

                }}
                
              >
                {imgName}
              </Typography>
            </Box>
          </label>
        </Box>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={(e) => uploadImage(e)}
          ref={imageInput}
          id="ff"
          hidden
        />

<LoadingButton
                  loading={loading}
                  variant="contained"
                  fullWidth
                  loadingIndicator={
                    <Typography color={"yellow"} fontFamily={"NX"}>جاري الحفظ</Typography>
                  }
                  loadingPosition="end"
                  endIcon={<ImUpload color={"white"} />}
                  // type="submit"
                  onClick={handleSubmit }

                >
                  <Typography fontFamily={"NX"}> اضافة المرفق </Typography>
                </LoadingButton>






        {/* <Button variant="contained" onClick={handleSubmit}>
          <Typography fontFamily={"NX"}>اضافة المرفق</Typography>
        </Button> */}
      </Box>
      {/* </form> */}
    </>
  );
};
