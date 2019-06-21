import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions/index";
import Smurf from './Smurf';
import Grid from '@material-ui/core/Grid';

const Smurfs = props => {
    const [nameState , setNameState] = useState(props)
    useEffect(() => {
        setNameState(props.smurfs);
        props.getSmurfs();

    }, [nameState]);

    return (
    <div className="Smurfs">
        {props.fetchingSmurfs
            ? <div> Fetching Smurfs!</div> 
            : 
                <Grid container className='friend-list' spacing={4}>
                    {props.smurfs.map(smurf => {
                        return <Smurf key={smurf.name} smurf={smurf} />;
                    })}
                </Grid>
             
        }
    </div>
    )
  
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs, 
    error: state.error
    };
};

export default connect(mapStateToProps, { getSmurfs })(Smurfs);

