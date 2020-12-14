import React, { Component } from 'react'

export default class GetRestaurants extends Component {
    render() {
        


        return (
<> 
            <Search>
                <div>
                    <input id='getRestaurants' type='text' className='getRestaurants' onChange={e => this.props.GetRestaurants(e.target.value)}/>
                </div>
            </Search>


            <Filter>
<a class="waves-effect waves-light btn">button</a>
<a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>
<a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>button</a>
        
            </Filter>
  </>
        )
    }
}
