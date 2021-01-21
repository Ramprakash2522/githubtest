import React, { Component } from 'react';

 class CustomModal extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className="modal d-block" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{this.props.partner}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{
                           this.props.handleCLose()
                        }}>Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default CustomModal;