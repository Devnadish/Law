import React, { useState } from "react";

import Card from "@mui/material/Card";

import ItemCardHeader from "./ItemCardHeader";
import ItemCardMedia from "./ItemCardMedia";
import ItemCardContent from "./cardContent/ItemCardContent";
import ItemCardAction from "./ItemCardAction";
import ItemCardTermsAndDetail from "./cardContent/ItemCardTermsAndDetail";
import {FORMATDATE} from "../../logic/util"

export default function ItemCard({
  Xavatar,
  notes,
  terms,
  theme,
  client,
  counter,
}) {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleonload = () => {
    setLoading(true);
  };
 
  return (
    <Card sx={{ maxWidth: 330, minWidth: 330 ,display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <ItemCardHeader
        Xavatar={Xavatar}
        cId={client.id}
        Cname={client.name}
        theme={theme}
        counter={counter}
      />

      {/* <ItemCardMedia  productId={productId} image={image} handleonload={handleonload} loading={loading} /> */}
      <ItemCardContent
         
        expand={expanded}
        handleExpandClick={handleExpandClick}
        Mobile={client.mobile}
        email={client.email}
        Wid={client.wId}
        Wname={client.wName}
        create_at={FORMATDATE(client.create_at)}
        cId={client.id}
        cName={client.name}
        hasComment={client.has_comment}
        theme={theme}
      />
      <ItemCardAction   Qdya={client.Qdya} jalsat={client.jalsat} hkm={client.hkm}  tnfed={client.tnfed} theme={theme} />
      <ItemCardTermsAndDetail
        expanded={expanded}
        notes={notes}
        terms={terms}
      />
    </Card>
  );
}
