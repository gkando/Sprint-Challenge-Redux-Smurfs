import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { handleSmurf } from "../actions/index";
import { connect } from "react-redux";

// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Smurf = props => {


  const useStyles = makeStyles({
    card: {
      minWidth: 275,
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
    icon: {
      color: '#ff000073', 
      paddingLeft: '5rem'
    }
  });

  const classes = useStyles();
  
const handleSmurf = () => {
  const smurf = {
    title: 'Update Smurf', 
    flag: 'update', 
    id: props.smurf.id, 
    name: props.smurf.name, 
    age: props.smurf.age, 
    height: props.smurf.height 
  }
  props.updateSmurfs(smurf);
}

  return (
    // <div className="Smurf">
    //     <h3>{props.smurf.name}</h3>
    //     <strong>{props.smurf.height} tall</strong>
    //     <p>{props.smurf.age} smurf years old</p>
    // </div>

<Grid item key={props.smurf.name} xs={12} sm={6} md={4}>
<Card className={classes.card}>
  <CardContent>
    <Typography variant="h5" component="h2">
        {props.smurf.name}
    </Typography>
    <Typography variant="body2" component="p">
    {props.smurf.age}
        <br />
            
            <strong>{props.smurf.height} tall</strong>
        <br />
        
    </Typography>
  </CardContent>

  <CardActions>

    <Link
    onClick={handleSmurf}
      to={{
        pathname: "/update", 
        // title: 'Update Smurf', 
        // flag: 'update', 
        // id: props.smurf.id, 
        // name: props.smurf.name, 
        // age: props.smurf.age, 
        // height: props.smurf.height 
      }} >
      <Button size="small">Update Smurf</Button>
    </Link>

    {/* <Link 
      to={{
        pathname: "/delete", 
        title: 'Delete Friend', 
        flag: 'delete', 
        id: props.friend.id, 
        name: props.friend.name, 
        age: props.friend.age, 
        email: props.friend.email
      }} >
      <DeleteForeverIcon className={classes.icon} />
    </Link> */}

  </CardActions>
</Card>
</Grid>





  )
};

const mapStateToProps = state => {
  return {
  handleSmurf: smurf => handleSmurf(smurf)    
    };
};
export default connect(mapStateToProps, { handleSmurf })(Smurf);
