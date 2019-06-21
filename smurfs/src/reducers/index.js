import { GET_SMURFS, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE, ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE, UPDATE_SMURF_FAILURE, UPDATE_SMURF_SUCCESS, UPDATE_SMURF, HANDLE_SMURF } from "../actions";


export const initialState =
 {
   smurfs: [],
   smurf: {
    title: '', 
    flag: '', 
    id: '', 
    name: '', 
    age: '', 
    height: ''
   },
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


 function reducer(state = initialState, action) {
  switch (action.type) {

    case HANDLE_SMURF:
      return {
        ...state, 
        smurf: action.payload
      }

    case GET_SMURFS:
      return {...state,
        fetchingSmurfs: true}

    case GET_SMURFS_SUCCESS:
      return {
        ...state, 
        smurfs: action.payload, 
        fetchingSmurfs: false
      }
      
    case GET_SMURFS_FAILURE:
        return {
          ...state, 
          fetchingSmurfs: false, 
          error: 'Error getting smurfs'
        }
    case ADD_SMURF:
      return {...state,
        addingSmurf: true}

    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false
      }
      
    case ADD_SMURF_FAILURE:
        return {
          ...state, 
          updatingSmurf: false, 
          error: 'Error adding smurfs'
        }
    case UPDATE_SMURF:
      return {...state,
        updatingSmurf: true}

    case UPDATE_SMURF_SUCCESS:
      return {
        ...state,
        updatingSmurf: false
      }
      
    case UPDATE_SMURF_FAILURE:
        return {
          ...state, 
          addingSmurf: false, 
          error: 'Error updating smurfs'
        }

      
    default:
      return state;
  }
};

export default reducer;
