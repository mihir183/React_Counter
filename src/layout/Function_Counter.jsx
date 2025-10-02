import React, { useState } from 'react'

function Function_Counter(){

    const [count,setCount] = useState(0)

    function inc(){
        setCount(count + 1)
    }

    function dec(){
        count > 0 ? setCount(count-1) : count
    }
    return (
      <>
        <div className='container mt-5'>
            <h1 className='text-center text-capitalize mb-5'>counter with function</h1>
            <div className="text-center">
                <h2 className='fs-1'>{count}</h2>
                <button className='btn btn-success mx-1' onClick={inc}>+</button>
                <button className='btn btn-danger mx-1' onClick={dec}>-</button>
            </div>
        </div>
      </>
    )
}

export default Function_Counter
