import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from '../images/abstract.jpeg';
import logo1 from '../images/oil.jpeg';
import logo2 from '../images/sketch.jpg';


import Grid from "@material-ui/core/Grid";



const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
      }
}));

export default function Home() {
  const classes = useStyles();

  const data = {
    name: [
      { paintingType: "Abstract", artist: "Kathey" , img:logo},
      { paintingType: "Oil Painting", artist: "Rohit" , img:logo1},
      { paintingType: "Landscape", artist: "Kevin" , img:logo2}
    ],
    id: [1]
  };

  return (
      <div>
        
        {data.id.map(() => (
             <Grid
             container
             spacing={10}
             direction="row"
             justify="center"
             alignItems="center"
           >
        {data.name.map((elem) => (
            <Grid item xs={4} key={data.name.indexOf(elem)}>

    <Card className={classes.root}>
          <CardActionArea>
        <CardMedia
          component="img"
          alt="Painting Type"
          height="400"
          width="500"
          image={elem.img}
          title="Painting Type"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {elem.paintingType}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                {elem.artist}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium">
          Order
        </Button>
      </CardActions>
       
    </Card>
    </Grid>
    ))}


    </Grid>
   ))}
    </div>
  );
}
