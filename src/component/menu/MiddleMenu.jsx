import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MenuImageWraper } from "./Menu";
import {BsPersonFill} from "react-icons/bs"
import {FaBalanceScale} from "react-icons/fa"
import {IoIosPaper} from "react-icons/io"
import {AiFillThunderbolt} from "react-icons/ai"
import {MdChairAlt} from "react-icons/md"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const MiddleMenu = () => {
   
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.up('sm'));
 
  return (
    <>
     




      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          height: { xs: "56px", sm: "100%" },
          maxWidth: { xs: "70%", sm: "100%" },
          color: "white",
        }}
      >
        <Link to={"/clients"}>
          <MenuImageWraper screenSize={screenSize}>
            <BsPersonFill size={"1.5rem"} color={"white"} />
            <Typography
              fontFamily={"NX"}
              fontSize={screenSize ? "1rem" : ".7rem"}
              color={"whitesmoke"}
            >
              العملاء
            </Typography>
          </MenuImageWraper>
        </Link>
        <Link to={"/qdaya"}>
          <MenuImageWraper screenSize={screenSize}>
            <FaBalanceScale size={"1.5rem"} color={"white"} />
            <Typography
              fontFamily={"NX"}
              fontSize={screenSize ? "1rem" : ".7rem"}
              color={"whitesmoke"}
            >
              القضاياء
            </Typography>
          </MenuImageWraper>
        </Link>
        <Link to={"/jalasat"}>
          <MenuImageWraper screenSize={screenSize}>
            <MdChairAlt size={"1.5rem"} color={"white"} />
            <Typography
              fontFamily={"NX"}
              fontSize={screenSize ? "1rem" : ".7rem"}
              color={"whitesmoke"}
            >
              الجلسات
            </Typography>
          </MenuImageWraper>
        </Link>
        <Link to={"/ahkam"}>
          <MenuImageWraper screenSize={screenSize}>
            <IoIosPaper size={"1.5rem"} color={"white"} />
            <Typography
              fontFamily={"NX"}
              fontSize={screenSize ? "1rem" : ".7rem"}
              color={"whitesmoke"}
            >
              الاحكام
            </Typography>
          </MenuImageWraper>
        </Link>
        <Link to={"/excute"}>
          <MenuImageWraper screenSize={screenSize}>
            <AiFillThunderbolt size={"1.5rem"} color={"white"} />
            <Typography
              fontFamily={"NX"}
              fontSize={screenSize ? "1rem" : ".7rem"}
              color={"whitesmoke"}
            >
              التنفيذ
            </Typography>
          </MenuImageWraper>
        </Link>
      </Box>
    </>
  );
};
