import React, { Component } from 'react';
import ListItem from './ListItem';

export default class FoodList extends Component {
    render() {
        // const foods = [];
        // this.props.foods.forEach(function(food, index){
        //    foods[index] = <ListItem key={food.no} name={food.name} quantity={food.quantity} />;
        // });
        return (
            <ul>
                { this.props.foods.map((food) => <ListItem
                                                    key={food.no}
                                                    name={food.name}
                                                    quantity={food.quantity} />) } 
            </ul>  
        );
    }    
}