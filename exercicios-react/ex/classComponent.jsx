import React, { Component } from 'React'

export default class ClassComponent extends Component {

    render() {
        return (
            <h1>{this.props.value}</h1>
        )
    }

}