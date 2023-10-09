import React, { useState, useEffect } from 'react';
import styles from './CourseCatalogue.module.scss';
import { useDispatch } from 'react-redux';
import { loadCourses } from '../../../redux/coursesRedux';
import { API_URL } from '../../../config';
import  CourseBox from '../../../components/common/CourseBox/CourseBox';

const CourseCatalogue = () => {
  const [itemsPerRow, setItemsPerRow] = useState(3);
  const [activePage, setActivePage] = useState(0);
  const [viewport, setViewport] = useState(window.innerWidth);
  const [fade, setFade] = useState(false);
  const [Courses, setCourses] = useState([]);

  const dispatch = useDispatch();

  const fetchCourses = () => {
    fetch(`${API_URL}/api/Courses`)
      .then((res) => res.json())
      .then((res) => {
        setCourses(res);
        dispatch(loadCourses(res));
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const pagesCount = Math.ceil(Courses.length / (itemsPerRow * 2));

  const updateItemsPerRow = () => {
    
  };

  const handleResize = () => {
    setViewport(window.innerWidth);
    updateItemsPerRow();
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
  });

  const handlePageChange = (newPage) => {
    setActivePage(newPage);
  };

  const nextPage = () => {
    if (activePage < pagesCount - 1) {
      setActivePage(activePage + 1);
    } else {
      setActivePage(0);
    }
  };

  const prevPage = () => {
    if (activePage === 0) {
      setActivePage(pagesCount - 1);
    } else {
      setActivePage(activePage - 1);
    }
  };

  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li key={i}>
        <button
          onClick={() => handlePageChange(i)}
          className={i === activePage ? styles.active : ''}
        >
          Page {i}
        </button>
      </li>
    );
  }

  return (
    <>
      <div id="Courses" className={styles.root}>
        <div className="container-fluid">
          <div className={styles.panelBar}>
            <div className="row no-gutters">
              <div className={`col-auto ${styles.heading}`}>
                <h3>Our Courses</h3>
              </div>
              <div className={`col ${styles.menu}`}></div>
              <div className={`col-auto ${styles.dots}`}>
                
              </div>
            </div>
          </div>
          <div
            className={`${fade ? styles['fade-out'] : ''} ${
              styles['products-view']
            } row`}
          >
            {dots.length > 1 && (
              <>
                <button className={styles.rightArrow} onClick={nextPage}>
                  Right Arrow
                </button>
                <button className={styles.leftArrow} onClick={prevPage}>
                  Left Arrow
                </button>
              </>
            )}
            {Courses.slice(
              activePage * itemsPerRow * 2,
              (activePage + 1) * itemsPerRow * 2
            ).map((item, index) => (
              <div key={index} className={`col-${12 / itemsPerRow}`}>
                <CourseBox {...item} />
                <div>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCatalogue;