import React from "react";
import { Typography, Box } from "@mui/material";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { BsFillImageFill } from "react-icons/bs";
import { ShowImg } from "./ShowImg";
import { ShowData } from "./ShowData";

export function WakelInfo({ Wid, Wname }) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#ccc",
          borderRadius: 1,
        }}
      >
        <Typography fontFamily={"NX"} fontSize={".8rem"}>
          معلومات الوكيل
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
          width: "100%",
        }}
      >
        <ShowData txt={Wid} icon={<FaRegAddressCard color="green" />} />
        <ShowImg
          txt={"الهوية"}
          icon={<BsFillImageFill color="gray" size={"1rem"} />} />
      </Box>
      <ShowData txt={Wname} icon={<BsFillPersonFill color="green" />} />
    </>
  );
}
