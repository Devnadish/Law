import React,{useState} from 'react'
import {Box,Button,Fab, TextField, Typography} from '@mui/material';
import {FaUserCircle} from "react-icons/fa"
import DiloagShow  from "../dailog/DiloagShow"
import { Link } from 'react-router-dom';
import {FiUserPlus} from "react-icons/fi"
import {MdLogin} from "react-icons/md"
import supabase from '../../logic/database/supabase';
import { useUser } from '../context/UserContext';
import { toast } from 'react-toastify';
import {setLocalStorage} from "../../logic/logInLogic"



/* ------------------------------------------------------------ */
export default function Login() {
  const [open,setOpen]=useState(false)
  const handlelogin=()=>{setOpen(true)}
  return (
    <>
    <Box sx={{ position:"fixed" ,bottom:"25px",left:"10px"}}>
      <Fab color="#3D4C61" aria-label="add" onClick={handlelogin}>
        <FaUserCircle size={"2.5rem"} />
      </Fab>
    </Box>
    {open && <DiloagShow open={open} toggle={setOpen} titleColor={"#3D4C61"}><LoginControl setOpen={setOpen} /></DiloagShow>}
    </>
  );
}
/* ------------------------------------------------------------ */

const LoginControl = ({setOpen}) => {
const [userName,setUserName]=useState(null)
const [userPass,setUserPass]=useState(null)
const {setUser,setIslogin} = useUser()
/* ------------------- */
const validate=()=>{
  let result=true
  if (userName === "" || userName === null) {
    result = false;
    toast.warn("ادخل اسم المستخدم")
  }
  if (userPass === "" || userPass === null) {
    result = false;
    toast.warn("ادخل كلمة السر")
  }
  return result
}

/* ------------------------------- */
  const loginLogic = async () => {
    if(validate()){
      const { data, error } = await supabase.from("user").select().eq("phone", userName);
      if (error) console.log(error);
      /* ------------Not Exist--------------- */
      if (data.length === 0) {
        toast.info("  المستخدم غير موجود");
      }
      /* ------------if Exist--------------- */
      else
      {
      /* ------------if password wrong--------------- */
        if (data[0].password !== userPass) {
          toast.error("كلمة السر غير صحيحه");
        }else{
        /* ------------if all right--------------- */
          setLocalStorage( data[0]?.name,data[0]?.phone)
          setIslogin(true);
          setOpen(false);
          setUser({ name: data[0]?.name, phone: data[0]?.phone,login:true });
        }
      }
      /* --------------------------- */
    }
  };
/* ---------------------------------------------------------------- */
  const handleRegestration = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems:"center",
          justifyContent: "center",
          padding: "3rem",
          gap: "1rem",
          border: "1px solid rgba(0,0,0,.9)",
        }}
      >
        <TextField
          id="outlined-basic"
          size="small"
          // value={user}
          onChange={(e)=>setUserName(e.target.value)}
          label={
            <Typography fontFamily={"NX"}>رقم الجوال او الايميل</Typography>
          }
          variant="outlined"
          InputProps={{
            inputProps: {
                style: { textAlign: "center" },
            }
        }}
        />
        <TextField
          size="small"
          type="password"
          onChange={(e)=>setUserPass(e.target.value)}
          label={
            <Typography fontFamily={"NX"}>كلمة السر</Typography>
          }
          variant="outlined"
          InputProps={{
            inputProps: {
                style: { textAlign: "center" },
            }
        }}
        />

        <Box
          sx={{
            display: "flex",
            padding: "1rem",
            gap: "1rem",
          }}
        >
          <Button
            variant="contained"
            component={Link}
            startIcon={<FiUserPlus />}
            to={"/register"}
            onClick={handleRegestration }
          >
            <Typography fontFamily={"NX"}>تسجيل</Typography>
          </Button>
          <Button startIcon={<MdLogin />} variant="contained" sx={{backgroundColor:"#3D4C61"}} onClick={loginLogic}>
            <Typography fontFamily={"NX"}>دخول</Typography>
          </Button>
        </Box>
        <Link>
          <Typography fontSize={"12px"} fontFamily={"NX"}>
            نسيت كلمة المرور ؟
          </Typography>
        </Link>
      </Box>
    </>
  );
};

 

 