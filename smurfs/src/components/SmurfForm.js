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
            height: ''
        },
        title: '', 
        flag: '', 
        id: ''
    };
  }

  componentDidMount() {
    const flag = this.props.smurfData.flag

    
    if (flag == 'update'  || flag == 'delete'){this.setState(
      {smurf: {
        name: this.props.smurfData.name, 
        age: this.props.smurfData.age, 
        height: this.props.smurfData.height
      },
        id: this.props.smurfData.id, 
        flag: this.props.smurfData.flag
      }
    )}
  }

  addSmurf = event => {
    event.preventDefault();
    const flag = this.state.flag
 
    if (flag == 'update'){
        const smurf  = this.state.smurf
        const id = this.state.id
        this.props.updateSmurf(id, smurf)
        this.props.history.push('/')

    }
    if (flag == 'delete'){

    }
    else if (flag == '') {
        const  newSmurf = this.state.smurf
        this.props.addSmurf(newSmurf);
        this.props.history.push('/')
    }
  }

  handleInputChange = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    })
  }

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
              name='age'
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
    smurfData: state.smurf,
    addSmurf: newSmurf => addSmurf(newSmurf),
    updateSmurf: smurf => updateSmurf(smurf)      
      };
  };
export default connect(mapStateToProps, { addSmurf, updateSmurf })(SmurfForm);
