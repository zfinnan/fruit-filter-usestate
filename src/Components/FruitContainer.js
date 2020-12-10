import React, { useState } from 'react';

import List from './List';
import Input from './Input';

function FruitContainer(props) {
    const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits)
    const [filterValue, setFilterValue] = useState('')

    const handleFilterChange = (e) => {
        e.preventDefault()
        const filteredValue = e.target.value
        const filteredFruitList = props.fruits.filter((fruit) => {
            return fruit.toLowerCase().includes(filterValue.toLowerCase())
        })
        setFruitsToDisplay(filteredFruitList)
        setFilterValue(filteredValue)
    }
    
    return(
        <div>
            <Input value={filterValue} onChange={handleFilterChange}/>
            <List fruits={fruitsToDisplay}/>
        </div>
    )
}



// Components
// import List from './List';
// import Input from './Input';

// class FruitContainer extends Component {
//     constructor(props) {
//         super()

//         this.state = {
//             // initialize the fruit list to the full list passed into props
//             fruitsToDisplay: props.fruits,
//             // initialize the filter value to empty string
//             filterValue: ''
//         };      
//     }

//     handleFilterChange = (e) => {
//         e.preventDefault();
//         let filterValue = e.target.value;
//         // remove fruits that don't container filter value
//         const filteredFruitList = this.props.fruits.filter(fruit => {
//             return fruit.toLowerCase().includes(filterValue.toLowerCase())
//         })
//         this.setState({ fruitsToDisplay: filteredFruitList, filterValue })
//     }

//     render() {
//         // console.logs must go above returns
//         // Inside of Input Component, to access props, I will say props.value
//         // Inside of Input Component, to access props, I will say props.fruits
//         console.log('---- state ----')
//         console.log(this.state.fruitsToDisplay);
//         console.log('---- props ----')
//         console.log(this.props.fruits);
//         return (
        //     <div>
        //         <Input value={this.state.filterValue} onChange={this.handleFilterChange}/>
        //         <List fruits={this.state.fruitsToDisplay}/>
        //     </div>
        // )
//     }
// }



export default FruitContainer
