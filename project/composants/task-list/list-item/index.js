import React, { Component } from 'react'  
import  { View } from 'react-native' 
import { ListItem as ListItemMaterial, Icon, Badge,Button, Avatar } from 'react-native-material-ui';   
import { style } from './style';
class ListItem extends Component {
    renderIcon = () => {
        return (<Icon name={this.props.iconName} style={{marginRight:10}} />)      
    }
    renderBadge = () =>(
        <Button primary text="En cours" disabled style={style.badge}/>
    )
    renderAvatar = () =>(
        <Avatar text="TE" size={40} />
    )
    renderRightElement = () => (
        <View style={style.centerElement}>
            {this.renderBadge()}
            {this.renderIcon()}   
        </View>
    )
    renderLeftElement = () => (
        <View style={style.centerElement}>
            {this.renderAvatar()}
        </View>
    )
    render() {
        return (
            <ListItemMaterial
                style={style.listItemMaterial}    
                divider
                centerElement={this.props.children}
                rightElement={this.renderRightElement()} 
                leftElement={this.renderLeftElement()}  
                onPress={this.props.onPress}    
            />
        )
    }
}
export default ListItem