import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 2,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));



function Counter({children,count,badgeContent,color}) {
  return (
    <StyledBadge  badgeContent={badgeContent} color={color}>
        {children}
    </StyledBadge>
  )
}
export default Counter