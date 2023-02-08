import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Button,
  Typography,
} from "@mui/material";
import React from "react";
import style from "./ConfirmDeleteStyle"
function ConfirmDelete({
  open,
  toggle,
  setShowImage, /* function to Close main Daiolge */
  deleteAction /* function come from father to delete Action */
}) {

const handleYes=()=>{ 
  deleteAction()
  toggle(false)
  setShowImage(false)

}

const handleNo=()=>{
  toggle(false)}

  return (
    <>
      <Dialog   sx={style.mainDiloag}   open={open}  onClose={toggle}    >
        <DialogTitle    sx={style.DialogTitle}  >
          <Typography sx={style.typeFontAndColor}>    تاكيد عملية الحذف  </Typography>
          <Button    onClick={() => toggle(false)}   sx={style.ConfirmButton}  variant="contained"  color="error" >X</Button>
        </DialogTitle>

        <DialogContent   sx={style.DialogContent} >
          <Box sx={style.boxConfirmMsg} >
            <Typography sx={style.ConfirmBodyMsg}>لا يمكن التراجع بعد الحذف</Typography>
            </Box>
            <Box  sx={ style.buttunBoxStyle}>
              <Button size="small" sx={{ bgcolor: "#6ee7b7" }} onClick={handleYes}>
              <Typography sx={style.typeFontAndColor}>  حذف   </Typography>
              </Button>
              <Button size="small" sx={{ bgcolor: "#282828" }} onClick={handleNo}>
              <Typography sx={style.typeFontAndColor}>الغاء</Typography>
              </Button>
            </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
export default ConfirmDelete;
