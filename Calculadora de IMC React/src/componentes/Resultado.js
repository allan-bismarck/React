import React from 'react'

class Resultado extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }

    render() {
        return(
            <div>
            <p>Resultado: {this.props.r.toFixed(2)}</p>
            </div>
        )
    }
}

export default Resultado;