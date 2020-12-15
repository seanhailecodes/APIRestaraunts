import React, { Component } from './node_modules/react';
// import { FaBeer } from "./node_modules/react-icons/fa";
import styled from './node_modules/styled-components';


const Table = styled.table`
width: 100%;
margin: 0 1%;
justify-content: center;
display: block;
align-items: center;
font-size: 1rem;
`


class AllRestaurants extends Component {

    render() {

        const isEmpty = this.props.restaurants.length === 0;
        console.log(isEmpty)
        const data = this.props.restaurants;
        const columns = ['Name', 'City', 'State', 'Telephone', 'Genre']
        return (
            <div className="mb-3 item-list" >
                {isEmpty ? (
                    <div>No results were found...</div>
                ) :
                    <Table cellPadding={5} cellSpacing={5} className="table table-striped  table-responsive table-hover table-fit">

                        <thead>
                            <tr className="bg-primary">
                                {columns.map((heading, i) => <th key={i}>{heading}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr
                                    key={item.id}
                                    onClick={event => window.location.href = item.website}
                                >

                                    {columns.map((column, i) => (
                                        <td key={i}>
                                            {item[column.toLowerCase()]}
                                        </td>
                                    ))}

                                </tr>
                            ))}

                        </tbody>
                    </Table>

                }

            </div>
        )
    }
}

export default AllRestaurants;