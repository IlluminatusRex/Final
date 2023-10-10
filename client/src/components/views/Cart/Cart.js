import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getCart } from '../../../redux/cartRedux';
import { useState } from 'react';
import CartCourse from '../../features/CartCourse/CartCourse';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import Button from '../../common/Button/Button';

const Cart = () => {
  let cart = useSelector(getCart);
  let data = window.performance.getEntriesByType("navigation")[0].type;
  console.log(data);

  if (data !== 'reload') {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  return (
    <div className="container-fluid justify-content-center">
      <h1 className="text-center m-4">Your Cart</h1>
      <>
        {cart.length === 0 ? (
          <h3 className="text-center m-4">No courses</h3>
        ) : (
          <>
            {cart.map((course) => (
              <div key={course.id} className="row">
                <CartCourse {...course} />
              </div>
            ))}
            <div className="m-4 p-4 text-center">
              <OrderSummary totalPrice={cart[0].totalPrice} />
              <Button to={'/cart/checkout'}>Checkout</Button>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default Cart;