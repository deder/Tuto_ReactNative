import React from 'react';
import { Text } from 'react-native';
import Header from './components/header/index';

export default class App extends React.Component {
  render() {
    return (

        <Header content="Liste de taches" />
    );
  }
}