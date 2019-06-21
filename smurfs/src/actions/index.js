import axios from 'axios'

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const GET_SMURFS = 'GET_SMURFS';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS';
export const UPDATE_SMURF_FAILURE = 'UPDATE_SMURF_FAILURE';
export const HANDLE_SMURF = 'HANDLE_SMURF';


export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURFS });
    
        axios
        .get(`http://localhost:3333/smurfs`)
        .then(response => {
          dispatch({ type: GET_SMURFS_SUCCESS, payload: response.data }); 
        })
        .catch(err => {
          dispatch({ type: GET_SMURFS_FAILURE });
        });
        
  };
export const addSmurf = (newSmurf) => dispatch => {
    dispatch({ type: ADD_SMURF });
    
        axios
        .post(`http://localhost:3333/smurfs`, newSmurf)
        .then(response => {
          dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data }); 
        })
        .catch(err => {
          dispatch({ type: ADD_SMURF_FAILURE });
        });
        
  };
export const updateSmurf = (id, smurf) => dispatch => {
    dispatch({ type: UPDATE_SMURF });
    
        axios
        .put(`http://localhost:3333/smurfs/${id}`, smurf)
        .then(response => {
          console.log(response)
          dispatch({ type: UPDATE_SMURF_SUCCESS, payload: response.data }); 
        })
        .catch(err => {
          dispatch({ type: UPDATE_SMURF_FAILURE });
        });
        
  };
  export const handleSmurf = (smurf) => {
    return {
      type: HANDLE_SMURF,
      payload: smurf
    };
  };