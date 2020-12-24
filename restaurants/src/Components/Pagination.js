import React, { Component } from 'react';
import styled from 'styled-components';


const Nav = styled.nav`
justify-content: center;
display: block;
margin: 0 auto;
align-items: center;
font-size: 1;
&:hover{
    background-color: light grey;
}
`
const Ul = styled.ul`
display: flex;
justify-content: center;
& li{
    margin: 0 0.3rem;
}
`

export default class Pagination extends Component {

    render() {

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil((this.props.totalItems / this.props.itemsPerPage)); i++) {
            pageNumbers.push(i)
        }

        
        return (

            <Nav>

                <Ul className="pagination">
                    {pageNumbers.map((number, i) => (
                        <li
                            key={i}
                            className={'page-item ' + (this.props.currentPage === number ? 'active' : '')}>
                                
                            <button
                                style={{backgroundColor:'#28A744', color: "black"}}
                                onClick={() => this.props.setCurrentPage(number)}
                                className='page-link'
                            >
                                {number}
                            </button>
                        </li>
                    ))}
                </Ul>

            </Nav>

        );
    }
}