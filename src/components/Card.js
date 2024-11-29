import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

function ReptileCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRK-UnPiDJW7pKWtVjZFN0HoNjCacDPTb8U4bViIlLQYhcJ0kcwwSR67SigqWYh5gwB8uHbwViCjYQoVQMfjuKzqQ"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Iguana
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartir</Button>
        <Button size="small">Ver Más</Button>
      </CardActions>
    </Card>
  );
}

export default ReptileCard;