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
const TaskList = ({items, onPressListItem, onLongPressListItem, onPressBtnAction}) => {

    return (
        <ThemeContext.Provider value={getTheme(uiTheme)}>  
            <List>
                {
                    items.map((item)=>(
                        <ListItem 
                            key={item.key} 
                            onClick iconName={item.iconName} 
                            badgeName={item.badgeName}
                            onPress={onPressListItem(item)}
                            onLongPress={onLongPressListItem(item)}
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
                onPress={onPressBtnAction}
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