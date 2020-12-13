import React, { Component } from 'react';
import NewItem from './NewItem.js';

export default class Restaurants extends Component {
    constructor(props){
        super(props)
        this.state = {
            restaurants: [],
        }
    }

    componentDidMount() {
        const url = 'https://code-challenge.spectrumtoolbox.com/api/restaurants'
        const API_KEY = 'Api-Key q3MNxtfep8Gt'

        fetch(url, {
            headers: {
                Authorization: API_KEY,
            }
        } )
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({
                    restaurants: data.name 
                })
            })
            .catch((error) => console.log(error))
    }

    renderItems(){
        return this.state.restaurants.map((item) => (
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
