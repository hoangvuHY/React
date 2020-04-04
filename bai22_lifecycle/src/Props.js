import React, { Component } from 'react';

class Props extends Component {

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps Da chay Của Props' + nextProps.name);
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate Da chay Của Props');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate Da chay  Của Props');
        
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate Da chay  Của Props');
        
    }
    
    
    

    render() {
        console.log('reder cua props');
        return (
            <div>
                <h3> {this.props.name} </h3>

            </div>
        );
    }
}

export default Props;