import { Avatar, Box, CardHeader, Chip, IconButton, Typography } from '@mui/material'
import {AiFillEdit} from "react-icons/ai"
import {MdDelete} from "react-icons/md"
import { useNavigate } from 'react-router-dom'



function ItemCardHeader({Xavatar,cId="00000000000",Cname="خالد علي احمد",theme,counter}) {
  
const Navigate=useNavigate()
  const handleUpdate=()=>{

Navigate("/updClient/"+cId)

  }
  const handledelete=()=>{

    Navigate("/delClient/"+cId)
    
      }

  return (
    <CardHeader
      avatar={<Avatar src={Xavatar} aria-label="recipe" />}
      sx={{ backgroundColor: theme.textSoft, boxShadow: 1 }}
      title={
        <>
          <Box
            sx={{
              display: "flex",
              // flexDirection:"column",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 1,
              width: "100%",
              px: 2,
              position: "relative",
            }}
          >
           

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "start",
                gap: 1,
                width: "70%",
                px: 2,
              }}
            >
              <Chip
                size="small"
                variant="outlined"
                sx={{ color: theme.backColor }}
                label={
                  <Typography
                    textAlign={"right"}
                    sx={{
                      fontFamily: "NX",
                      lineHeight: 1.5,
                      fontWeight: "bold",
                      fontSize: ".8rem",
                    }}
                  >
                    {cId}
                  </Typography>
                }
              />
              <Typography
                textAlign={"right"}
                sx={{ fontFamily: "NX", lineHeight: 1.5 }}
              >
                {Cname}
              </Typography>
               
              
            </Box>
            <Box
              sx={{
                display: "flex",
                // flexDirection:"column",
                justifyContent: "flex-end",

                alignItems: "start",
                // gap: 1,
                width: "30%",
                px: 2,
              }}
            >
              <IconButton onClick={handleUpdate}>
                <AiFillEdit color="#8d0376" />
              </IconButton>
              <IconButton onClick={handledelete}>
                <MdDelete color="red" />
              </IconButton>
            </Box>
          </Box>
        </>
      }
    />
  );
}

export default ItemCardHeader