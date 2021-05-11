import React, { Component } from 'react';

class ButtonClicked extends Component {
    constructor(props) {
        super(props);
        this.state={
            message:'',
           
        }
        this.state={
             bgColor:"Red"
           
        }
        
    }
    eventHandler(){
        this.setState({
            message:'Button Clicked',
            bgColor:"Green"
        })
        
    }
    
    render() {
        return (
            <div>
                
                
                <div style={{backgroundColor: this.state.bgColor ,color:this.state.bgColor, height:'50%',width:'50%',padding:'10%',marginLeft:'15%',marginTop:'10%'}}>{this.state.bgColor}</div>
                <button onClick={()=>this.eventHandler()} >Press</button>
                <div>{this.state.message}</div>
            </div>
        );
    }
}



export default ButtonClicked;
