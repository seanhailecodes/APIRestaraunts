
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        restaurants: [],
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
            this.setState({
                restaurants: data
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