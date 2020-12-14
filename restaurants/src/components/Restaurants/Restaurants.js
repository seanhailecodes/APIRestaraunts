import React, { Component } from 'react';
import NewItem from './NewItem.js';

export default class Restaurants extends Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurants: [],
            states: [],
        }
    }

    componentDidMount() {

        let url = 'https://code-challenge.spectrumtoolbox.com/api/restaurants'
        let API_KEY = 'Api-Key q3MNxtfep8Gt'

        fetch(url, {
            headers: {
                Authorization: API_KEY,
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({
                    restaurants: data
                })
            })
            .catch((error) => console.log(error))
    }


    renderItems() {
        return this.state.restaurants.map((data) => (
            <NewItem key={data.id} item={data} key={data.state.genre} item={data} />
        ))
    }

    render() {

        return (
            <div className='row'>
                {this.renderItems()}
            </div>
        )
    }
}
