import { useState } from 'react'
import './App.css'
import Wrapper from "./components/Wrapper";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Wrapper />
    </div>
  )
}

export default App
