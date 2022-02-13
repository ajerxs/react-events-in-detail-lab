import React, { Component } from "react";

export default class DelayedButton extends Component {

    delayButton = (e) => {
        e.persist()
        setTimeout(this.props.onDelayedClick, this.props.delay, e)
    }
    render() {
        return (
            <button
            onClick={this.delayButton}>
            </button>
        )
    }
}