import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const Header = (props) => {
    // console.log("props header", props)
    return(
    
        <div>
            <h3>Jumlah Es Krim: {props.iceCream}</h3>
            <h3>Jumlah Keiks: {props.cakes}</h3>
            <button onClick={() => props.history.push("/")}>Home</button>
            <button onClick={() => props.history.push("/icecream")}>IceCream</button>
            <button onClick={() => props.history.push("/cakes")}>Cakes</button>
        </div>
    )
}

const mapStateToProps = (props) => {
    return {
        iceCream:props.iceCreamReducer.iceCream,
        cakes: props.cakesReducer.cakes
    }
}

export default connect(mapStateToProps,null)(withRouter(Header))