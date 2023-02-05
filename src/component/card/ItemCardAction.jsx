import React from 'react'
import { Box, CardActions, IconButton, Typography } from '@mui/material'

import {FaBalanceScale} from "react-icons/fa"
import {IoIosPaper} from "react-icons/io"
import {AiFillThunderbolt} from "react-icons/ai"
import {MdChairAlt} from "react-icons/md"
 
import { RiShoppingBasketFill } from "react-icons/ri";

function ItemCardAction({Qdya, jalsat, hkm,tnfed,theme}) {
  return (
<CardActions disableSpacing  sx={{backgroundColor:theme.soft,boxShadow:1}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <IconButton aria-label="add to favorites">
            <FaBalanceScale color={Qdya === "0" ? theme.yellowColor:theme.barndbaColor}/>
          </IconButton>

          <IconButton aria-label="add to favorites">
            <MdChairAlt color={jalsat === "0" ? theme.yellowColor:theme.barndbaColor}/>
          </IconButton>

          <IconButton aria-label="add to favorites">
            <IoIosPaper color={hkm === "0" ? theme.yellowColor:theme.barndbaColor}/>
          </IconButton>


          <IconButton aria-label="add to favorites">
            <AiFillThunderbolt color={tnfed === "0" ? theme.yellowColor:theme.barndbaColor}/>
          </IconButton>



        </Box>

        
      </CardActions>
  )
}

export default ItemCardAction