import React, { Component } from 'react';
import '../App.css';


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
            <div>
                <div >
                <p style={{marginRight:'72.4%',fontSize:'24px'}}>Hello</p>
                <p style={{marginRight:'67.8%',fontSize:'24px'}}>Hello Hello</p>
                <p style={{marginRight:'63.2%',fontSize:'24px'}}>Hello Hello Hello</p>
                <p style={{marginRight:'58.5%',fontSize:'24px'}}>Hello Hello Hello Hello</p></div>
                <div  class="box2 stack-top" style={{backgroundColor: this.state.bgColor ,color:this.state.bgColor, width:'1px',padding:'100px',marginLeft:'250px',marginTop:'180px',marginBottom:'20px',height:'140px'}}>{this.state.bgColor}</div>
            </div>  
            <div style={{display:'flex',height:'320px',alignItems:'flex-end'}}>  
                <button style={{backgroundColor: 'red' ,height:'30px', marginLeft:'275px',width:'150px' }}onClick={()=>this.eventHandler() } >Press</button>
                
            </div>
            <div style={{display:'flex',height:'40px',alignItems:'flex-end'}}>  
                
                <div style={{ marginLeft:'275px',width:'150px'}}>{this.state.message}</div>
            </div>

            </div>
        );
    }
}

export default ButtonClicked;
