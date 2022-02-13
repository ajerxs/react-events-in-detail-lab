import React, { Component } from "react";

export default class CoordinatesButton extends Component {

    getCoordinates = (e) => {
        const x = e.clientX
        const y = e.clientY
        const coordinates = [x, y]
        this.props.onReceiveCoordinates(coordinates)
    }

    render() {
        return (
            <button
            onClick={this.getCoordinates}>
            </button>
        )
    }
}