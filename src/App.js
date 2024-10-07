
import './App.css';
//import { Route, Router, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainlayout from './Components/Mainlayout/Mainlayout'
import Login from './Components/Loginpage/Login'
import Admin from './Components/Admin/Admin'
import Product from './Components/Products/Product';
import Details from './Components/Productdetails/Details'
import Home from './Components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="" element={<Mainlayout />}>
            <Route path="details/:id" element={<Details />} />
            <Route path="/product" element={<Product />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </Router>


    </>
  );
}

export default App;
