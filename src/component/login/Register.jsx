import React,{useState,useEffect} from 'react'
import {Box, TextField, Typography} from '@mui/material';
import {FiUserPlus} from "react-icons/fi"
import LoadingButton from '@mui/lab/LoadingButton';
import supabase from '../../logic/database/supabase';
import { toast } from 'react-toastify';
import { checkBeforeSave } from '../../validation/register';
import ErorrBox from '../ErrorBox/ErorrBox';
import { useNavigate } from 'react-router-dom';
import ImagePreivew from '../imagePreview/ImagePreivew';
import Resizer from "react-image-file-resizer";

function Register() {
    const [userName, setUserName] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userImage, setUserImage] = useState("")
    const [loading,setLoading]=useState(false)
    const [currentErrors, setCurrentErrors] = useState([]);
    const [isErrors, setIsErrors] = useState(false);
    const navigate = useNavigate();
/* ---------------------------------------------------------- */

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      50,
      50,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });



const handleRegestration=async (event) => {
    event.preventDefault()
    let formData ={
        name: event.target[0].value,
        phone: event.target[2].value,
        email: event.target[4].value,
        password: event.target[6].value
    }
/* ------------------------ Validation Form */    
    const isDataValid = await checkBeforeSave(formData)
    if (isDataValid.length > 0) {
        setCurrentErrors(isDataValid)
    setIsErrors(true)
     return;
   }else{
    setIsErrors(false)
   }
/* ------------------------ check if User Exist */        
const { data:checkUser } = await supabase.from("user").select().eq("phone", userPhone)    
    if (checkUser.length===0){
        setLoading(true)
        const { data, error } = await supabase.from('user').insert([{ name: userName, phone: userPhone,email: userEmail,password:userPassword}]);
        handleUserImage()
        setLoading(false)
        navigate("/")
        toast.success("قم بالدخول واستمتع معنا")
    }else{
        toast.error("الرقم محجوز من قبل")
    }
}

const handleUserImage=async (e)=>{
  const image = await resizeFile(userImage);
  // console.log(image);
  setUserImage(image)
  
const {error}= await supabase.storage.from("leno/avatar").upload(`${userPhone}.jpg`,userImage, {
  cacheControl: '3600',
  upsert: true
})
if(error)  {
  console.log("Error upload userImage")
}
}
useEffect(()=>{console.log(userImage)},[userImage])
  return (
    <>
      <form style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}} onSubmit={handleRegestration}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            border: "1px solid #ccc",
            padding: "2rem",
            width: "80%",
            backgroundColor: "rgba(255,255,255,1)",
            boxShadow: 1,
            borderRadius: 2,
          }}
        >
          <TextField
          autoComplete='off'
            size="small"
            name='name'
            onChange={(e) => setUserName(e.target.value)}
            label={<Typography fontFamily={"NX"}>الاسم</Typography>}
            variant="outlined"
            InputProps={{
              inputProps: {
                style: { textAlign: "right" },
              },
            }}
          />
          <TextField
          autoComplete='off'
            size="small"
            name="phone"
            onChange={(e) => setUserPhone(e.target.value)}
            label={<Typography fontFamily={"NX"}> الجوال</Typography>}
            variant="outlined"
            InputProps={{
              inputProps: {
                style: { textAlign: "center" },
              },
            }}
          />
          <TextField
          autoComplete='off'
            size="small"
            name="email"
            onChange={(e) => setUserEmail(e.target.value)}
            label={<Typography fontFamily={"NX"}> الايميل</Typography>}
            variant="outlined"
            InputProps={{
              inputProps: {
                style: { textAlign: "center" },
              },
            }}
          />
          <TextField
          autoComplete='off'
            size="small"
            name="password"
            onChange={(e) => setUserPassword(e.target.value)}
            label={<Typography fontFamily={"NX"}> كلمة السر</Typography>}
            variant="outlined"
            type={"password"}
            InputProps={{
              inputProps: {
                style: { textAlign: "center" },
              },
            }}
          />
          <ImagePreivew setImage={setUserImage}/>
          <LoadingButton
            loading={loading}
            variant="contained"
            // loadingIndicator={  <Typography fontFamily={"NX"}>جاري الحفظ</Typography>}
            loadingPosition="start"
            startIcon={<FiUserPlus />}
            type="submit"
            // onClick={handleRegestration }
          >
            <Typography fontFamily={"NX"}>تسجيل</Typography>
          </LoadingButton>
          {isErrors && <ErorrBox errorInfo={currentErrors} setIsErrors={setIsErrors}/>}
        </Box>

      </form>
    </>
  );
}

export default Register