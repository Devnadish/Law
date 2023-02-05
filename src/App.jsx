import { useState ,useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./component/utils/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorBoundary } from "react-error-boundary";
import Menu from "./component/menu/Menu";
import Body from "./component/body/Body";
import { Box } from "@mui/material";
import { borderRadius } from "@mui/system";


const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  max-width: 100vw;
  max-height: 100vh;
  min-width: 300px;
  height: 100%;
  background-color: ${({ theme }) => theme.backColor};
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

 




  return (
    <>
      <ErrorBoundary fallback={<FatailError/>}>
        {/* <ShoppingCartProvider> */}
          <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <BrowserRouter>
              {/* <UserContext> */}
                <Menu />
                <Container>

                
                  <Body />
                </Container>
              {/* </UserContext> */}
            </BrowserRouter>
          </ThemeProvider>
        {/* </ShoppingCartProvider> */}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          style={{ fontFamily: "CB" }}
        />
      </ErrorBoundary>
    </>
  );
}

export default App;


const FatailError=()=>{
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid white",
          maxWidth: "320px",
          margin:"auto",
          // backgroundColor:"red",
          borderRadius:2,
          height:"100%"
          
        }}
      >
        <img
          src="/img/bug.svg"
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin:"auto"
          }}
        />
      </Box>
    </>
  );
}