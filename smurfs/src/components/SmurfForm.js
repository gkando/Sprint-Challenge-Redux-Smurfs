import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addSmurf, updateSmurf } from '../actions';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    smurf: {
      name: '',
      age: '',
      height: '' },
    id: ''
    };
  }

  componentDidMount() {
    const flag = this.props.location.flag
    if (flag == 'update'  || flag == 'delete'){this.setState(
      {smurf: {
        name: this.props.location.name, 
        age: this.props.location.age, 
        height: this.props.location.height
      },
        id: this.props.location.id
      }
    )}
  }

  addSmurf = event => {
    event.preventDefault();
    const flag = this.props.location.flag

    if (flag == 'update'){
        const  smurf = this.state.smurf
        console.log(smurf)
        const id = this.state.id
        this.props.updateSmurf(id, smurf)
    }
    if (flag == 'delete'){

    }
    else if (flag == null) {
        const  newSmurf = this.state.smurf
        this.props.addSmurf(newSmurf);
        this.props.history.push('/')
    }


  }

  handleInputChange = e => {
      console.log(e)
    this.setState({smurf:{ [e.target.name]: e.target.value }});
  };

  render() {

    return (
      <div className="SmurfFormContainer">
        <form className="SmurfForm" onSubmit={this.addSmurf}>
          <TextField
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
            label="Smurf Name"
            id="outlined-name"
            margin="normal"
            variant="outlined"
          />

          <TextField
              id="outlined-number"
              label="Age"
              name='smurf.age'
              value={this.state.smurf.age}
              onChange={this.handleInputChange}
              type="number"
              InputLabelProps={{
                  shrink: true,
              }}
              margin="normal"
              variant="outlined"
          />  


            <TextField
              id="outlined-number"
              label="Height"
              name='height'
              value={this.state.smurf.height}
              onChange={this.handleInputChange}
              InputLabelProps={{
                  shrink: true,
              }}
              margin="normal"
              variant="outlined"
          />  

          <Button variant="contained" type="submit" color="primary" size="medium">
          Add to the village
        </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
    //   todos: state,
    addSmurf: newSmurf => addSmurf(newSmurf),
    updateSmurf: smurf => updateSmurf(smurf)

      // filteredTodos: getVisibleTodos(state)
      
      };
  };
export default connect(mapStateToProps, { addSmurf, updateSmurf })(SmurfForm);
