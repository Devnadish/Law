import React,{useState} from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import {RiLockPasswordFill} from "react-icons/ri"
import {useUser} from "../context/UserContext"
import supabase from '../../logic/database/supabase';
import { toast } from 'react-toastify';
import { checkPassword } from '../../validation/register';

function NewPassword() {
  const {user}=useUser()
  const [oldPass,setOldPass]=useState("")
  const [newPass,setNewPass]=useState("")
  const [dbPass,setDbPass]=useState("")




  


  const handleChangePassword=async (event)=>{
  
  //     event.preventDefault()
  //     let formData ={
  //         password: event.target[6].value
  //     }


  // /* ------------------------ Validation Form */    
  //     const isDataValid = await checkBeforeSave(formData)
  //     if (isDataValid.length > 0) {
  //         setCurrentErrors(isDataValid)
  //     setIsErrors(true)
  //      return;
  //    }else{
  //     setIsErrors(false)
  //    }
 


  console.log(newPass)
    if (newPass === null || newPass === undefined || newPass === "") {
      toast.error("كلمة الشر الجديدة غير متوافقة مع الشروط");
      return;
    }
    const { data, error } = await supabase.from("user").select().eq("phone", user.phone)
      if(error){ console.log(error)}
      if (data){setDbPass(data[0].password)}
      if (dbPass === oldPass) {

       
             const { error:updateError } = await supabase.from('user').update({ password : newPass }).eq("phone", user.phone)
             toast.success("تم تغيير كلمة السر")
      } else {
       toast.warn("كلمة السر القديمة غير صحيحية")
      }
      
      

      


      // if (data){ 
      //       counter=data[0]?.voucer +1
      //        const { error:updateError } = await supabase.from('counter')
      //        .update({ voucer: counter })
      //        .eq("type", myType)/* .then(()=>{return  counter}) */
      //        return  counter
      // }
  }
  return (
    <>
     
   
    <Box
      sx={{
        width: "90%",
        mt: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: 2,
        maxWidth:"350px"
      }}
    >
      <TextField
        autoComplete="off"
        size="small"
        name="oldPass"
        value={oldPass}
        onChange={(e) => setOldPass(e.target.value)}
        label={<Typography fontFamily={"NX"}>كلمة السر القديمة</Typography>}
        fullWidth
        variant="outlined"
        InputProps={{
          inputProps: {
            style: { textAlign: "right" },
          },
        }}
      />
      <TextField
        autoComplete="off"
        size="small"
        name="newPass"
        value={newPass}
        onChange={(e) => setNewPass(e.target.value)}
        label={<Typography fontFamily={"NX"}>كلمة السر الجديدة</Typography>}
        fullWidth
        variant="outlined"
        InputProps={{
          inputProps: {
            style: { textAlign: "right" },
          },
        }}
      />
      <Button variant="contained" color='warning' startIcon={<RiLockPasswordFill/>} onClick={handleChangePassword}>
        <Typography fontFamily={"NX"}>كلمة السر الجديدة حفظ</Typography>
      </Button>
    </Box>
    </>
  );
}

export default NewPassword