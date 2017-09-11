import React, { Component } from 'react';

import { Text, FlatList, View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { TextField } from 'react-native-material-textfield';

import { handleGetCompromises } from '../actions/listcompromiseActions'

import { List, ListItem } from "react-native-elements";
import DatePicker from 'react-native-datepicker'
import { Button } from 'react-native-material-design';

class ListCompromise extends Component {
  state = {
    datathread: {}
  };

  componentDidMount(){
    handleGetCompromises(this);
  }

  render() {

  let {datathread} = this.state;

    return (
      <View
        style={{
          padding: 10
        }}
      >
        <View>
          <FlatList
            data={this.state.datathread}
            renderItem={({ item }) => (
              <ListItem
                  title={`${item.name}`}
                  subtitle={`Data: ${item.date}`}
                />
            )}
            keyExtractor={item => item.name}
          />
        </View>
      </View>
    )
  }
}


const mapStateToProps = state => ( { user: state.signin.user })
const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)

export default connect( mapStateToProps, mapDispatchToProps )( ListCompromise );
