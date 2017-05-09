import React from 'react'

export default class Contador extends React.Component {
    constructor() {
        super()
        this.state = {
            contador: 0
        }
        this.add = this.add.bind(this)
        this.remove = this.remove.bind(this)
    }
    add() {
        this.setState({contador: this.state.contador += 1})
    }

    remove() {
        if(this.state.contador > 0) {
        this.setState({contador: this.state.contador -= 1})
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.contador}</h1>
                <button onClick={this.remove}>-</button>
                <button onClick={this.add}>+</button>
            </div>
        )
    }
}