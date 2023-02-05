import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';


function ItemCardTermsAndDetail({expanded,notes="sdfsd"}) {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
      <Typography  sx={{fontFamily: "NX",}} paragraph>القيمة الغذائية</Typography>
      
      <Typography paragraph>
       {notes}
      </Typography>
      
    </CardContent>


  </Collapse>

  )
}

export default ItemCardTermsAndDetail