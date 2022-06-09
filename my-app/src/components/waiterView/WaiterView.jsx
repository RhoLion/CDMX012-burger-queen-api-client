import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WAITER } from '../../common/constants';
import { UserContext } from '../../context/UserProvider';
import fetchProducts from '../../hooks/Products';
import addorders from '../../hooks/SaveOrder';
import MenuView from './MenuView';

const WaiterView = () => {
  const [orders, setOrders] = useState([]);
  const [products] = fetchProducts();

  const navigate = useNavigate();

  const { userRol, setUserRol, logout } = useContext(UserContext);

  useEffect(() => {
    if (!userRol || userRol.doc.rol !== WAITER) {
      navigate('/');
      setUserRol(null);
    }
  }, []);

  const handleLogOut = async (e) => {
    e.preventDefault();
    await logout();
    setUserRol(null);
    navigate('/');
  };
  
  const saveorders = () => {
    const orderDetail = Object.assign({}, { date: new Date(), table: 1, status: 'pendiente', products: orders });
    addorders(orderDetail);
  };

  return (
    <>
      <MenuView products={products} saveorders={saveorders} orders={orders} setOrders={setOrders} handleLogOut={handleLogOut} />
    </>
  );
};
export default WaiterView;
