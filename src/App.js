import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './components/Home';
import NavbarNew from './components/NavbarNew';
import ProductInfo from './components/ProductInfo';
import Cart from './components/Cart'
import {CartProvider} from 'react-use-cart';
function App() {
  return (
    <>



    <CartProvider>
      <Router>
        <NavbarNew/>
          <Routes>

              <Route path='/' element={<Home/>}/>
              <Route path='/productinfo/:id' element={<ProductInfo/>}/>
              <Route path='/cart' element={<Cart/>}/>


          </Routes>


      </Router>
      </CartProvider>        
    </>
  );
}

export default App;
