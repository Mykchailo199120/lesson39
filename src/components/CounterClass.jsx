// src/CounterClass.jsx
import React, { Component } from 'react';

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0, // Ініціалізація стану
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 }); // Збільшення лічильника на 1
    };

    render() {
        return (
            <div>
                <h1>Лічильник: {this.state.count}</h1>
                <button onClick={this.increment}>Збільшити</button>
            </div>
        );
    }
}

export default CounterClass;