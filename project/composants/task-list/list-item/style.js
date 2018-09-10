import { APP_COLORS } from './../../../styles/color';
export const style = {
    listItemMaterial:{
        container:{
            backgroundColor:"#eee"  
        }     
    },
    badge:{
        container:{
            backgroundColor: APP_COLORS.primaryAction,
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
    }
};    


