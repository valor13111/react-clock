import React, { Component } from 'react';

import './Display.css';

class Display extends Component {
    state = {
        date: new Date()
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="display">
                <div className="display-time">{this.state.date.toLocaleTimeString()}</div>
                {this.props.toggleDate ? <div className="display-date">{this.state.date.toDateString()}</div> : null}
            </div>
        );
    }
}

export default Display;