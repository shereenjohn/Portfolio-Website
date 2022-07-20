import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function ContactUs() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
          <h2>Contact Us</h2>
          <p> Please fill in your details. We will get back to you ASAP! </p>
          <TextField
          required id="standard-multiline-flexible"
          label="First Name"
          multiline
          maxRows={4}
        />
        <TextField
          id="standard-textarea"
          label="Last Name"
          placeholder="Last Name"
          multiline
        />
      <br></br>
      {/* <br></br> */}

      <TextField required id="standard-required" label="Email ID" />
      <TextField required id="standard-required" label="Contact Number" />
      <br></br>
      <TextField required id="standard-required" rows={4} label="Reason for contacting" />


      </CardContent>
      <CardActions>
        <Button size="large">Submit</Button>
      </CardActions>
    </Card>
  );
}
