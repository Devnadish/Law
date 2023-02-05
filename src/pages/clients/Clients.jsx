import React,{useState,useEffect,lazy,Suspense}  from 'react'
import { Box, Fab } from '@mui/material'
import { useTheme } from 'styled-components';
import { SearchArea } from './SearchArea';
import {AiOutlineUserAdd} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import supabase from '../../logic/database/supabase';
import {DataLoader} from '../../component/loader/Loader';

const DisplayClients=lazy(()=>import("./DsiplayClients") ) 


function Clients() {
  const theme = useTheme();
  const [client,setClient]=useState([])

  const getData=async()=>{
    const { data } = await supabase.from("clients").select('*').order('row_id', { ascending: true })
    setClient(data);
  }

  useEffect(() => {
    getData()
    
  }, []);

  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          boxShadow: 1,
          borderRadius: 1,
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "1rem",
          margin: "auto",
          position: "relative",
        }}
        name="Client"
      >
        <Suspense fallback={<DataLoader />}>
          <SearchArea setClient={setClient} />
          <DisplayClients client={client} />
          <AddNew />
        </Suspense>
        {/* <NewClient /> */}
      </Box>
    </>
  );
}
export default Clients

const AddNew=()=>{
  const  GOTO=useNavigate()
  
  const handleNewClient=()=>{
    GOTO("/newclient")
  }

  return (
    <>
      <Fab color="secondary" aria-label="edit" sx={{position:"fixed",bottom:50,left:20}} onClick={handleNewClient}>
        <AiOutlineUserAdd size={"2rem"}/>
      </Fab>
    </>
  );
}
