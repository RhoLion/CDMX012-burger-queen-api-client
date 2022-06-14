import React from 'react';
import styles from './ChefView.module.css';

const PendingTable = ({ orders, updateOrderStatus }) => {

console.log('123', orders);
  return (
    <div className={styles.menuOrderContainer}>
      <article className={styles.split}>
        <section className={styles.tableContainer1}>
          <table>
            <thead>
              <tr>
                <th>Mesa</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>tiempo</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.filter((e) => e.status === 'pendiente').map((order) => {

                  return (
                    <>
                      <tr key={order.id}>
                        <td >{order.table}</td>
                        <td >{order.product}</td>
                        <td >{order.quantity}</td>
                        <td >{order.date}</td>
                        <td >
                          <button onClick={() => updateOrderStatus(order)}>{order.status}</button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </section>
      </article>
    </div>
  );
};

export default PendingTable;
