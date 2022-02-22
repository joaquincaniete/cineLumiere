import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { itemDetail } from './components/ItemDetail';
import { Home } from './components/Home';
import {ItemDetailContainer} from  './components/ItemDetailContainer'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar/>
          <ItemListContainer greetings="Bienvenido a nuestro E-commerce"/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/pelicula/:id' element={<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>
        
    </div>
   
  );
}

export default App;
