function FruitList(props) {
    const fruitItems = props.fruits.map((eachFruit, index) => {
        return <li key={index}>{eachFruit}</li>
    })
    
    return(
        <div>
            <ul>
                {fruitItems}
            </ul>
        </div>
    )
}


export default FruitList

