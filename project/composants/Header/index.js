import React from 'react';
import {StatusBar, View} from 'react-native';
import { ThemeContext, getTheme, Toolbar  } from 'react-native-material-ui';  
import { style } from './style';
import { APP_COLORS } from './../../styles/color';

const uiTheme = {
    palette: {
      primaryColor: APP_COLORS.primary, 
    },
    toolbar: {
      container: {
        height: 150,
      },
      centerElementContainer:{
        justifyContent: 'center',
        alignItems: 'center'
      },
      titleText:{
          fontSize:30,
          color:APP_COLORS.primaryText,
      }
    },
  };
    
const Header = ({content}) => {
    return (
        <ThemeContext.Provider value={getTheme(uiTheme)}>  
            <StatusBar hidden={true}/>
            <View>
                <View style={style.subHeader} />
                <Toolbar centerElement={content} />
            </View>

        </ThemeContext.Provider>  
    )
}

export default Header
/*
    <Button primary text="Primary" /> 
    <Button accent text="Accent" /> 
    <Button raised primary text="Primary" />
    <Button disabled text="Disabled" />
*/