import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { FcOpenedFolder } from "react-icons/fc";
import { ImEarth } from "react-icons/im";
import { ShowData } from "./ShowData";
import { Button } from "@mui/material";

export function MobileAndEmailAndNationalty({
  Mobile, email, create_at, natationalty,
}) {
  return (
    <>
      <ShowData txt={Mobile}  icon={<BsFillTelephoneFill color="green" size={"1.2rem"} />} />
      <ShowData txt={email}   icon={<MdAlternateEmail color="green" size={"1.2rem"} />} />
      <ShowData txt={create_at} icon={<FcOpenedFolder size={"1.5rem"} />} />
      <ShowData txt={natationalty} icon={<ImEarth color="green" size={"1.5rem"} />} />
      
    </>
  );
}
