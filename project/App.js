import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './composants/Header';
import { ListItem, ActionButton, ThemeContext, getTheme, Button, Toolbar  } from 'react-native-material-ui';  
import { APP_COLORS } from './styles/color';
import TaskList from './composants/task-list/index';
import { TASK } from './model/index';
import EditTaskDialog from './composants/dialog/edit-task-dialog/index';   
import AddTaskDialog from './composants/dialog/add-task-dialog/index';

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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        text: "un texte par defaut",
        taskList: [],
        editTaskDialogIsVisible: false,
        addTaskDialogIsVisible: false,
        currentTask:{}  
    };
  }      
  onPressListItemHandler = (item)=>(event)=>{
    this.setState({
      editTaskDialogIsVisible:true,
      currentTask:item,
    }); 
   
  }
  onLongPressListItemHandler = (item)=>(event)=>{
    this.setState({
      currentTask:item,
      addTaskDialogIsVisible:true,
    }); 
  }
  onPressBtnActionHandler = (typeAction)=>{
    if(typeAction==="add"){
      this.setState({
        addTaskDialogIsVisible:true,
        valueAddTask: ""
      }) 
    }
  }
  onPressButtonAddTaskDialog = (props)=>(event)=>{
    console.log(props)
    let type, value;
    if(props && props.type){
      type= props.type;
      value = props.value;
    }else{
      type= props;
    }
    if(type==="edit"){//Edit
      let taskList = this.state.taskList.map((task)=>{
        if(this.state.currentTask.key == task.key){
            task.text = value;
          }
          return task
        });
        this.setState({
          taskList
        })
    }else if(type==="create"){
      let taskList = [{
        key: Math.random(),
        badgeName:TASK.todoStatus,
        text: value, 
        iconName: "arrow-forward" 
      } , ...this.state.taskList];
      this.setState({
        taskList
      });
    }
    this.setState({
      addTaskDialogIsVisible:false,
      currentTask:{}
    }) 
  }
  onPressButtonEditTaskDialog = (type)=>(event)=>{
    if(type==="delete"){
      let taskList = this.state.taskList.filter((task)=>{
        if(this.state.currentTask.key !== task.key ){
          return true
        }
      })
      this.setState({
        taskList
      })
    }else if(type==="change"){
      let taskList = this.state.taskList.map((task)=>{
      if(this.state.currentTask.key == task.key){
          task.badgeName = TASK.doneStatus;
        }
        return task
      });
      this.setState({
        taskList
      })
    }
    this.setState({
      editTaskDialogIsVisible:false,
      currentTask:{}
    }) 
  }
  render() {     
    return (
        <ThemeContext.Provider value={getTheme(uiTheme)} style={styles.container} >    
          <Header content="Liste de tâches"/>    
          <TaskList items={this.state.taskList} 
            onPressListItem={this.onPressListItemHandler} 
            onLongPressListItem={this.onLongPressListItemHandler}
          />
          <ActionButton
              actions={[{ icon: 'add', label: 'Créer une tache' }]}
              icon="reorder"
              transition="speedDial"
              onPress={this.onPressBtnActionHandler}
              style={
                  {
                      container: {
                          backgroundColor: APP_COLORS.primaryAction
                      }
                  }
              }
          />
          <EditTaskDialog 
            task={this.state.currentTask} 
            onPress={this.onPressButtonEditTaskDialog} 
            isVisible={this.state.editTaskDialogIsVisible} 
            hasChangeStatut={this.state.currentTask && (this.state.currentTask.badgeName != TASK.doneStatus)}
          />
          <AddTaskDialog
            task={this.state.currentTask} 
            onPress={this.onPressButtonAddTaskDialog} 
            isVisible={this.state.addTaskDialogIsVisible} 
            hasChangeStatut={this.state.currentTask && (this.state.currentTask.badgeName != TASK.doneStatus)}
            value={this.state.valueAddTask}
          />
        </ThemeContext.Provider>  
    );
  }
}  
