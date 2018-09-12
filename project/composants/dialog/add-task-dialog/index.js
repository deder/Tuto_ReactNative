import React, {Component} from 'react';
import Dialog from './../index';
import { Button } from 'react-native-material-ui'
import { styleLight } from './style';
import { TextField } from 'react-native-material-textfield';

class AddTaskDialog extends Component {
  constructor(props) {
    super(props);
    let { isVisible, onPress , value, task} = props;
    this.state = {
      isVisible,
      onPress,
      value:(task && task.text)?task.text:value,
      task
    };
  }
  renderCancelButton = (key) => {
    return (<Button key={key} text="Annuler" style={styleLight.buttonDelete} onPress={this.state.onPress({
      type:"cancel"
    })} />)
  }
  renderValideButton = (key) => {
    return (<Button key={key} text={(this.state.task && this.state.task.key)?"Editer":"Créer"} style={styleLight.buttonChangeStatus} onPress={this.state.onPress({
      type:(this.state.task && this.state.task.key)?"edit":"create",
      value:this.state.value
    })} />)
  }
  renderForm = (key) => {
    return (
      <TextField
        key={key}
        label='Description de la tâche'
        value={this.state.value}
        onChangeText={(value) => this.setState({ value })}
      />
    )
  }
  renderContent = () => {
    const arrayButtons = [
      this.renderForm
    ];
    return arrayButtons.map((buttonRender, index) => buttonRender(index))
  }
  renderButtons = () => {
    const arrayButtons = [
      this.renderCancelButton,
      this.renderValideButton
    ];
    return arrayButtons.map((buttonRender, index) => buttonRender(index))
  }
  componentWillReceiveProps(props){
    this.setState({
      isVisible:props.isVisible,
      task:props.task
    }, ()=>{
      this.setState({
        value:(this.state.task && this.state.task.text)?this.state.task.text:props.value
      })      
    })
  }
  render() {
    return (
      <Dialog 
        onPress={this.state.onPress} 
        isVisible={this.state.isVisible} 
        title={`Formulaire de création de Tâche `}
        content={this.renderContent} 
        renderButtons={this.renderButtons} 
      />
    )
  }
}
export default AddTaskDialog;