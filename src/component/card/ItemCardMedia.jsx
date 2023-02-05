import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import {ImageLoader} from "../loader/Loader"
function ItemCardMedia({productId,image,handleonload,loading}) {
  return (
    <Link to={`/order/${productId}`} >
      <CardMedia component="img" height="194" image={image} alt="Paella dish" onLoad={handleonload}  />
      {!loading && <ImageLoader/>}
      </Link>

  )
}

export default ItemCardMedia