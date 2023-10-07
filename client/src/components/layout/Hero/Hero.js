import React from 'react';
import styles from './Hero.module.scss';

import Button from '../../common/Button/Button';

const Hero = () => (
  <section id="hero" className={styles.root}>
    <div className={styles.hero_container}>
      <div className={styles.hero_headers}>
        <h1>
          Online courses wherever 
            <span> you are</span> 
        </h1>
        <div className={styles.slogan}>
          <h3>
           Be the boss of your time
          </h3>
          <Button href={'#courses'}>See our courses</Button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;