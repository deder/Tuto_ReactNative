import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './composants/Header';
import { ListItem, ThemeContext, getTheme, Button, Toolbar  } from 'react-native-material-ui';  
import { APP_COLORS } from './styles/color';
import TaskList from './composants/task-list/index';
import { TASK } from './model/index';

const uiTheme = {
  overlayContainer:{
    backgroundColor:"black"
  },
  palette: {
    primaryColor: APP_COLORS.primary, 
  }
};
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',   
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const taskList = [
  {
      text: 'test fred', 
      iconName: "arrow-forward",
      badgeName: TASK.doneStatus,
      key: '0'
  }, 
  {
      text: 'Démonstration', 
      iconName: "arrow-forward",  
      badgeName: TASK.todoStatus,
      key: '1'
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        text: "un texte par defaut",
        taskList
    };
  }      

  render() {
    return (
        <ThemeContext.Provider value={getTheme(uiTheme)} style={styles.container} >    
          <Header content="Liste de tâches"/>     
          <TaskList items={this.state.taskList}/>
        </ThemeContext.Provider>
    );
  }
}  
