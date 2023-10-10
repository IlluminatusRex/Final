import React from 'react';

import styles from './Orders.module.scss';

const Orders = ({ id, brand, model, days, totalPrice }) => (
    <div className="container d-flex">
      <img
        className="w-50 rounded"
        alt={id}
        src={process.env.PUBLIC_URL + `/images/course/${id}.jpg`}
      />
      <div className={styles.test}>
      <div className="w-50 text-center">
        <div className="m-3">
          <h5>Course members: {days}</h5>
        </div>
        <div>
          <h5>Total price: {totalPrice}$</h5>
        </div>
      </div>
    </div>
  </div>
);

export default Orders;