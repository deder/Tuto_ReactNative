import { StyleSheet} from 'react-native';
import { APP_COLORS } from './../../styles/color';

export const style = StyleSheet.create({
    subHeader:{
        backgroundColor: APP_COLORS.darkPrimary,
        height: 30
    },
    header:{
        backgroundColor:APP_COLORS.primary,
        height:150,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset:{  height: 10 },
        shadowColor: APP_COLORS.shadow,
        shadowOpacity: 0.2,
        elevation: 3,
        zIndex:999
    },  
    text: {
        color:APP_COLORS.lightPrimaryColor,
        fontSize: 30
    }
});
