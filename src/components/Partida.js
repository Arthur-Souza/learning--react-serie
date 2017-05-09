import React from 'react'

export default class Partida extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.estadio}</div>
                <div>
                    <span>{this.props.data}</span>
                    <span> - </span>
                    <span>{this.props.hora}</span>
                </div>
            </div>
        )
    }
}