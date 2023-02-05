import React,{useState} from 'react'
import styled from "styled-components";
import MyRoutes from '../Routes/MyRoutes';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
   /* max-width: 1280px; */
  
  background-color: ${({ theme }) => theme.backColor};
      
  width:${({screenSize})=>screenSize ? "calc(100% - 120px)":"calc(100% )"} ;
  height:${({screenSize})=>screenSize ? "calc(100%)":"calc(100% - 56px)"} ;
  
  margin: ${({screenSize})=>screenSize ? "0 120px  auto auto":"56px 0  auto auto"} 
  /* margin-top: 6rem; */
  
  `;






function Body({children}) {
 
  const [loading, setLoading] = useState(false);
  
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.up('sm'));
 
 
  return (
    <>
    <BodyWrapper screenSize={screenSize}>
    <MyRoutes/>
    </BodyWrapper>
    </>
  );
}

export default Body