import React, { Component } from 'react';

class Restaurants extends Component {

    render() {

        const isEmpty = this.props.restaurants.length === 0;
        const data = this.props.restaurants;

        const columns = ['Name', 'City', 'State', 'Telephone', 'Genre']
        return (
            <div className="mb-3 item-list" >
                {isEmpty ? (
                    <div>Sorry, no results found.</div>
                ) :
                    <Table cellPadding={5} cellSpacing={5} className="table">

                        <div>
                            <h5 className="bg-primary">
                                {columns.map((heading, i) => <th key={i}>{heading}</th>)}
                            </h5>
                        </div>
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

export default Restaurants;