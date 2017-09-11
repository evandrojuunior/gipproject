import React, { Component } from 'react';

import { Text, View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { TextField } from 'react-native-material-textfield';

import { handlePostCompromise } from '../actions/addcompromiseActions'

import DatePicker from 'react-native-datepicker'
import { Button } from 'react-native-material-design';

class AddCompromise extends Component {
  state = {
    name_compromise: '',
    date_compromise: '',
  };

  render() {

  let {name_compromise} = this.state;
  let {date_compromise} = this.state;

    return (
      <View
        style={{
          padding: 10
        }}
      >
        <View>
          <TextField
            label="NOME DO COMPROMISSO"
            value={name_compromise}
            onChangeText={ (name_compromise) => this.setState({ name_compromise }) }
          />
          <DatePicker
            style={{width: 200, padding: 10}}
            mode="date"
            placeholder="DATA DO COMPROMISSO"
            format="DD-MM-YYYY"
            minDate="11-09-2017"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            date={date_compromise}
            onDateChange={(date_compromise) => {this.setState({ date_compromise })}}
          />
        </View>

        <Button
          primary="paperBlue"
          raised={true}
          text="Cadastrar"
          onPress={() => handlePostCompromise(this.state)}
        />
      </View>
    )
  }
}


const mapStateToProps = state => ( { user: state.signin.user })
const mapDispatchToProps = dispatch => bindActionCreators({ handlePostCompromise }, dispatch)

export default connect( mapStateToProps, mapDispatchToProps )( AddCompromise );
