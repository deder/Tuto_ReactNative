import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './composants/Header';
import { ThemeContext, getTheme, Button, Toolbar  } from 'react-native-material-ui';  
import { APP_COLORS } from './styles/color';

const uiTheme = {
  palette: {
    primaryColor: APP_COLORS.primary, 
  }
};
  
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        text: "un texte par defaut"
    };
  }        

  render() {
    return (
      <ThemeContext.Provider value={getTheme(uiTheme)}>  
        <Header content="Liste de tâches"/>
      </ThemeContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
