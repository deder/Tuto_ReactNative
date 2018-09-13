import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import Header from './composants/header';
import { Card, ActionButton, ThemeContext, getTheme} from 'react-native-material-ui';  
import { APP_COLORS } from './styles/color';
import TaskList from './composants/list/task-list';
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

const storageKey = 'taskList';

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
  
  componentWillMount(){
    AsyncStorage.getItem(storageKey).then( taskList=>{
      if(taskList){
        this.setState({
          taskList: JSON.parse(taskList)     
        })
      }
    })
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
    if(type==="edit"){
      //Edit
      let taskList = this.state.taskList.map((task)=>{
        if(this.state.currentTask.key == task.key){
            task.text = value;
          }
          return task
        });
        this.setState({
          taskList
        }, ()=>{
          this.saveTaskList()
        });
    }else if(type==="create"){
      let taskList = [{
        key: Math.random(),
        badgeName:TASK.todoStatus,
        text: value, 
        iconName: "arrow-forward" 
      } , ...this.state.taskList];
      this.setState({
        taskList
      }, ()=>{
        this.saveTaskList()
      });
    }
    this.setState({
      addTaskDialogIsVisible:false
    }, () => {
      setTimeout(()=>{
        this.setState({
          currentTask:{}
        });
      },300);
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
      }, ()=>{
        this.saveTaskList()
      });
    }else if(type==="change"){
      let taskList = this.state.taskList.map((task)=>{
      if(this.state.currentTask.key == task.key){
          task.badgeName = TASK.doneStatus;
        }
        return task
      });
      this.setState({
        taskList
      }, ()=>{
        this.saveTaskList()
      });
    }
    this.setState({
      editTaskDialogIsVisible:false
    }, () => {
      setTimeout(()=>{
        this.setState({
          currentTask:{}  
        });
      },300);
    }) 
  }
  saveTaskList = () => {
    AsyncStorage.setItem(
      storageKey,
      JSON.stringify(this.state.taskList)
    )
  }
  renderTaskList= () => {
    if(this.state.taskList && this.state.taskList.length > 0){
      return (          
        <TaskList items={this.state.taskList} 
          onPressListItem={this.onPressListItemHandler} 
          onLongPressListItem={this.onLongPressListItemHandler}
        />
      )
    }else{
      return (
        <View style={{
          margin:20
        }}>
          <Card style={{
            container:{
              backgroundColor:"#EEE"
            }
          }}>
            <Text  style={{
              padding:10, 
              fontSize:18  
            }}>
              Cliquer sur le bouton menu en bas à droite et appuyer sur ajouter une tache
            </Text>
          </Card>
        </View>
      )
    }    
  }
  render() {     
    return (
        <ThemeContext.Provider value={getTheme(uiTheme)} style={styles.container} >    
          <Header content="Liste de tâches"/>
          {this.renderTaskList()}
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
