import React, { Component } from 'react';
import styled from 'styled-components';


const Search = styled.div`
width: 100%;
margin: 0 auto;
`

const Filter = styled.div`
width: 100%;
margin: 0 1%;
`

class SearchRestaurants extends Component {

    render() {
        let byState = this.props.byState;
        console.log(byState)
        let byGenre = this.props.byGenre;
        console.log(byGenre)
        let byAttire = this.props.byAttire;
        console.log(byAttire)


        return (

            <Search className="search-restaurants row justify-content-center bg-light" style={{backgroundColor: "Success"}}>

                <div className="col-md-10">

                    <div className="input-group">
                        <input 
                            id="SearchRestaurants"
                            type="text"
                            className="form-control"
                            aria-label="Search Restaurants"
                            onKeyDown={e => this.props.searchRestaurants(e.target.value, e.keyCode)}
                        />

                        <div className="input-group-append" >

                            <Filter className="filter-by-state">

                                <button
                                    className="btn dropdown-toggle"
                                    type="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Filter By State, Tanner, Nat DOGG, Chris:  {byState} <span className="caret" /> 

                                </button>

                                <div className="sort-menu dropdown-menu dropdown-menu-right">

                                    {this.props.states.map((s, index) => (
                                        <button
                                            key={index}
                                            className={'sort-by dropdown-item ' + (this.props.byState === s ? 'active' : '')}
                                            onClick={() => this.props.filterByState(s)}
                                            href="#" >
                                            {s}
                                        </button>
                                    ))}

                                </div>

                            </Filter>

                            <Filter className='filter-by-genre'>

                                <button
                                    style={{backgroundColor:'success', color: "black"}}
                                    type="button"
                                    className="btn dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Filter By Genre: {this.props.byGenre} <span className="caret" />
                                </button>

                                <div className="sort-menu dropdown-menu dropdown-menu-right">
                                    {this.props.genres.map((g, i) => (
                                        <button
                                            key={i}
                                            className={'sort-by dropdown-item ' + (this.props.byGenre === g ? 'active' : '')}
                                            onClick={() => this.props.filterByGenre(g)}
                                            href="#" >
                                            {g}
                                        </button>
                                    ))}
                                </div>

                            </Filter>

                            <Filter className="filter-by-attire">

                                <button
                                    style={{backgroundColor:'success', color: "black"}}
                                    className="btn  dropdown-toggle"
                                    type="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Filter By Attire:  {byAttire} <span className="caret" />

                                </button>

                                <div className="sort-menu dropdown-menu dropdown-menu-right">

                                    {this.props.attire.map((s, index) => (
                                        <button
                                            key={index}
                                            className={'sort-by dropdown-item ' + (this.props.byAttire === s ? 'active' : '')}
                                            onClick={() => this.props.filterByAttire(s)}
                                            href="#" >
                                            {s}
                                        </button>
                                    ))}

                                </div>

                            </Filter>
                        </div>
                    </div>
                </div>

            </Search >
        );
    }
}

export default SearchRestaurants;