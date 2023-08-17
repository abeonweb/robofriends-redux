import React, {Component} from "react";
import CounterButton from "./CounterButton";

export default class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState)
        return false
    }

    render() {
        console.log('Header')
        return (
            <header className="tc">
                <h1 className='f2'>RoboFriends</h1>
                <CounterButton color={'red'} />
            </header>
        )
    }
}
