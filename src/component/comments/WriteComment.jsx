
import React,{useState} from 'react'
import {  TextField, Typography,Box } from '@mui/material';
import {MdPlaylistAdd} from "react-icons/md"
import { LoadingButton } from '@mui/lab';
import supabase from '../../logic/database/supabase';
import { toast } from 'react-toastify';
import RTL from "../rtl/RTL"

const WriteComment = ({commentTilte,cId,fechdata}) => {
  const [comment,setComment]=useState("")
    const [loading,setLoading]=useState(false)

 const addNoteCounter=async (clientId)=>{
      const { data } =  await supabase.from('clients').select().eq("id", cId)
      let counter=data[0]?.has_comment+1
      const { data:cmtUpdated,error } = await supabase.from('clients').update({ has_comment : counter }).eq("id", cId).select()
      console.log(cmtUpdated)
      
  }
  



    const handleSubmit=async (e)=>{
        e.preventDefault()
        if (comment.length===0){
          toast.info(commentTilte)
        }else
        {
          setLoading(true)
          const { data, error } = await supabase.from('clientComment').insert([{ comment: comment, client_id: cId}]);
          if(error){
            console.log(error)
          }else{
            setComment("")
            
            // toast.success("تمت اضافة الملاحظة")
            addNoteCounter()
            fechdata()
          }
          setLoading(false)
  }
    }
    return (
      <>
      <RTL>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            width: "95%",
            position:"sticky",
            top:0,
            m: 1,
            gap:2,
            display: "flex",
            margin:"1rem auto",
            flexDirection:"column"
          }}
        >
          <TextField
            autoComplete="off"
            size="small"
            name="comment"
            value={comment}
            multiline
            rows={5}
            onChange={(e) => setComment(e.target.value)}
            label={<Typography fontFamily={"NX"}>{commentTilte}</Typography>}
            fullWidth
            variant="outlined"
            InputProps={{
              inputProps: {
                style: { textAlign: "right" },
              },
            }}
          />
          <LoadingButton
            loading={loading}
            variant="contained"
            loadingIndicator={  <Typography fontFamily={"NX"}>جاري الحفظ</Typography>}
            // loadingPosition="start"
            type="submit"
            sx={{minWidth:0}}
          >
            <MdPlaylistAdd size={"1.5rem"}/>
          </LoadingButton>
        </Box>
        </form>
        </RTL>
      </>
    );
  };

  export default WriteComment


  export const  LoginPlease=()=>{return(<>
   <Typography
              fontFamily={"NX"}
              fontSize={"12px"}
              color="error"
              alignSelf={"flex-start"}
              width={"100%"}
            >
              !! لكتابة تعليق يرجى الدخول لحسابك او التسحيل{" "}
            </Typography>
  </>)}