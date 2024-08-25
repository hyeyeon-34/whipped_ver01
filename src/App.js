import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage'
import SubPage from './components/SubPage'
import Login from './components/Login'
import Join from './components/Join'
import Purchase from './components/Purchase'
import DetailPage from './components/DetailPage'
import Cart from './components/Cart'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
  <Routes>
    <Route path="/" element={<MainPage/>}></Route>
    <Route path="/subpage" element={<SubPage/>}></Route>
    <Route path="/detail" element={<DetailPage/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/join" element={<Join/>}></Route>
    <Route path="/purchase" element={<Purchase/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
  </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
