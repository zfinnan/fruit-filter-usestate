function Input(props) {
    return(
        <div>
            <label htmlFor="fruit-filter">Filter These Fruits: </label>
            <input type="text" value={props.value} onChange={props.onChange} name="fruit-filter" />
        </div>
    )
}

export default Input



// import React, { Component } from 'react';

// class Input extends Component {
//     constructor(props) {
//         super()

//         this.state = {};
//     }

//     render() {
//         return (
            // <div>
            //     <label htmlFor="fruit-filter">Filter These Fruits: </label>
            //     <input type="text" value={this.props.value} onChange={this.props.onChange} name="fruit-filter" />
            // </div>
//         )
//     }
// }



// export default Input