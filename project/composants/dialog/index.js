import React from 'react';
import { Text, View } from 'react-native';
import { Dialog as DialogMaterial } from 'react-native-material-ui';
import Modal from "react-native-modal";
import { style, styleLight } from './style';
const Dialog = ({isVisible, onPress, title, content, renderButtons}) => {
    const _renderContent = () => {
        if(content instanceof Function){
            return (content())
        }
        return (
            <Text>
                {content} 
            </Text> 
        )
    }
    const _renderButtons = () =>{
        if(renderButtons){
            return renderButtons()
        }
        return []
    }
    return (  
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
                        <DialogMaterial.Title>
                            <Text>{title}</Text>
                        </DialogMaterial.Title>
                        <DialogMaterial.Content>
                            {_renderContent()}     
                        </DialogMaterial.Content>
                        <View style={styleLight.dialogMaterialAction}>
                            {_renderButtons()}
                        </View>  
                    </DialogMaterial>  
                </View>
        </Modal>
    )
}
export default Dialog;