import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import styles from './CoursePage.module.scss';

import Button from '../../common/Button/Button';

import { getCourseById } from '../../../redux/coursesRedux';
import { addCourseToCart } from '../../../redux/cartRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMinus,
  faPlus,
  faDollar,
} from '@fortawesome/free-solid-svg-icons';

const CoursePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseId } = useParams();
  const course = useSelector((state) => getCourseById(state, courseId));

  const [days, setDays] = useState(1);
  const [totalPrice, setTotalPrice] = useState(course[0].price);

  useEffect(() => {
    setTotalPrice(course[0].price * days);
  }, [days]);

  const addToCart = (payload) => {
    dispatch(addCourseToCart({ ...course[0], days, totalPrice }));

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
      <div className={styles.container + ' container-fluid'}>
        <div className={styles.leftColumn}>
          <div className={styles.image}>
            <img
              alt={course[0].id}
              src={
                process.env.PUBLIC_URL +
                `/images/course/${course[0].id}.jpg`
              }
            />
          </div>

          <div className={styles.info}>
            <div className={styles.specs}>
             
              <div className={styles.box}>
                <div className={styles.icon}>
                  <span>Author:</span>
                </div>
                <span>{course[0].author}</span>
              </div>
              <div className={styles.box}>
                <div className={styles.icon}>
                  <span>Category:</span>
                </div>
                <span>{course[0].category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container + ' container-fluid'}>
        <div className={styles.rightColumn}>
          <div className={styles.description}>
            <h3>Details</h3>
            <p>{course[0].description}</p>
          </div>
          <div className={styles.priceBox}>
            <h5>Days</h5>
            <div className={styles.daysPicker}>
              <Button onClick={subtractDays}>
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              <p>{days}</p>
              <Button onClick={addDays}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </div>
            <div className={styles.price}>
              <h5>Total price: </h5>
              <p>
                {totalPrice}  <FontAwesomeIcon icon={faDollar} className={styles.faDollar}/>
              </p>
            </div>
            <div className={styles.addToCart}>
              <Button onClick={addToCart}>Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;