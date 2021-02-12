import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormPersonalDetails extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    
    render() {
        const {values ,  handleChange} = this.props ;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                   <AppBar title='Enter Personal Details' />
                   <TextField
              hintText="Enter Your Occupation"
              floatingLabelFixed="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
            />
            <br />
            <TextField
              hintText="Enter Your City"
              floatingLabelFixed="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
            />
            <br />
            <TextField
              hintText="Enter Your Bio"
              floatingLabelFixed="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
            />
            <br />
            <RaisedButton
              label='continue'
              primary={true}
              onClick={this.continue}
              style={styles.button}/>
              <RaisedButton
              label='Back'
              primary={false}
              onClick={this.back}
              style={styles.button}/>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button : {
           margin :15
    }
}

export default FormPersonalDetails
