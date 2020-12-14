import React from 'react';
import GetRestaurants from './Restaurants/GetRestaurants';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            states: [],
        };


        //bind
        this.getRestaurants = this.getRestaurants.bind(this);

    }
    getRestaurants() {
        this.setState({

        });

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
                const restaurants = result.map(item => {
                    return item
                })

                this.setState({
                    items: restaurants,
                })

            })
            .catch((error) => console.log(error))
    }

    render() {
        const { items } = this.state


        return (

            <div>
                <GetRestaurants
                    getRestaurants={this.GetRestaurants}
                />

                <AllRestaurants
                    restaurants={currentItems}

                />
            </div>

        );
    }
}

export default App;