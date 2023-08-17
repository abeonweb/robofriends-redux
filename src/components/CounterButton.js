import React, { Component } from 'react'

export default class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState)
        if(this.state.count !== nextState.count)
            return true
    }

    increaseCount = () => {
        this.setState((state) =>({count: state.count + 1}))
    }

    render() {
        console.log('CounterButton')
        return <button 
            style={{backgroundColor: this.props.color, padding: '0.5em 1em'}} 
            onClick={()=> this.increaseCount()}>Count: {this.state.count}
        </button>
    }
}