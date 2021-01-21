import React, {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
    
    }
    render(){
        return(
            <div className="container mt-5  bg-info p-3 text-white">
            <h1 className="text-center mb-4 ">Vendos In </h1>
            <h6> Please Enter the Username password</h6>
            <input className="form-control mt-3" placeholder="email id"/>

            <input className="form-control mt-3" placeholder="Password" type='Password'/>
            <div className="mt-3 d-flex justify-content-center">
            <button className="btn btn-warning">Sign in</button>
            </div>
            <div className="text-warning">
            New user please register
            </div>
            </div>
        )
    }
}
export default Login;