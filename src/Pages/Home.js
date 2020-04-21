import React from 'react'
import {connect} from 'react-redux'

const Home = (props) => {
    console.log("props icecream home", props)
    return (
        <div>
            <h1>Home</h1>
            <h2>Jumlah Cake saat ini {props.cakes} </h2>
            <h2>Jumlah Ice cream saat ini: {props.iceCream} </h2>
            <h2>Total item yang ada: {props.total}</h2>
        </div>
    )
}

const mapStateToProps = (props) => {
    return {
        iceCream: props.iceCreamReducer.iceCream,
        cakes: props.cakesReducer.cakes,
        total : props.cakesReducer.cakes + props.iceCreamReducer.iceCream
    }
}


export default connect(mapStateToProps,null)(Home)