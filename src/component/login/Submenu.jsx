import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import {CiLogout,CiReceipt} from "react-icons/ci"
import {MdOutlinePassword} from "react-icons/md"
import {CgTrack} from "react-icons/cg"
import { useNavigate } from 'react-router-dom';

export default function Submenu({open,setOpen,anchorEl,setAnchorEl,logout,userName}) {
 
  const [placement, setPlacement] = React.useState();
 
  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box sx={{ width: "400px", }}>
      <Popper open={open} anchorEl={anchorEl} placement={"top"} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <MenuItems setOpen={setOpen} logout={logout}  userName={userName}/>
            </Paper>
          </Fade>
        )}
      </Popper>
    </Box>
  );
}


const MenuItems = ({setOpen,logout,userName}) => {
  const navigate=useNavigate()
  const handleStatment=()=>{
    setOpen(false)
    navigate("/statment")

  }
  const ChangePasswrod=()=>{
    setOpen(false)
    navigate("/newpassword")

  }
  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
          width: "300px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Button
          onClick={() => {
            setOpen(false);
          }}
          variant={"contained"}
          sx={{
            minWidth: 0,
            boxShadow: 0,
            borderRadius: 0,
            backgroundColor: "warning.light",
            width: "25px",
            height: "25px",
          }}
          // color={"warning"}
        >
          X
        </Button>
        <Typography mr={2} fontFamily={"NX"} color={"warning.dark"}>
          مرحبا .. {userName}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
          width: "300px",
          borderBottom: "1px solid #ccc",
          "&:hover": {
            // boxShadow:1
            backgroundColor: "#ccc",
          },
        }}
      >
        <CgTrack />
        <Typography color={"text.secondary"} fontFamily={"NX"}>
          متابعة الطلب
        </Typography>
      </Box>
      {/* <Link to={"/statment"}> */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 1,
            borderBottom: "1px solid #ccc",
            cursor:"pointer",
            "&:hover": {
              // boxShadow:1
              backgroundColor: "#ccc",
            },
          }}
          onClick={handleStatment}
        >
          <CiReceipt />
          <Typography color={"text.secondary"} fontFamily={"NX"}>
            كشف حساب
          </Typography>
        </Box>
      {/* </Link> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #ccc",
          p: 1,
          "&:hover": {
            backgroundColor: "#ccc",
          },
        }}
        onClick={ChangePasswrod}
      >
        <MdOutlinePassword />
        <Typography fontFamily={"NX"}>تغيير كلمة السر</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
          "&:hover": {
            backgroundColor: "#ccc",
          },
        }}
        onClick={logout}
      >
        <CiLogout />
        <Typography fontFamily={"NX"}>خروج</Typography>
      </Box>
    </>
  );
};