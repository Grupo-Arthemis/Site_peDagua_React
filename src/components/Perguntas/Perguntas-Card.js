import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({Titulo,SubTitulo,Conteudo}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: '80vw'}}>
      <CardContent>
        <Typography variant="h4" color="#5D5A88" sx={{ textTransform: 'uppercase', fontWeight: 'bold', fontFamily: 'DM Sans' ,        fontSize: 'clamp(1.25rem, 0.852rem + 1.061vw, 2.125rem)'}}>
            {Titulo}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h5" color="#5D5A88" sx={{fontWeight: 'bold', fontFamily: 'DM Sans', fontSize: 'clamp(0.625rem, 0.227rem + 1.061vw, 1.5rem)'}} paragraph >{SubTitulo}</Typography>
          <Typography variant="h6" color="#9795B5" sx={{fontFamily: 'DM Sans', fontSize: 'clamp(0.5rem, 0.159rem + 0.909vw, 1.25rem)'}} paragraph>
            {Conteudo}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}