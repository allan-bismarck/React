import React from 'react'

class Altura extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }

    render() {
        return (
            <div>
            <label>
                Altura
                <input type="text" value={this.props.a} onChange={(e) => {this.props.sa(e.target.value)}}/>
            </label>
            </div>
        )
    }
}

export default Altura;