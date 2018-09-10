import { APP_COLORS } from './../../../styles/color';
import { getColorStatus } from '../../../model';
export const style = (props) => ({
    listItemMaterial:{
        container:{
            backgroundColor:"#eee"  
        }     
    },
    badge:{
        container:{
            backgroundColor: getColorStatus(props.badgeName),
            marginRight:20,
            borderRadius: 20,
            height:35,
            opacity:0.8 
        },
        text:{
            color: APP_COLORS.primaryText 
        }  
    },
    centerElement:{
        flexDirection: 'row',
        alignItems: "center"  
    },
    icon:{
        marginRight:10
    }
})      


