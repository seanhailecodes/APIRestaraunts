
import React from 'react';
import _ from 'lodash';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        item: [],
        states: [],        
    };

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
            const restaurants = _.map(item =>{
                return item
            })
          
        })
        .catch((error) => console.log(error))
}

  render() {

 

  



    return (

        <div className='row'>
        {/* {this.renderItems()} */}
    </div>

    );
  }
}

export default App;