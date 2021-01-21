import React, { Component } from 'react';
import CustomModle from './CustomModle';

class Test extends Component {
    constructor(props) {
        // console.log("ram");
        super(props);
        this.state = {
            number: 0,
            show: false,
            gfbf:"abcd"
        }
    }

    // componentWillMount() {
    //     console.log("rohit");
    // }
    // componentDidMount() {
    //     console.log("raju");
    // }


    handleIncrement = () => {
        this.setState({ number: this.state.number + 1 })
    }
    handleDecrement = () => {
        if (this.state.number > 0) {
            this.setState({ number: this.state.number - 1 })
        }
    }
    

    handleParnterName = () => {
        this.setState({ show: true })
    }
    handleCloseModal = () =>{
            this.setState({ show: false })
        }

    render() {
        console.log(this.props);
        return (
            <div>
                <div className='container mt-3'>
                    <button className="btn btn-primary ml-3" onClick={this.handleIncrement}>+</button>
                    {this.state.number}
                    <button className="btn btn-warning mr-3" onClick={this.handleDecrement}>-</button>
                </div>

                <div>
                    <button onClick={this.handleParnterName}>click  gf/bf name</button>
                </div>
                {
                this.state.show ? "Riya ji" : ""
            }  

            {this.state.show && <CustomModle partner={this.state.gfbf} handleCLose={this.handleCloseModal} />}
             {this.state.show && (<
                  div className="modal d-block" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>{this.state.gfbf}.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{
                                this.setState({show:false})
                            }}>Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            )}   
            </div>
        )
    }
}
export default Test;