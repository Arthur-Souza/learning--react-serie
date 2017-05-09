import React from 'react'

import Time from './Time'
import Partida from './Partida'

export default class PlacarContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            gols_casa: 0,
            gols_visitante: 0
        }
        this.marcarGolCasa = this.marcarGolCasa.bind(this)
        this.marcarGolVisitante = this.marcarGolVisitante.bind(this)
    }

    marcarGolCasa() {
        this.setState({
            gols_casa: this.state.gols_casa += 1
        })
    }

    marcarGolVisitante() {
        this.setState({
            gols_visitante: this.state.gols_visitante += 1
        })
    }

    render() {
        return (
            <div>
                <div style={{float: "left", marginRight: "40px"}}>
                    <h3>Casa</h3>
                    <Time nome={this.props.casa.nome} gols={this.state.gols_casa} marcarGol={this.marcarGolCasa} />
                </div>
                <div style={{float: "left", marginRight: "40px"}}>
                    <Partida estadio={this.props.partida.estadio} data={this.props.partida.data} hora={this.props.partida.hora} />
                </div>
                <div style={{float: "left", marginRight: "40px"}}>
                    <h3>Visitante</h3>
                    <Time nome={this.props.visitante.nome} gols={this.state.gols_visitante} marcarGol={this.marcarGolVisitante} />
                </div>
            </div>
        )
    }
}