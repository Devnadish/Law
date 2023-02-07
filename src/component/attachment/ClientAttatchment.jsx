import React from "react";
import { Gallary } from "./Gallary";
export const CDNURL =
  "https://ejfjcbjlcizcuoewsrzb.supabase.co/storage/v1/object/public/law/";

function ClientAttatchment({ cId }) {
  return (
    <div>
      <Gallary cId={cId} />
    </div>
  );
}

export default ClientAttatchment;


