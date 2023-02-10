import React, { useState } from 'react'
import Example from "./Eksample";




function App() {
  const [loading, setLoading] = useState(false)

  return (
    <div className="App">
        <Example onClick={() => setLoading(val => !val)} loading={loading}/>
    </div>
  )
}

export default App
