import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import Main from "./Pages/Main"
import Cart from "./Pages/Cart"

function App() {

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  )
}

export default App
