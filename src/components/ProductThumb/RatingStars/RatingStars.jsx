import React from 'react';
import PropTypes from 'prop-types';

import styles from './RatingStars.module.css';
import Icon from '../../UI/Icon/Icon';
/**
 * This component generates the rating
 * stars by item's rate
 */
const RatingStars = ({ rating, ratingLimit, theme }) => {
  const stars = [];
  // the initial className is only applied for unfilled stars
  const initialClass = [styles.Star];
  for (let i = 0; i < ratingLimit; i++) {
    if (rating > i) {
      // this className defines className of the
      // filled star depending on the style prop
      const className = [...initialClass, styles[theme]].join(' ');
      // this is the fillled star
      stars.push(
        <Icon type="ionic" icon="star" className={className} key={i} />
      );
    } else {
      // this is the unfilled star
      stars.push(
        <Icon
          type="ionic"
          icon="star"
          key={i}
          className={initialClass.join(' ')}
        />
      );
    }
  }

  return stars;
};

RatingStars.propTypes = {
  rating: PropTypes.number,
  ratingLimit: PropTypes.number,
  theme: PropTypes.string,
};

RatingStars.defaultProps = {
  theme: 'red',
  ratingLimit: 5,
};

export default RatingStars;
