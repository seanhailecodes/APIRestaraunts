import React, { Component } from 'react';
import NewItem from './NewItem.js';

export default class Restaurants extends Component {

    renderItems(){
        return this.props.items.map((item) => (
            <NewItem key={item.id} item={item} />
        ))
    }

    render() {
        return (
            <ul>
                {this.renderItems()}
            </ul>
        )
    }
}
