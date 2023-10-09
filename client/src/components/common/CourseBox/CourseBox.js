import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './CourseBox.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar } from '@fortawesome/free-solid-svg-icons';

import CoursePopup from '../../features/CoursePopup/CoursePopup';

const CourseBox = ({
  id,
  category,
  description,
  author,
  price,

}) => {
  const props = {
    id,
    category,
    description,
    author,
    price,
  };
  const [showPopup, setShowPopup] = useState(false);
  const [popup, setPopup] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 500) {
      setPopup(true);
    } else {
      setPopup(false);
    }
  }, [window.innerWidth]);

  const closePopup = () => {
    setShowPopup(false);
  };
  const openPopup = () => {
    setShowPopup(true);
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <div>
          <div className={styles.content}>
            <Link to={`course/${id}`}>
              <h4>{category}</h4>
              <h5>{description}</h5>
            </Link>
          </div>
          
        </div>
        <Link to={`course/${id}`}>
          <img
            className={styles.image}
            alt={id}
            src={process.env.PUBLIC_URL + `/images/course/${id}.jpg`}
          />
        </Link>
        
        <div className={styles.description}>
          <div className={styles.info}>
          </div>
          {popup && <button onClick={openPopup}>Quick View</button>}
          <div className={styles.priceBox}>
            <span>{price}</span>
            <div>
              <FontAwesomeIcon icon={faDollar} />
            </div>
          </div>
        </div>
      </div>

      {showPopup &&
        popup &&
        createPortal(
          <CoursePopup {...props} closePopup={closePopup} />,
          document.body
        )}
    </div>
  );
};

export default CourseBox;