import React, {Component, PropTypes} from 'react';

import { View, Image, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-material-design';
import { TextField } from 'react-native-material-textfield';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { handleSignIn, handlePostLog } from '../actions/loginActions'

class Login extends Component {
  state = {
    emailuser: '',
    passworduser: '',
  };

  render() {

  let {emailuser} = this.state;
  let {passworduser} = this.state;

    return (
      <ScrollView>
        <View
          style={{
            alignItems: 'center'
          }}
        >
        <Image
          style={{width:300, height:250}}
          source={require('../../assets/images/gip.png')}
        />

        </View>

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
        </View>

        <Button
          primary="paperBlue"
          raised={true}
          text="Logar"
          onPress={() => handlePostLog(this.state) }

        />

        <Button
          primary="paperBlue"
          raised={true}
          text="Cadastre-se"
          onPress={() => handleSignIn() }
          
        />

      </ScrollView>
    )
  }
}

const mapStateToProps = state => ( { userdata: state.login.userdata })
const mapDispatchToProps = dispatch => bindActionCreators({ handleSignIn, handlePostLog }, dispatch)
export default connect( mapStateToProps, mapDispatchToProps )( Login );
