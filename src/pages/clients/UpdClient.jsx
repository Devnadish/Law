import React,{useEffect, useState} from 'react'
import { LoadingButton } from '@mui/lab'
import { Box, Button, Typography } from '@mui/material'
import RTL from '../../component/rtl/RTL'
import { useTheme } from 'styled-components'
import {AiOutlineUserAdd,AiOutlineClear} from "react-icons/ai"
import {checkBeforeSave} from "../../component/validation/validation"
import ErorrBox from "../../component/ErrorBox/ErorrBox"
import { InpuText } from '../../component/inputText/InpuText'
import supabase from '../../logic/database/supabase';
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'



function UpdClient() {
  let { ClientId } = useParams();
  const [loading,setLoading]=useState(false)
  const [id,setId]=useState("")
  const [natationalty,setNatationalty]=useState("")
  const [name,setName]=useState("")
  const [mobile,setMobile]=useState("")
  const [email,setEmail]=useState("")
  const [wId,setWid]=useState("")
  const [wName,setWname]=useState("")
  const [clientImage,setClientImage]=useState("")
  const [idImage,setIdImage]=useState("")
  const [widImage,setWIdImage]=useState("")
  const [exist,setExist]=useState(false)
  const [currentErrors, setCurrentErrors] = useState([]);
  const [isErrors, setIsErrors] = useState(false);
  const theme=useTheme()

  /* ---------------------validation----------------------------------------- */
const checkDataValidation = async () => {
  let formData = { id, natationalty, name, mobile, email, wId, wName };
  const isDataValid = await checkBeforeSave(formData);
  if (isDataValid.length > 0) {
    setCurrentErrors(isDataValid);
    setIsErrors(true);
  } else {
    setCurrentErrors([]);
    setIsErrors(false);
  }
};
/* ---------------------Save To DB   ----------------------------------------- */
const sendToDb = async () => {
  setLoading(true);
  // const { data, error } = await supabase.from("clients").insert([{id,natationalty,name,mobile,email,wId,wName}]);
  const { data, error } = await supabase.from("clients").update([{id,natationalty,name,mobile,email,wId,wName}]).eq("id",ClientId)
  toast.success("تم تعديل الملف بنجاح");
  // handleClear()
  setLoading(false);
};

/* ---------------------Check ID Exisit   ----------------------------------------- */
 async function checkId(){
   let checkit;
  const { data:checkClient } = await supabase.from("clients").select().eq("id", id)   
  if (checkClient.length!==0){
      toast.error("رقم هوية العميل موجودة مسبقا")
      checkit=true
    }else{
      checkit=false
    }
      return checkit
  }
/* ---------------------Event Main On submit-------------------------------------- */
  const handleRegestration =async (event) => {
    event.preventDefault();
    const validate = await checkDataValidation();
    if(currentErrors.length===0){
      // const checkClientId =  await checkId()
      // if(checkClientId){  sendToDb() }
      sendToDb()
    }
  };
/* ---------------------Clear Fileds   ----------------------------------------- */
  const handleClear=()=>{
    // console.log(id, natationalty, name, mobile, email, wId, wName);
        setId("");
        setNatationalty("")
        setName("")
        setMobile("")
        setEmail("")
        setWid("")
        setWname("")
        setClientImage("")
        setIdImage("")
        setWIdImage("")
  }

 const CollectData=async()=>{
 
  const {data,error}=await supabase.from("clients").select().eq("id",ClientId)
  setId(data[0].id)
  setNatationalty(data[0].natationalty)
  setName(data[0].name)
  setMobile(data[0].mobile)
  setEmail(data[0].email)
  setWid(data[0].wId)
  setWname(data[0].wName)

 }


  useEffect(()=>{
     const g=async()=>{await CollectData()}
     g()
  },[])

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <RTL>
          <Typography
            variant="h4"
            fontFamily={"NX"}
            mb={2}
            textAlign={"center"}
          >
             تعديل ملف عميل رقم {ClientId}
          </Typography>
          <form
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid ",
              borderColor: theme.yellowColor,
              margin: "auto",
              borderRadius: "8px",
            }}
            onSubmit={handleRegestration}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "2rem",
                width: "95%",
                boxShadow: 1,
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <InpuText
                  inputName={"ClientId"}
                  inputLabel={"رقم الهوية"}
                  colorFont={theme.yellowColor}
                  fx={true}
                  txWidth={"45%"}
                  mxLength={10}
                  InputValue={id}
                  onChangeEvent={setId}
                  Fxdisabled={true}
                />
                 <InpuText
                  inputName={"ClientId"}
                  inputLabel={"الجنسية"}
                  colorFont={theme.yellowColor}
                  txWidth={"45%"}
                  InputValue={natationalty}
                  onChangeEvent={setNatationalty}
                />
              </Box>
              <InpuText
                inputName={"ClientId"}
                inputLabel={"الاسم"}
                colorFont={theme.yellowColor}
                txWidth={"100%"}
                InputValue={name}
                onChangeEvent={setName}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <InpuText
                  inputName={"ClientId"}
                  inputLabel={"رقم الجوال"}
                  colorFont={theme.yellowColor}
                  mxLength={10}
                  txWidth={"30%"}
                  InputValue={mobile}
                  onChangeEvent={setMobile}
                />
                <InpuText
                  inputName={"ClientId"}
                  inputLabel={"الايميل"}
                  colorFont={theme.yellowColor}
                  txWidth={"65%"}
                  InputValue={email}
                  onChangeEvent={setEmail}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <InpuText
                  inputName={"ClientId"}
                  inputLabel={"رقم هوية الوكيل"}
                  colorFont={theme.yellowColor}
                  mxLength={10}
                  fx={true}
                  txWidth={"30%"}
                  InputValue={wId}
                  onChangeEvent={setWid}
                />
                <InpuText
                  inputName={"ClientId"}
                  inputLabel={"اسم الوكيل"}
                  colorFont={theme.yellowColor}
                  txWidth={"65%"}
                  InputValue={wName}
                  onChangeEvent={setWname}
                />
              </Box>

              <Box sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap:"3rem"
                }}>
                <LoadingButton
                  loading={loading}
                  variant="contained"
                  fullWidth
                  loadingIndicator={
                    <Typography color={"yellow"} fontFamily={"NX"}>جاري الحفظ</Typography>
                  }
                  loadingPosition="end"
                  endIcon={<AiOutlineUserAdd color={"white"} />}
                  color="error"
                  type="submit"
                  // onClick={handleRegestration }
                >
                  <Typography fontFamily={"NX"}> تعديل ملف العميل</Typography>
                </LoadingButton>
                <Button variant="contained" color='warning' onClick={handleClear}>
                
                  <AiOutlineClear fontSize={"1.3rem"}/>
                </Button>
              </Box>

              {isErrors && (<ErorrBox errorInfo={currentErrors} setIsErrors={setIsErrors} />)}
            </Box>
          </form>
        </RTL>
      </Box>
    </>
  );
}
export default UpdClient


