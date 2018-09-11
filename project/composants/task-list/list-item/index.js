import React, { Component } from 'react'  
import  { View } from 'react-native' 
import { ListItem as ListItemMaterial, Icon, Badge,Button, Avatar } from 'react-native-material-ui';   
import { style } from './style';
class ListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            style : style(this.props)
        }
    }
    renderIcon = () => {
        return (<Icon name={this.props.iconName} style={this.state.style.icone} />)      
    }
    renderBadge = () =>(
        <Button primary text={this.props.badgeName} disabled style={this.state.style.badge}/>
    )
    renderAvatar = () =>(
        <Avatar text="TE" size={40} />
    )
    renderRightElement = () => (
        <View style={this.state.style.centerElement}>
            {this.renderBadge()}
            {this.renderIcon()}   
        </View>
    )
    renderLeftElement = () => (
        <View style={this.state.style.centerElement}>
            {this.renderAvatar()}
        </View>
    )
    render() {
        return (
            <ListItemMaterial
                style={this.state.style.listItemMaterial}    
                divider
                centerElement={this.props.children}
                rightElement={this.renderRightElement()} 
                leftElement={this.renderLeftElement()}  
                onPress={this.props.onPress} 
                onLongPress={this.props.onLongPress}    
            />
        )
    }
}
export default ListItem