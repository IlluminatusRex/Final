import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getTotalPrice } from '../../../redux/cartRedux';

const OrderSummary = ({ totalPrice }) => {
  const arr = useSelector(getTotalPrice);

  const calculateTotal = (arr) => {
    return arr.reduce((total, item) => total + item, 0);
  };

  return (
    <div className="text-center m-4">
      <div className="m-4">
        <h2>Order summary: {calculateTotal(arr)}$</h2>
        <br></br>
      </div>
    </div>
  );
};

export default OrderSummary;