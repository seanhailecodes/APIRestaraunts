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

    let url = 'https://code-challenge.spectrumtoolbox.com/api/restaurants'
    let API_KEY = 'Api-Key q3MNxtfep8Gt'

    fetch(url, {
        headers: {
            Authorization: API_KEY,
        }
    } )
        .then((response) => {
            return response.json()
        })
        .then((data) => {console.log(data)
           
        })

}

    render() {

        

        return (
            <div>
                
            </div>
        )
    }
}
