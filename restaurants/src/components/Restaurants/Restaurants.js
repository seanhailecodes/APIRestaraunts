import React, { Component } from 'react';
import NewItem from './NewItem.js';

export default class Restaurants extends Component {
    render() {
        return (
            <ul>
                {this.renderItems()}
            </ul>
        )
    }
}
