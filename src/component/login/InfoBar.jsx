import React, {useState } from "react";
import { Avatar, Box,  IconButton } from "@mui/material";
import Submenu from "./Submenu";
import { useNavigate } from "react-router-dom";


function InfoBar({ userName, userPhone, setIslogin,setUser }) {
  const [userImage, setUserImage] = useState(null);
  const [submenu, setSubmenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate=useNavigate()

  const logout = () => {
    localStorage.removeItem("lenoUser");
    setIslogin(false);
    setUser(null)
    navigate("/")

  };

  const avatar =
    import.meta.env.VITE_Avatars +
    userPhone +
    ".jpg?width=100&height=100&resize=cover";

  const avatarStyle = {
    backgroundColor: "rgba(210,180,140,1)",
    border: "2px solid #ccc",
    boxShadow: 1,
  };

  const handlesubMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setSubmenu(pre=>!submenu);
  };


  return (
    <>
      <Box
        sx={{
          height: "30px",
          width: {xs:"100%",md:"95%"},
          position: "absolute",
          top: "65px",
          display: "flex",
          gap: "1rem",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
      
        <Box sx={{ display: "flex", alignItems: "center", m: 1 }}>
        
          <IconButton onClick={handlesubMenu}>
            <Avatar mr={2} alt="Remy Sharp" src={avatar} sx={avatarStyle} />
          </IconButton>
        </Box>
      </Box>
      {submenu && (
        <Submenu
          open={submenu}
          setOpen={setSubmenu}
          setAnchorEl={setAnchorEl}
          anchorEl={anchorEl}
          logout={logout}
          userName={userName}
        />
      )}
    </>
  );
}
export default InfoBar;
