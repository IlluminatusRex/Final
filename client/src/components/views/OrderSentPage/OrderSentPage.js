import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getAllOrders } from '../../../redux/ordersRedux';

const OrderSentPage = () => {
  const orders = useSelector(getAllOrders);
  console.log(orders);
  return (
    <div className="container text-center w-100">
      <h2 className="m-5">Your Order has been sent!</h2>
    </div>
  );
};

export default OrderSentPage;