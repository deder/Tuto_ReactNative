import React from 'react';
import { ThemeContext, getTheme, ActionButton} from 'react-native-material-ui';  
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
        console.log(item, event);      
    }
    const pressActionHandler = (event)=>{
        console.log('press', event);
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
            <ActionButton
                actions={[{ icon: 'add', label: 'Créer une tache' }]}
                icon="reorder"   
                transition="speedDial"
                onPress={pressActionHandler}
                style={
                    {
                        container:{
                            backgroundColor:APP_COLORS.primaryAction
                        }
                    }
                }
            />
        </ThemeContext.Provider>     
    )
}
export default TaskList