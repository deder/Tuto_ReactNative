import React from 'react';
import Dialog from './../index';
import { Button } from 'react-native-material-ui'
import { styleLight } from './style';
import { componentArrToReactRenderArr } from './../../../utils/react-utils';

const EditTaskDialog = ({ isVisible, onPress, hasChangeStatut, task }) => {
  const renderDeleteButton = (key) => {
    if (hasChangeStatut) {
      return (<Button key={key} text="Changer le statut" style={styleLight.buttonChangeStatus} onPress={onPress("change")} />)
    }
  }
  const renderChangeButton = (key) => {
    return (<Button key={key} text="Supprimer" style={styleLight.buttonDelete} onPress={onPress("delete")} />)
  }
  const renderButtons = () => {
    const arrayButtons = [
      renderDeleteButton,
      renderChangeButton
    ];
    return componentArrToReactRenderArr(arrayButtons);
  }
  return (
    <Dialog onPress={onPress} isVisible={isVisible} title={`Tâche : ${task.text}`} content="Que souhaitez-vous faire sur la tâche ? " renderButtons={renderButtons} />
  )
}

export default EditTaskDialog;