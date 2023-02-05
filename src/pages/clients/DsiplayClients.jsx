import React,{useState,useEffect} from 'react'
import ItemCard from '../../component/card/ItemCard'
import { useTheme } from 'styled-components'
import { Box } from '@mui/material'
import supabase from '../../logic/database/supabase';
function DsiplayClients({client}) {
  const theme=useTheme()
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          m: "auto",
          justifyContent: "center",
          // backgroundColor:"red"
        }}
      >
        {client.map((client, idx) => {
          return (
            <React.Fragment key={client.row_id}>
              <ItemCard client={client} counter={idx} theme={theme} />
            </React.Fragment>
          );
        })}
      </Box>
      {/* <div>DsiplayClients</div> */}
    </>
  );
}

export default DsiplayClients
