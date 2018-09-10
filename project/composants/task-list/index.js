import React from 'react';
import { ThemeContext, getTheme} from 'react-native-material-ui';  
import { APP_COLORS } from './../../styles/color';
import ListItem from './list-item';
import List from './list';

const uiTheme = {
    palette: {
        primaryColor: APP_COLORS.primary, 
    }
};
const TaskList = ({items}) => {
    const pressHandler = (item)=>(event)=>{
        console.log(item);      
    }
    return (
        <ThemeContext.Provider value={getTheme(uiTheme)}>  
            <List>
                {
                    items.map((item)=>(
                        <ListItem 
                            key={item.key} 
                            onClick iconName={item.iconName} 
                            badgeName={item.badgeName}
                            onPress={pressHandler(item)}
                        >
                            {item.text}
                        </ListItem>
                    ))  
                }  
            </List>
        </ThemeContext.Provider>
    )
}
export default TaskList