import React,{useState} from 'react';
import { Box, Button,  TextField, Typography } from '@mui/material';
import {BiSearchAlt2} from "react-icons/bi"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import RTL from '../../component/rtl/RTL';
import supabase from '../../logic/database/supabase';

 

export const SearchArea = ({setClient}) => {
  const [search,setSearch]=useState("")
  const [searchType,setSearchType]=useState("name")
  const getData=async()=>{
    const { data } = await supabase.from("clients").select('*').ilike(searchType,`%${search}%`).order('row_id', { ascending: true })
    setClient(data);
  }


  const handleSearch=()=>{
  
    getData()

  }

  return (
    <>
      <RTL>
        <Box
          sx={{
            width: "100%",
            height: "60px",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            p: 2,
            gap:1,
            boxShadow:1,
            borderRadius:1,
            mt:1,
            position:"sticky",
            top:0,
            left:0,
            zIndex:2
          }}
        >
          <TextField
            autoComplete="off"
            size="small"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            label={<Typography fontFamily={"NX"}>بحث </Typography>}
            fullWidth
            variant="outlined"
            // sx={{}}
            InputProps={{
              inputProps: {
                style: { textAlign: "right" },
              },
            }}
          />
           <BasicSelect searchType={searchType} setSearchType={setSearchType}/>
          <Button variant='outlined' sx={{height:"40px"}} onClick={handleSearch}>
            <BiSearchAlt2 />
          </Button>
        </Box>
      </RTL>
    </>
  );
};


export default function BasicSelect({searchType,setSearchType}) {


  const handleChange = (event) => {
    setSearchType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120}}>
      <FormControl fullWidth >
        <InputLabel  id="demo-simple-select-label">
        <Typography fontFamily={"NX"}>بحث </Typography>
          </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={searchType}
          label="Age"
          onChange={handleChange}
            sx={{ minWidth: 120,height:"40px" ,fontFamily:"NX"}}
        >
          <MenuItem value={"id"}>
          <Typography fontFamily={"NX"}> الهوية  </Typography>
           </MenuItem>
          <MenuItem value={"name"}>
          <Typography fontFamily={"NX"}> الاسم  </Typography> </MenuItem>
          <MenuItem value={"mobile"}>
          <Typography fontFamily={"NX"}>  الجوال </Typography></MenuItem>
          <MenuItem value={"email"}>
          <Typography fontFamily={"NX"}>  ايميل </Typography></MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
