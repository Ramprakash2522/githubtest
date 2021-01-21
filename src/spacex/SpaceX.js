
import React, {Component} from 'react';
 import axios from 'axios';
 import CapsualContainer from "./CapsualContainer";
class SpaceX extends Component{
    constructor(props){
        super(props);
        this.state={
           capsual:[]
        }

    }
    componentDidMount(){
     axios.get("https://api.spacexdata.com/v3/capsules").then(res=>{
         this.setState({capsual: res.data})
     })  
    }
    render(){
console.log(this.state.capsual);
let {capsual } = this.state;
        return(

                <div className="container-fluid">
                    <div className="row">
                    {
                    capsual.map ((data, index)=>{
                        return(
                            <div className="col-sm-3 mt-3" key={index}>
                                <CapsualContainer 
                                title={data.capsule_id}
                                type={data.type}
                                detail={data.details}
                                />
                            </div>

                        )
                    })

                    
                       }   </div>
                </div>

        )
        

    }
}
export default SpaceX;