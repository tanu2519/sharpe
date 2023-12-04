import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import Transaction from './components/Transaction'
import Data from './components/Data'
import Error from './components/Error'
import Layout from './components/Layout';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home />} />
        <Route path='transaction' element={<Transaction/>}/>
        <Route path='data' element={<Data/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
