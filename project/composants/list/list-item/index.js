import React, { Component } from 'react'  
import  { View } from 'react-native' 
import { ListItem as ListItemMaterial, Icon, Badge,Button, Avatar } from 'react-native-material-ui';   
import { style } from './style';
class ListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            style : style(props)
        }
    }
    componentWillReceiveProps(props){
        this.setState(
            {style : style(props)}    
        );  
    }
    renderIcon = () => {
        return (<Icon name={this.props.iconName} style={this.state.style.icone} />)      
    }
    renderBadge = () =>(
        <Button primary text={this.props.badgeName} disabled style={this.state.style.badge}/>
    )
    renderRightElement = () => (
        <View style={this.state.style.centerElement}>
            {this.renderBadge()}
            {this.renderIcon()}   
        </View>
    )
    render() {
        return (
            <ListItemMaterial
                style={this.state.style.listItemMaterial}    
                divider
                centerElement={this.props.children}
                rightElement={this.renderRightElement()} 
                onPress={this.props.onPress} 
                onLongPress={this.props.onLongPress}    
            />
        )
    }
}
export default ListItem