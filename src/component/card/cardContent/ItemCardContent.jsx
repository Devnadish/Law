import React from "react";
import CardContent from "@mui/material/CardContent";
import { MobileAndEmailAndNationalty } from "./MobileAndEmailAndNationalty";
import { IdImageWkalaImage } from "./IdImageWkalaImage";
import { WakelInfo } from "./WakelInfo";


function ItemCardContent({
cId,cName,
  Mobile = "0000000000",
  email = "w2.nadish@gmail.com",
  Wid = "0000000000",
  Wname = "khalid ali",
  create_at="10/10/2025",
  natationalty="سعودي",
  expanded,
  hasComment,
  hasattatchment,
  handleExpandClick,
  theme 
}) {
  return (
    <CardContent
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        gap: 1,
      }}
    >
     <MobileAndEmailAndNationalty   Mobile={Mobile} email={email} create_at={create_at} natationalty={natationalty}  />
     <IdImageWkalaImage    cId={cId} cName={cName} hasComment={hasComment} hasattatchment={hasattatchment}    theme={theme}/>
     <WakelInfo   Wid={Wid} Wname={Wname}  />
    </CardContent>
  );
}

export default ItemCardContent;


