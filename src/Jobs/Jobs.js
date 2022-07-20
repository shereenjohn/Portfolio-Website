import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from "@material-ui/core/Grid";
import logo from '../images/receptionist.jpeg';
import logo1 from '../images/packager.jpeg';




const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  return (

    <div>

<div>
      <Grid container spacing={24}>
        <Grid item md={3}>
        <Card className={classes.root}>
      <CardHeader
        title="Receptionist"
      />
      <CardMedia
        className={classes.media}
        image={logo}
        title="Receptionist"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Expand to to see the Job Description

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Roles and Responsibility:</Typography>
          <Typography paragraph>
          1. Answering phones and taking messages <br></br>
2. Maintaining the gallery’s mailing list <br></br>
3. Providing professional service to the collectors, artists, and visitors <br></br>
4. Keeping the front desk and gallery spaces tidy <br></br>
5. Greeting visitors and helping them with their questions <br></br>
6. Doing office work such as answering phones <br></br>
7. Dealing with correspondence and emails, and other daily administrative duties <br></br>
8. Writing promotional materials and working on exhibition catalogs <br></br>


          </Typography>
         
        </CardContent>
      </Collapse>

      
    </Card>
        </Grid>
        <Grid item md={3}>
        <Card className={classes.root}>
      <CardHeader
        title="Packager"
      />
      <CardMedia
        className={classes.media}
        image={logo1}
        title="Packager"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Expand to to see the Job Description

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand1, {
            [classes.expandOpen]: expanded1,
          })}
          onClick={handleExpandClick1}
          aria-expanded={expanded1}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded1} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph>Roles and Responsibility:</Typography>
          <Typography paragraph>
          1. Pack, weigh, and label completed items for shipment or storage. <br></br>
2. Follow all company guidelines regarding packaging. <br></br>
3. Identify and dispose of defective items. <br></br>
4. Properly use packaging materials, including hand tools, glues, nails, padding, etc. <br></br>
5. Keep complete records of all materials that go through the warehouse. <br></br>
6. Maintain a clean work area. <br></br>


          </Typography>
        </CardContent>
      </Collapse>

      
    
      
    </Card>
        </Grid>
      </Grid>
    </div>


    
    
    
    
    

    
    </div>
  );
}
