import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getCart } from '../../../redux/cartRedux';
import styles from './Checkout.module.scss';

import OrderSummary from '../../features/OrderSummary/OrderSummary';
import Orders from '../../features/Orders/Orders';
import OrderForm from '../../features/OrderForm/OrderForm';

const Checkout = () => {
  const cart = useSelector(getCart);

  return (
    <div>
      <div className="d-flex flex-column">
        {cart.map((course) => (
          <div key={course.id}>
            <Orders {...course} />
          </div>
        ))}
        <OrderForm />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;