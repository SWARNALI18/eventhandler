import React, { Component } from 'react';

class ButtonClicked extends Component {
    constructor(props) {
        super(props);
        this.state={
            message:''
            
        }
        this.state={
            color:'red' 
        }
        
    }
    eventHandler(){
        this.setState({
            message:'Button Clicked'
        })
        this.setState({
            color:'green'
        })
    }
    
    render() {
        return (
            <div>
                <div className="padding">{this.state.color}</div>
                <button onClick={()=>this.eventHandler()}>Press</button>
                <div>{this.state.message}</div>
            </div>
        );
    }
}

export default ButtonClicked;