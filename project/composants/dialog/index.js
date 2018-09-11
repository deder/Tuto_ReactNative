import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { Button, Dialog as DialogMaterial, DialogDefaultActions } from 'react-native-material-ui';
import Modal from "react-native-modal";
import { style, styleLight } from './style';

const Dialog = ({isVisible, onPress, hasChangeStatut}) => {
 const renderDeleteButton = ()=>{
     if(hasChangeStatut){
        return (<Button text="Changer le statut" style={styleLight.buttonChangeStatus} onPress={onPress("change")}/> )
     }
 }
  return (
      <View>    
        <Modal
            isVisible={isVisible}
            animationIn={'slideInUp'}
            animationOut={'slideOutDown'}   
            animationInTiming={500}   
            animationOutTiming={500}
            backdropTransitionInTiming={500}
            backdropTransitionOutTiming={500}   
            onBackdropPress={onPress()}    
            style={style.Modal} >      
                <View style={style.firstView}>
                    <DialogMaterial style={styleLight.dialogMaterial}>
                        <DialogMaterial.Title><Text>Tâche</Text></DialogMaterial.Title>
                        <DialogMaterial.Content>
                        <Text>
                            Que souhaitez-vous faire sur la tâche ?  
                        </Text>   
                        </DialogMaterial.Content>
                        <View style={styleLight.dialogMaterialAction}>
                            <Button text="Supprimer" style={styleLight.buttonDelete} onPress={onPress("delete")}/>
                            {renderDeleteButton()}   
                        </View>  
                    </DialogMaterial>
                </View>
        </Modal>
      </View>
  )
}

export default Dialog;