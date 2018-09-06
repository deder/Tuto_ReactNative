import React from 'react';
import {StatusBar, Text} from 'react-native';
import { COLOR, ThemeContext, getTheme, Button, Toolbar  } from 'react-native-material-ui';  

const uiTheme = {
    palette: {
      primaryColor: COLOR.green500,
    },
    toolbar: {
      container: {
        height: 50,   
      },
    },
  };

const Header = () => {
  return (
  <ThemeContext.Provider value={getTheme(uiTheme)}>
    <StatusBar hidden={true}/>
    <Toolbar
        centerElement="Liste des tâches"
    />
    <Button primary text="Primary" /> 
    <Button accent text="Accent" /> 
    <Button raised primary text="Primary" />
    <Button disabled text="Disabled" />
  </ThemeContext.Provider>  
  )
}

export default Header