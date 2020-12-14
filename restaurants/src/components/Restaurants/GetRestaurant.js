import React, { Component } from 'react'

export default class GetRestaurant extends Component {
    render() {
        


        return (
            <Search>
                <div>
                    <input onChange={e => this.props.GetRestaurant(e.target.value)}/>
                </div>
                </Search>
        )
    }
}
