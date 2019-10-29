import React, { Component } from 'react';

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
            <div>
                <h3>{this.state.date.toLocaleTimeString()}</h3>
                {this.props.toggleDate ? <h5>{this.state.date.toDateString()}</h5> : null}
            </div>
        );
    }
}

export default Display;