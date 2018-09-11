import {StyleSheet} from 'react-native'
import { APP_COLORS } from './../../styles/color';

export const style = StyleSheet.create({
    modal:{
        height:200,
        backgroundColor: 'white'
    },
    firstView:{  
        alignItems: "center"
    },
    buttonView:{
        backgroundColor: 'white'
    },
    textView:{
        backgroundColor: 'white'
    }
}) 

export const styleLight = {
    buttonChangeStatus: {
        text:{
            color: APP_COLORS.primaryAction,   
        }
    },
    buttonDelete:{
        text:{
            color: 'red'
        }
    },
    dialogMaterial:{
        container: {
            width:450
        }  
    },
    dialogMaterialAction:{   
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:10
    }
}