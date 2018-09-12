import React from 'react';
import { ThemeContext, getTheme, ActionButton } from 'react-native-material-ui';
import { APP_COLORS } from './../../styles/color';
import ListItem from './list-item';
import List from './list';

const uiTheme = {
    palette: {
        primaryColor: APP_COLORS.primary,
    }
};
const TaskList = ({ items, onPressListItem, onLongPressListItem }) => {
    return (
        <ThemeContext.Provider value={getTheme(uiTheme)}>
            <List>
                {
                    items.map((item) => (
                        <ListItem
                            key={item.key}
                            iconName={item.iconName}
                            badgeName={item.badgeName}
                            onPress={onPressListItem(item)}
                            onLongPress={onLongPressListItem(item)}
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