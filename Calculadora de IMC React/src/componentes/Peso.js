import React from 'react'

class Peso extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }

    render() {
        return (
            <div>
            <label>
                Peso
                <input type="text" value={this.props.p} onChange={(e) => {this.props.sp(e.target.value)}}/>
            </label>
            </div>
        )
    }
}

export default Peso;