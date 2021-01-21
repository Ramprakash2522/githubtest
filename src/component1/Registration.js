import React,{Component} from 'react';

class Registration extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className=" container mt-5 bg-info p-3 text-white">
              <h1 className='text-center mb-4'>Vendas Info</h1>
              <h6> Please Enter the Username password</h6>
              <input className='form-control' placeholder="email id"/>

              <input className='form-control mt-3' placeholder="Password" type='password'/>
              <div>
              <button className="btn btn-warning">Sign in</button>
            </div>
            <div className="text-warning">
            New user please register
            </div>


            </div>
        )
    }
}
export default Registration;
