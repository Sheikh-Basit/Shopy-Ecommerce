import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import Main from "./Pages/Main"
import Cart from "./Pages/Cart"
import ProductDetail from "./Pages/ProductDetail"
import Checkout from "./Pages/Checkout/Checkout"
import Footer from "./components/Footer"

function App() {

  return (
    <Router>
      
      <Routes>
        <Route path="/Shopy-Ecommerce" element={<Main/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
      </Routes>

      <Footer/>
    </Router>
  )
}

export default App
