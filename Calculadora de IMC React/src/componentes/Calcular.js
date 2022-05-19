import React from 'react'

class Calcular extends React.Component {
    constructor() {
        super()
        this.calc = this.fcalc.bind(this)
    }

    fcalc = () => {
        const r = this.props.p/(this.props.a*this.props.a)
        this.props.sr(r)
        console.log(r)
    }
    
    render() {
        return(
            <div>
                <button onClick= {this.calc}>Calcular</button>
            </div>
        )
    }
}

export default Calcular;