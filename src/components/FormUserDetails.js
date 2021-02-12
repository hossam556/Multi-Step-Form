import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };

    
    render() {
        const {values ,  handleChange} = this.props ;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                   <AppBar title='Enter User Details' />
                   <TextField
              hintText="Enter Your First Name"
              floatingLabelFixed="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
            />
            <br />
            <TextField
              hintText="Enter Your Last Name"
              floatingLabelFixed="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
            />
            <br />
            <TextField
              hintText="Enter Your Email"
              floatingLabelFixed="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
            />
            <br />
            <RaisedButton
              label='continue'
              primary={true}
              onClick={this.continue}
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

export default FormUserDetails
