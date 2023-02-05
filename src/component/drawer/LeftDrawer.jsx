import React ,{useState} from "react";
import Drawer from "@mui/material/Drawer";
import { Box,Button,Typography } from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import {useUser} from "../context/UserContext"
import data from "../../data/all.json"
import { LoadingButton } from '@mui/lab';
import {BsFillEmojiSmileFill} from "react-icons/bs"
import {whatsapp,orderAddCounter,addOrder,addSummuryOrder} from "../../logic/services"
 
import { toast } from "react-toastify";

function LeftDrawer({ open, setOpen, children, drawerWidth, anchor, drHight ,title="سلة المشتريات"}) {
  const [isSave,setIsSave]=useState(false)
  const {  cartItems } = useShoppingCart();
  const {user}=useUser()
  
  
  const lausum=   cartItems.reduce((total, cartItem) => {
     const item = data.find((i) => i.productId === cartItem.productId);
     return total + (item?.price || 0) * cartItem.quantity;
   }, 0)
   /* -----------Save Actions------------------- */
  const handlejob = async() => {
    setIsSave(true)
    let orederNo= await orderAddCounter()
    let OderSaved=await addOrder(orederNo,cartItems,user?.phone)
    let summrySaved=await addSummuryOrder(orederNo,lausum,user?.phone)
    
    // whatsapp()
    setIsSave(false)
  };
/* -------------------------------------- */
  return (
    <>
      <Drawer
        variant="temporary"
        anchor={"right"}
        open={open}
        role="presentation"
        BackdropProps={{ invisible: true }}
        PaperProps={{
          sx: {
            width: "80%",
            marginTop: "auto",
            marginBottom: "auto",
            margin: "auto",
            height: drHight,
            backgroundColor: "#f3f3f3",
          },
        }}
        onClose={() => {
          setOpen(false);
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "transparent",
            position: "relative",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "60px",
              backgroundColor: "whitesmoke",
              position: "sticky",
              top: 0,
              left: 0,
              zIndex: 100,
              boxShadow: 3,
            }}
          >
            <Button
              variant="contained"
              color="error"
              sx={{
                minWidth: 0,
                boxShadow: 0,
                ml: 1,
                width: "40px",
                height: "40px",
              }}
              onClick={() => {
                setOpen(false);
              }}
            >
              X
            </Button>
            <Typography
              sx={{
                fontFamily: "TB",
                mr: 1,
                backgroundColor: "#d3d3d3b0",
                color: "black",
                p: 1,
                borderRadius: "8px",
                border: "1px solid gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span> ريال</span>
              <span
                style={{
                  color: "darkblue",
                  fontWeight: "bolder",
                  borderBottom: "1px solid blue",
                  fontSize: "1rem",
                }}
              >
                {lausum}
              </span>
              <span>الاجمالي </span>
            </Typography>
            <Typography sx={{ fontFamily: "CB", color: "text.primary", mr: 1 }}>
              {title}
            </Typography>
          </Box>
          {children}
          <Box
            sx={{
              // backgroundColor: "green",
              position: "absolute",
              bottom: 20,
              left: 0,
              width: "100%",
              // boxShadow: 1,
              zIndex: 100,
              p:1
            }}
          >
            <LoadingButton
              loading={isSave}
              variant="contained"
              loadingPosition="start"
              startIcon={<BsFillEmojiSmileFill />}
              onClick={handlejob}
              fullWidth
              disabled={
                !cartItems.length || user?.phone === undefined ? true : false
              }
            >
              <Typography sx={{ fontFamily: "CB", color: "text.primarty" }}>
               {!isSave ? "اتمام عملية الشراء": "ارسال الطلب"  } 
              </Typography>


            </LoadingButton>

         
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default React.memo(LeftDrawer);
