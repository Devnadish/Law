import { Box, Button, Typography } from '@mui/material';
import React,{useState} from 'react'
// import "./img.css"

function ImagePreivew({setImage}) {
    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState(false);
  
    const handleImageChange = (e) => {
      setError(false);
      const selected = e.target.files[0];
      setImage(e.target.files[0])
      const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
      if (selected && ALLOWED_TYPES.includes(selected.type)) {
        let reader = new FileReader();
        reader.onloadend = () => {
          setImgPreview(reader.result);
        };
        reader.readAsDataURL(selected);
      } else {
        setError(true);
      }
    };

    

  return (
    <>
      <Box
        sx={{
          margin: "auto",
          width: "100%",
          maxWidth: "300px",
          backgroundColor: "#ccc",
          borderRadius: "8px",
        }}
      >
        {error && (
          <Typography sx={{ color: "red", fontSize: "24px", margin: "3px 0" }}>
            File not supported
          </Typography>
        )}
        <Box
          sx={{
            borderRadius: "8px",
            width: "100%",
            height: "160px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
            backgroundImage: imgPreview ? `url("${imgPreview}")` : "#131313",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          //   className="imgPreview"
        >
          {!imgPreview && (
            <>
              <p>Add an image</p>
              <label
                htmlFor="fileUpload"
                style={{ color: "#55d6d6", fontSize: "22px",padding:"6px 12px",cursor:"pointer" }}
                // className="customFileUpload"
              >
                Choose file
              </label>
              <input
                type="file"
                id="fileUpload"
                onChange={handleImageChange}
                style={{ display: "none" }}
                accept=".png, .jpg, .jpeg" 
              />
              <span>(jpg, jpeg or png)</span>
            </>
          )}
        </Box>
        {imgPreview && (
          <Button variant='contained' fullWidth color='error' sx={{mt:2}}  onClick={() => setImgPreview(null)}>
            Remove image
          </Button>
        )}
      </Box>
    </>
  );
}

export default ImagePreivew