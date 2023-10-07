import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.footerMenu}>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-6 col-md-3">
            <div className={styles.menuWrapper}>
              <h6>Information</h6>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Policy</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-12 col-sm-6 col-md-3">
            <div className={styles.menuWrapper}>
              <h6>My account</h6>
              <ul>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">My cart</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-12 col-sm-6 col-md-3">
            <div className={styles.menuWrapper}>
              <h6>Products</h6>
              <ul>
                <li>
                  <a href="#">New products</a>
                </li>
                <li>
                  <a href="#">Best Sellers</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.bottomBar}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-12 col-lg-3"></div>
          <div
            className={
              'col col-12 text-center col-sm-6 text-sm-left col-lg-3 text-lg-center ' +
              styles.copyright
            }>
            <p>©Copyright 2023 CourseApp | All Rights Reserved</p>
          </div>
          <div
            className={
              'col col-12 text-center col-sm-6 text-sm-right col-lg-3 text-lg-right ' +
              styles.socialMedia
            }>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;