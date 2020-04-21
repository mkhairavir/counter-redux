import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const Header = (props) => {
    // console.log("props header", props)
    return(
        <div>
            <button onClick={() => props.history.push("/")}>Home</button>
            <button onClick={() => props.history.push("/icecream")}>IceCream</button>
            <button onClick={() => props.history.push("/cakes")}>Cakes</button>
        </div>
    )
}

const mapStateToProps = ({cakes}) => {
    return {
        iceCream:cakes
    }
}

export default connect(mapStateToProps,null)(withRouter(Header))