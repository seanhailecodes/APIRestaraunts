import React, { Component } from './node_modules/react';
import styled from './node_modules/styled-components';

const Nav = styled.nav`
justify-content: center;
display: block;
margin: 0 auto;
align-items: center;
font-size: 1;
&:hover{
    background-color: #001D37;
}
`
const Ul = styled.ul`
display: flex;
justify-content: center;
& li{
    margin: 0 0.3;
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
                            <a
                                onClick={() => this.props.setCurrentPage(number)}
                                className='page-link'
                            >
                                {number}

                            </a>
                        </li>

                    ))}
                </Ul>
            </Nav>



        );
    }
}