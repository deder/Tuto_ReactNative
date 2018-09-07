import React from 'react';
import { FlatList , StatusBar, View, Text} from 'react-native';
import { ListItem, ThemeContext, getTheme, Toolbar,Icon  } from 'react-native-material-ui';  
import { APP_COLORS } from './../../styles/color';
import List from './list';

const uiTheme = {
    palette: {
      primaryColor: APP_COLORS.primary, 
    }
  };
    
const TaskList = ({items}) => {
    const renderItemList = ({item})=>{
        console.log(item);
        return (<List key={item.key} iconName={item.iconName}>{item.text}</List>)    
    }
    return (
        <ThemeContext.Provider value={getTheme(uiTheme)}>  
            <FlatList style={{
                    padding:20,
                    backgroundColor:"#ffffff" 
                }}
                data={items}    
                renderItem={renderItemList}
            />
        </ThemeContext.Provider>  
    )
} 

export default TaskList