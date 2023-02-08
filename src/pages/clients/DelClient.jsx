import React, { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Box,  Typography } from "@mui/material";
import RTL from "../../component/rtl/RTL";
import { useTheme } from "styled-components";
import { MdPersonRemoveAlt1 } from "react-icons/md";
import supabase from "../../logic/database/supabase";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import style from "./delStyle";
import { DisplayElement } from "./DisplayElement";
import ConfirmDelete from "../../component/dailog/ConfirmDelete"
import { useNavigate } from "react-router-dom";

function DelClient() {
  let { ClientId } = useParams();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [natationalty, setNatationalty] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [wId, setWid] = useState("");
  const [wName, setWname] = useState("");
  const theme = useTheme();
  const [open,setOpen]=useState(false)
  const [showImage,setShowImage]=useState(false)
  const Navigate=useNavigate()
 

  /* ---------------------Save To DB   ----------------------------------------- */
  const sendToDb = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("clients")
      .delete()
      .eq("id", ClientId);
     toast.success(" تم حذف الملف بنجاح رقم " +ClientId );
    setLoading(false);
  };

  /* ---------------------Event Main On submit-------------------------------------- */
  const handleDeletion = async (event) => {
    await sendToDb();
    setTimeout(()=>{Navigate("/")},4000)
    
  };
  /* ---------------------Clear Fileds   ----------------------------------------- */
  const CollectData = async () => {
    const { data, error } = await supabase
      .from("clients")
      .select()
      .eq("id", ClientId);
    setId(data[0].id);
    setNatationalty(data[0].natationalty);
    setName(data[0].name);
    setMobile(data[0].mobile);
    setEmail(data[0].email);
    setWid(data[0].wId);
    setWname(data[0].wName);
  };

  useEffect(() => {
    const g = async () => {
      await CollectData();
    };
    g();
  }, []);

  return (
    <>
      <Box sx={style.mainBox}>
        <RTL>
          <Typography sx={style.TextStyle}>
            حذف ملف عميل رقم {ClientId}
          </Typography>
          <Box
            sx={style.ContinerBox}
            style={{ borderColor: theme.yellowColor }}
          >
            <Box sx={style.ContinerBox1}>
              <Box sx={style.ContinerBox2}>
                <DisplayElement
                  title="رقم الهوية"
                  dataTitle={id}
                  borderColor={"red"}
                />
                <DisplayElement title="الجنسية" dataTitle={natationalty} />
              </Box>
              <DisplayElement title=" الاسم" dataTitle={name} />
              <Box sx={style.ContinerBox3}>
                <DisplayElement title="رقم الجوال" dataTitle={mobile} />
                <DisplayElement title="الايميل" dataTitle={email} />
              </Box>
              <Box sx={style.ContinerBox4}>
                <DisplayElement title="رقم هوية الوكيل" dataTitle={wId} />
                <DisplayElement title="اسم الوكيل" dataTitle={wName} />
              </Box>

              <Box sx={style.ContinerBox5}>
                <LoadingButton
                  loading={loading}
                  variant="contained"
                  fullWidth
                  loadingIndicator={
                    <Typography color={"yellow"} fontFamily={"NX"}>
                      جاري الحفظ
                    </Typography>
                  }
                  loadingPosition="end"
                  endIcon={<MdPersonRemoveAlt1 color={"white"} />}
                  color="error"
                  type="submit"
                  onClick={()=>{setOpen(true)}}
                >
                  <Typography fontFamily={"NX"}> حذف ملف العميل</Typography>
                </LoadingButton>
              </Box>
            </Box>
          </Box>
        </RTL>
      </Box>
      {open ? (
        <ConfirmDelete
          open={open}
          toggle={setOpen}
          deleteAction={handleDeletion}
          setShowImage={setShowImage}
       />
      ) : null}
    </>
  );
}
export default DelClient;
