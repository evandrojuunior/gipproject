import React, {Component, PropTypes} from 'react';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-material-design';
import { TextField } from 'react-native-material-textfield';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Btn_quiz from './btn_quiz';

import { handleAddCompromise, handleListCompromise } from '../actions/choosequizActions';

class ChooseQuiz extends Component {
  render() {
    return (

      <View>
        <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
        >
        <TouchableHighlight style={{
          justifyContent:'space-around',
          backgroundColor: '#D1DADF',
          marginTop: 70,
          marginLeft:20,
          alignItems: 'center',
          width: responsiveWidth(40),
          height: responsiveHeight(20),
        }} onPress={() => handleAddCompromise() }>
        <View>
          <Btn_quiz style={{
            justifyContent:'space-around',
            alignItems: 'center',
          }}
          name="Adicionar Compromisso"
          icone="heart-o"
          color_icon="#ffff00"
          size_icon={60}
          />
        </View>
        </TouchableHighlight>

        <TouchableHighlight style={{
          justifyContent:'space-around',
          backgroundColor: '#D1DADF',
          marginTop: 70,
          marginLeft:20,
          alignItems: 'center',
          width: responsiveWidth(40),
          height: responsiveHeight(20),

        }} onPress={() => handleListCompromise() }>
          <View>
        <Btn_quiz style={{
          justifyContent:'space-around',
          alignItems: 'center',
        }}
        name="Listar Compromissos"
        icone="heart-o"
        color_icon="#0080ff"
        size_icon={60}
        />
          </View>
        </TouchableHighlight>
        </View>

      <View
      style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}
      >
      <TouchableHighlight style={{
        justifyContent:'space-around',
        backgroundColor: '#D1DADF',
        marginTop: 60,
        marginLeft:20,
        alignItems: 'center',
        width: responsiveWidth(40),
        height: responsiveHeight(20),

      }} onPress={() => handleAddCompromise() }>
        <View>
      <Btn_quiz style={{
        justifyContent:'space-around',
        alignItems: 'center',
      }}
      name="Editar Compromissos"
      icone="heart-o"
      color_icon="#008000"
      size_icon={60}
      />
      </View>
    </TouchableHighlight>

    <TouchableHighlight style={{
      justifyContent:'space-around',
      backgroundColor: '#D1DADF',
      marginTop: 60,
      marginLeft:20,
      alignItems: 'center',
      width: responsiveWidth(40),
      height: responsiveHeight(20),

    }} onPress={() => handleAddCompromise() }>
    <View>
      <Btn_quiz style={{
        justifyContent:'space-around',
        alignItems: 'center',
      }}
      name="Deletar Compromisso"
      icone="heart-o"
      color_icon="#ff0000"
      size_icon={60}
      />
      </View>
      </TouchableHighlight>
        </View>

      </View>
    )
  }
}

const mapStateToProps = state => ( { token: state.login.token })
const mapDispatchToProps = dispatch => bindActionCreators({ handleAddCompromise, handleListCompromise }, dispatch)
export default connect( mapStateToProps, mapDispatchToProps, mapDispatchToProps )( ChooseQuiz );
