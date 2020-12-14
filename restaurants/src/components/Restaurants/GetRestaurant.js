import React, { Component } from 'react'

export default class GetRestaurant extends Component {
    render() {
        


        return (
            <Search>
                <div>
                    <input id='getRestaurant' type='text' className='getRestaurant' onChange={e => this.props.GetRestaurant(e.target.value)}/>
                </div>
            </Search>


            <Filter>
                <button>
{/* //This button may need more elements, test it */}
<a class="waves-effect waves-light btn">button</a>
<a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>
<a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>button</a>
                </button>
        
            </Filter>
        )
    }
}
