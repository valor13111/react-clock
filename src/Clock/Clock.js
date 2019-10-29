import React, { Component } from 'react';

import Panel from './Panel/Panel';
import Display from './Display/Display';

class Clock extends Component {
    state = {
        toggleDate: true
    }

    toggleDateFunction = () => { 
        this.setState({toggleDate: !this.state.toggleDate}); 
    }

    render() {
        return(
            <div>
                <Panel toggleDateFunction={this.toggleDateFunction}/>
                <Display toggleDate={this.state.toggleDate}/>
            </div>
        );
    }
};

export default Clock;