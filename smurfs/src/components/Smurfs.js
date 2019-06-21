import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions/index";
import Smurf from './Smurf';


const Smurfs = props => {

    useEffect(() => {
        props.getSmurfs();
    }, []);

console.log(props)
    return (


    <div className="Smurfs">
        { //Check if message failed
            props.fetchingSmurfs
            ? <div> Fetching Smurfs!</div> 
            : <ul>
                {props.smurfs.map(smurf => {
                    return <Smurf key={smurf.name} smurf={smurf} />;
                })}
              </ul>
        }
    </div>
    )
  
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs, 
    error: state.error
    };
};


export default connect(mapStateToProps, { getSmurfs })(Smurfs);

