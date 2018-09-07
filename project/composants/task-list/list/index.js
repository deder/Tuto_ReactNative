import { ListItem, Icon } from 'react-native-material-ui';  
import React, { Component } from 'react'   
class List extends Component {
    renderIcon = () => {
        return (<Icon name={this.props.iconName} />)   
    }
    render() {
        return (
            <ListItem
                style={{
                    container :{
                        backgroundColor:"#eee"       
                    }   
                }}    
                divider
                centerElement={
                    this.props.children
                }
                rightElement={this.renderIcon()}
                onPress={() => {}}    
            />
        )
    }
}
export default List
