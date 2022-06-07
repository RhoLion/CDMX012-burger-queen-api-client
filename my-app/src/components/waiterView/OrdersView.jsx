import React from 'react';
import OrderTable from './OrderTable';
import styles from './WaiterView.module.css';

const OrdersView = ({ orders, setOrders }) => {

  const removeProductFromOrder = (productId) => {
    const orderIndex = orders.findIndex(order => order.id === productId);
    const removedProduct = ([...orders.slice(0, orderIndex), ...orders.slice(orderIndex + 1)]);
    setOrders(removedProduct);
  };

  const totalAmountCount = (Object.values(orders).reduce((acum, { quantity, price }) => acum + quantity * price, 0));

  const incrementClik = (productId) => {
    const updateOrders = orders.map((order) => {
      if(productId === order.id) {
        const orderQuantity = order.quantity;
        return {...order, quantity: orderQuantity + 1};
      } else {
        return order;
      }
    });
    setOrders(updateOrders);  
  };

  const decrementClik = (productId) => {
    const updateOrders = orders.map((order) => {
      const orderQuantity = order.quantity;
      if (orderQuantity === 1) {
        return order;
      }
      if (productId === order.id) {
        const orderQuantity = order.quantity;
        return { ...order, quantity: orderQuantity - 1 };
      } else {
        return order;
      }
    });
    setOrders(updateOrders);
  };

  return (
    <div className={styles.container}>
        <OrderTable orders={orders} incrementClik={incrementClik} decrementClik={decrementClik}
          removeProductFromOrder={removeProductFromOrder} totalAmountCount={totalAmountCount} />
    </div>
  );
};

export default OrdersView;
