import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import supabase from "../../logic/database/supabase";
import RTL from "../rtl/RTL";
import { NewAttachement } from "./NewAttachement";
import { ShowGallary } from "./ShowGallary";

export function Gallary({ cId }) {
  const [images, setImages] = useState([]);


  async function getImages(cId) {
    const { data, error } = await supabase
      .from("client_attachment")
      .select()
      .eq("client", cId).eq("delete","n");


    if (data !== null) {
      setImages(data);
      console.log({ data });
    } else {
      alert("Error loading images");
      console.log(error);
    }
  }

  useEffect(() => {
    getImages(cId);
  }, []);


  return (
    <>
      <RTL>
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "1rem", p: 1 }}
        >
          <NewAttachement cId={cId} getImages={getImages} />
          <ShowGallary data={images} getImages={getImages} cId={cId} />
        </Box>
      </RTL>
    </>
  );
}
