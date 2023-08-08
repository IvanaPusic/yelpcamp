import { Link } from 'react-router-dom';
import checkmark from '../../assets/Checkmark.svg';
import logo from '../../assets/yelpcamp.svg';
import styles from './landingPage.module.css';

const LandingPage = () => {
  return (
    <section className={styles.campground}>
      <div className={styles.logoContainer}>
        <img src={logo} alt='logo' />
      </div>
      <div className={styles.imgContainer}></div>
      <div className={styles.showcase}>
        <h1 className={styles.title}>Explore the best camps on Earth.</h1>
        <p className={styles.content}>
          Yelpcamp is a curated list of the best camping spots on Earth.
          Unfiltered and unbiased reviews.
        </p>
        <div className={styles.list}>
          <div className={styles.listItem}>
            <span>
              <img src={checkmark} alt='checkmark' />
            </span>
            <span>Add your own campground suggestions.</span>
          </div>
          <div className={styles.listItem}>
            <span>
              <img src={checkmark} alt='checkmark' />
            </span>
            <span>Leave reviews and experiences.</span>
          </div>
          <div className={styles.listItem}>
            <span>
              <img src={checkmark} alt='checkmark' />
            </span>
            <span>See locations for all camps.</span>
          </div>
        </div>
        <button className={styles.campgroundBtn}>
          <Link to='/campgrounds'>View Campgrounds</Link>
        </button>
      </div>
    </section>
  );
};

export default LandingPage;
