import { useState } from 'react'
import Function_Counter from './layout/Function_Counter'
import Class_Counter from './layout/Class_Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Function_Counter/> */}
      <Class_Counter/>
    </>
  )
}

export default App
