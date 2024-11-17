import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home'
import Shopping from './components/shopping';
import ShoppingItems from './components/shoppingItems';
import Gift from './components/gifts';
import HomeItems from './components/homeItems';
import AllItems from './components/allItems';

function App() {
  return (
    <div >
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/home/:id" element={<HomeItems/>}/>
        <Route  path='/shopping' element={<Shopping/>}/>
          <Route  path='/shopping/:id' element={<AllItems/>}/>
          {/* <Route  path='/gifts' element={<Gift/>}/> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
