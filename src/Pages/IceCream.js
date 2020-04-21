import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addIceCream, minusIceCream} from '../Redux/Actions/IceCreamAction'


const IceCream = (props) => {
    console.log("props eskrim",props)
    return(
        <div>
            <h1>Ice cream</h1>
            <h3>I have {props.iceCream} Ice cream</h3>
            <div>
                <button onClick={props.addIceCream}>Plus</button>
                <button onClick={props.minusIceCream}>Minus</button>
            </div>    
        </div>
    )
}

const mapStateToProps = (props) => {
    return{
        iceCream: props.iceCreamReducer.iceCream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIceCream: () => dispatch(addIceCream()),
        minusIceCream: () => dispatch(minusIceCream())
    }
}




export default connect(mapStateToProps,mapDispatchToProps) (IceCream)