import React from 'react'

import PlacarContainer from './PlacarContainer'

const dados = {
    partida: {
        estadio: "Maracanã/RJ",
        data: "09/05/2017",
        hora: "19:00"
    },
    casa: {
        nome: "Vasco"
    },
    visitante: {
        nome: "Flamengo"
    }
}

export default class App extends React.Component {
    render() {
        return (
            <PlacarContainer {...dados} />
        )
    }
}