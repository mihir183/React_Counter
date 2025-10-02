import React, { Component } from "react";

class Class_Counter extends Component{

    constructor(){
        super()

        this.state = {
            count : 0
        }
    }

    inc = ()=>{
        this.setState({count : this.state.count + 1})
    }

    dec = ()=>{
        this.state.count > 0 ? this.setState({count : this.state.count - 1}) : this.state.count
    }

    render(){
        return(
            <>
                <div className='container mt-5'>
                    <h1 className='text-center text-capitalize mb-5'>counter with function</h1>
                    <div className="text-center">
                        <h2 className='fs-1'>{this.state.count}</h2>
                        <button className='btn btn-success mx-1' onClick={this.inc}>+</button>
                        <button className='btn btn-danger mx-1' onClick={this.dec}>-</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Class_Counter