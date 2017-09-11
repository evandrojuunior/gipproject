import React, { Component } from 'react';

import { View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { TextField } from 'react-native-material-textfield';

import { handlePostUser } from '../actions/signinActions'

import { Button } from 'react-native-material-design';

class SignIn extends Component {
  state = {
    emailuser: '',
    passworduser: '',
  };

  render() {

  let {emailuser} = this.state;
  let {passworduser} = this.state;

    return (
      <View
        style={{
          padding: 10
        }}
      >
        <View>
          <TextField
            label="EMAIL"
            value={emailuser}
            onChangeText={ (emailuser) => this.setState({ emailuser }) }
          />
          <TextField
            label="SENHA"
            value={passworduser}
            onChangeText={ (passworduser) => this.setState({ passworduser }) }
          />
        </View>

        <Button
          primary="paperBlue"
          raised={true}
          text="Cadastrar"
          onPress={() => handlePostUser(this.state)}
        />
      </View>
    )
  }
}


const mapStateToProps = state => ( { user: state.signin.user })
const mapDispatchToProps = dispatch => bindActionCreators({ handlePostUser }, dispatch)

export default connect( mapStateToProps, mapDispatchToProps )( SignIn );
