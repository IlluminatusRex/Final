import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './CoursePopup.module.scss';
import { addCourseToCart } from '../../../redux/cartRedux';

import Button from '../../common/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMinus,
  faPlus,
  faTimes,
  faDollar,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';

const CoursePopup = ({
  id,
  closePopup,
  category,
  description,
  author,
  price,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [days, setDays] = useState(1);
  let totalPrice = price * days;

  const course = {
    id,
    category,
    description,
    author,
    price,
    days,
    totalPrice,
  };

  const addToCart = (payload) => {
    dispatch(addCourseToCart({ ...course }));
    navigate('/cart');
  };

  const addDays = () => {
    setDays((prev) => prev + 1);
  };

  const subtractDays = () => {
    if (days > 1) {
      setDays((prev) => prev - 1);
    } else {
      setDays(1);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.exit} onClick={closePopup}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.image}>
            <img
              alt={id}
              src={
                process.env.PUBLIC_URL + `/images/course/${id}.jpg`
              }
            />
          </div>
          <div className={styles.courseInfo}>
            <h1>{category}</h1>
            <h3>{description}</h3>
            <div className={styles.bottomBox}>
              <div className={styles.leftColumn}>
                <div className={styles.specs}>
                  <div className={styles.box}>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faPerson} />
                      <span> Author: {author}</span>
                    </div>
                    
                  </div>
                  <div className={styles.box}>
                    <div className={styles.icon}>
                      <span> Price: {price} $</span>
                    </div>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.icon}>
                      <span>Course members: {days} </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.rightColumn}>
                <div className={styles.description}>
                  <h3>Details</h3>
                  <p>{description}</p>
                </div>
                <div className={styles.priceBox}>
                  <div className={styles.daysPicker}>
                    <h5>Course members: </h5>
                    <div>
                      <Button onClick={subtractDays}>
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                      <p>{days}</p>
                      <Button onClick={addDays}>
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <h5>Total price:</h5>
                    {totalPrice}$
                  </div>
                  <div className={styles.addToCart}>
                    <Button onClick={addToCart}>Add to Cart</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePopup;