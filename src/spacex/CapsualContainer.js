import React, { Component } from 'react';

 class CapsualContainer extends Component{

    render(){
        return(
            <div className="card">
                <div className="card-body">
                     <h1 className="text-success">{this.props.title}</h1>
                     <h5 className="text-danger"> {this.props.type}</h5>
                     <h6 className="text-primary">{this.props.detail}</h6>
                </div>
          </div>
        )

    }
}
export default CapsualContainer;