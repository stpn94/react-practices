import React, { Component } from 'react';
import ListItem from './ListItem';

export default class FoodList extends Component {
    render() {
        return (
            <ul>
                <ListItem name='Bread' quantity='10' />
                <ListItem name='Egg' quantity='20'/>
                <ListItem name='Milk' quantity='50'/>
                <ListItem name='Carrot' quantity='100'/>
            </ul>  
        );
    }    
}