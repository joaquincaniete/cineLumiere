
import './App.css';
import NavBar from './components/NavBar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './components/Home';
import {ItemDetailContainer} from  './components/ItemDetailContainer'
import Error404 from './components/Error404';
import Footer from './components/Footer';
import { ItemCategoryContainer } from './components/ItemCategoryContainer';
import Login from './components/Login';
import Cart from './components/Cart';
import {Layout} from "antd";
import {Helmet} from "react-helmet";
import { CartProvider } from './components/context/CartContext';





function App() {

  

  return (
    <Layout>

    <div className="App">
      <Helmet>
      <meta charSet="utf-8" />
                <title>Cine Lumiere</title>
                <link rel="canonical" href="http://cinelumiere.com" />
      </Helmet>
         

          <BrowserRouter>

          


            <NavBar style={{zIndex: 1}}/>

            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/pelicula/:id' element={<ItemDetailContainer/>}/>
              <Route exact path='/category/:tipo' element ={<ItemCategoryContainer/>}/>
              <Route exact path='/login' element={<Login/>}/>
              
              <Route exact path='/cart' element={
                <CartProvider>
                  <Cart/>
                </CartProvider>
                  }/>
              
              <Route path='*' element= {<Error404/>}/>
            </Routes>

          
            <Footer/>
        </BrowserRouter>
          
        
    </div>
   
    </Layout>
  );
}

export default App;
