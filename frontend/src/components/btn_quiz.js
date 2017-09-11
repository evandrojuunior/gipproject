import React, {Component, PropTypes} from 'react';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import { View, Image, Text } from 'react-native';
import { Button } from 'react-native-material-design';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextField } from 'react-native-material-textfield';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { handleStandards } from '../actions/btn_quizActions'

export default class Btn_quiz extends Component {
  static propTypes = {
    name: PropTypes.string,
    icone: PropTypes.string,
    color_icon: PropTypes.string,
    style: View.propTypes.style,
    size_icon: PropTypes.number
  };
  render() {
    return (
      <View style={this.props.style}>
        <Icon name={this.props.icone} color={this.props.color_icon} size={this.props.size_icon} />
        <Text style={{
          fontSize: 10,
          textAlign: ('center'),
        }}> {this.props.name} </Text>
      </View>
    )
  }
}
