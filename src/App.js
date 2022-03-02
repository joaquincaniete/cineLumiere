import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { itemDetail } from './components/ItemDetail';
import { Home } from './components/Home';
import {ItemDetailContainer} from  './components/ItemDetailContainer'
import Error404 from './components/Error404';
import Footer from './components/Footer';
import { ItemCategoryContainer } from './components/ItemCategoryContainer';
import Login from './components/Login';
import Cart from './components/Cart';




function App() {





  return (
    <div className="App">
        <BrowserRouter>
        <NavBar/>
          
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/pelicula/:id' element={<ItemDetailContainer/>}/>
            <Route exact path='/category/:tipo' element ={<ItemCategoryContainer/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
            <Route path='*' element= {<Error404/>}/>
          </Routes>

          <Footer/>
        </BrowserRouter>
        
    </div>
   
  );
}

export default App;
