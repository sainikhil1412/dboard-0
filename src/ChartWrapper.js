import React, { Component } from 'react';
import D3Chart from './D3Chart'
class ChartWrapper extends Component {

    componentDidMount(){
        new D3Chart(this.refs.chart)
    }
    render() {
        return (
            <div>
                <div ref="chart"> </div>
            </div>
        );
    }
}

export default ChartWrapper;