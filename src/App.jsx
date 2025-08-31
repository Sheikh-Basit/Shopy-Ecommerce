import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import Main from "./Pages/Main"
import Cart from "./Pages/Cart"
import ProductDetail from "./Pages/ProductDetail"
import Checkout from "./Pages/Checkout/Checkout"

function App() {

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
      </Routes>
    </Router>
  )
}

export default App
