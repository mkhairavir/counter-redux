import React from 'react'
import {connect} from 'react-redux'
import {addCakes, minusCakes} from '../Redux/Actions/CakesAction.js'


const Cakes = (props) => {
    console.log("props keks",props)
    return(
        <div>
            <h1>Cakes</h1>
            <h3>I have {props.cakes} Cakes</h3>
            <div>
                <button onClick={props.addCakes}>Plus</button>
                <button onClick={props.minusCakes}>Minus</button>
            </div>    
        </div>
    )
}

const mapStateToProps = (props) => {
    console.log("props state cakes", props)
    return{
        cakes: props.cakesReducer.cakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCakes: () => dispatch(addCakes()),
        minusCakes: () => dispatch(minusCakes())
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(Cakes)