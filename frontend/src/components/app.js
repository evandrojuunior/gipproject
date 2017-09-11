import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import { NativeRouter, Route, Link } from 'react-router-native'

import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';

import configureStore from '../store/configureStore';

const store = configureStore()
const RouterWithRedux = connect()(Router);

import Login from './login';
import SignIn from './signIn';
import ChooseQuiz from './choosequiz';
import AddCompromise from './addcompromise'
import ListCompromise from './listcompromise'



export default class App extends Component {
  render() {
    const getSceneStyle = ( props, computedProps) => {
          const style = {
            backgroundColor: '#efefef',
          };
          return style;
        };

        return (
          <View style={styles.container}>
            <Provider store={store}>
              <RouterWithRedux getSceneStyle={getSceneStyle} >
                <Scene key="root">
                  <Scene key="choosequiz" component={ChooseQuiz} title="GIP"/>
                  <Scene key="login" component={Login} title="GIP" initial={true}/>
                  <Scene key="signIn" component={SignIn} title="GIP" />
                  <Scene key="addcompromise" component={AddCompromise} title="GIP" />
                  <Scene key="listcompromise" component={ListCompromise} title="GIP" />
                </Scene>
              </RouterWithRedux>
            </Provider>
          </View>
        );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
