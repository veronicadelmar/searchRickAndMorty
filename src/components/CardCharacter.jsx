import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardCharacter({name, status, image}) {
  return (
    <Card sx={{ width: 250, margin: "10px 0" }}>
    <CardMedia
      sx={{ height: 250 }}
      image={image}
      title={name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'shlop2'}}>
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'shlop2'}}>
        status: {status}
      </Typography>
    </CardContent>
  </Card>
  );
}