import React, { Component } from 'react';
import Test from './Test';
class Landing extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Ram prakash",
            mob:"7978000012"
        }
        
    }
    
    render(){
        console.log(this.state);
        
        return(
        <div>

                {this.state.name}
                {this.state.mob}   
                <button onClick={()=> this.setState({name:"nishant"})}>click me</button>
                <button onClick={()=>this.setState({mob:"7537970402"})}>call</button>
                hello
                <Test name="rohit"/> 
        </div>
        )
    }
}
export default Landing;