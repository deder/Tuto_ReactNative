
import React, { Component } from 'react';
import { FlatList } from 'react-native';  
import { style } from './style';
class List extends Component {

    render(){
        return (
            <FlatList style={style.flatList}
                data={this.props.children}
                renderItem={({item})=>item}
            />
        )
    }

}
export default List