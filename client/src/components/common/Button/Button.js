import React from 'react';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';

const Button = ({ href, children, to, onClick }) => {
  let Comp = Link;
  if (onClick) {
    Comp = 'button';
  } else if (href) {
    Comp = 'a';
  }

  return (
    <Comp className={styles.button} to={to} href={href} onClick={onClick}>
      {children}
    </Comp>
  );
};

export default Button;