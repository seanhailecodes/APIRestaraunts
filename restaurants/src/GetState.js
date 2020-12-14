import React, { Component } from 'react'

export default class FilterState extends Component {
    render() {

        let stateFilter = this.props.byState;

        return (

            <div>
                <input
                    id="SearchRestaurants"
                    type="text"
                    className="form-control"
                    aria-label="Search Restaurants"
                    onChange={e => this.props.searchRestaurants(e.target.value)}
                />

            </div>
        )
    }
}
