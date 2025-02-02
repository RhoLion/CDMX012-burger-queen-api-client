import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { UserContext } from './context/UserProvider';

import Login from './routes/Login';
import AdminView from './components/adminView/AdminView';
import WaiterView from './components/waiterView/WaiterView';
import Home from './routes/Home';
import ChefView from './components/chefview/ChefView';
import AddProduct from './components/adminView/productsComponents/AddProduct';
import EditProduct from './components/adminView/productsComponents/EditProduct';
import fetchProducts from './hooks/Products';

const App = () => {
  const [products] = fetchProducts();
  const { userRol } = useContext(UserContext);
  console.log('desde app', userRol);

  return (
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/home' element={<Home />} />
      <Route exact path='/adminView' element={<AdminView />} />
      <Route exact path='/adminView/new' element={<AddProduct/>} />
      <Route exact path='/adminView/edit/:id' element={<EditProduct products={products} />} />
      <Route exact path='/waiterView' element={<WaiterView />} />    
      <Route exact path='/chefView' element={<ChefView />} /> 
    </Routes>
  );
};

export default App;
