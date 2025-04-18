import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Product from './Product';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='product/:id'  element={<Product />}/>
      </Routes>
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
