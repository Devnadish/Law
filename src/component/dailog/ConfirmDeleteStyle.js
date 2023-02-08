 const mainDiloag = { width: "100%" };
 const DialogTitle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  m: 0,
  px: 2,
  py: 1,
  height: "30px",
  bgcolor: "#282828",
  overflow: "hidden",
  minWidth: "380px",
};
 

 const ConfirmButton = {
  minWidth: 0,
  py: 0.3,
  m: 0,
  width: "15px",
  height: "20px",
  borderRadius: "4px",
  overflow: "hidden",
};

 const DialogContent = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  bgcolor: "#2e2e2e",
  padding: "0",
  margin: "0",
  width: "100%",
  height: "100%",
  overflow: "auto",
};
 const boxConfirmMsg = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  mt: "1rem",
  mb: "1rem",
  gap: "1.2rem",
  width: "80%",
  height: "80%",
  border: "1px solid",
  borderColor: "#822025",
  borderRadius: 1,
};

 const ConfirmBodyMsg = {
  fontFamily: "NX",
  bgcolor: "#291415",
  color: "rgba(255,255,255,.7)",
  width: "100%",
  p: 3,
  textAlign: "center",
  borderRadius: 1,
};

 const buttunBoxStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  mb: "1rem",
  width: "70%",
};
 const typeFontAndColor = {
  fontFamily: "NX",
  color: "rgba(240, 10, 10, 0.7)",
};


export default{
  mainDiloag,
DialogTitle,
 
ConfirmButton,
DialogContent,
boxConfirmMsg,
ConfirmBodyMsg,
buttunBoxStyle,
typeFontAndColor
  
}