// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Gallery from './components/Gallery';
// import Services from './components/Services';
// import Faq from './components/Faq';
// import Footer from './components/Footer';
// import Cart from './Cart';
// import OrderForm from './OrderForm';
// import Payment from './Payment';
import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import Catalog from './components/Catalog';
import Cart from './Cart';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Dashboard from './admin/Dashboard';
import TableAdmin from './components/admin/TableAdmin';
import Login from './components/admin/Login';

function App() {
  
  return (
   <div>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Catalog' element={<Catalog/>}/>
      <Route path='/cart' element={<Cart />} />
      <Route path='/admin' element={<Login/>} />
      <Route path='/admin/dashboard' element={<Dashboard />} />
      <Route path='/admin/table' element={<TableAdmin />} />
    </Routes>
   </div>
  );
}

export default App;
