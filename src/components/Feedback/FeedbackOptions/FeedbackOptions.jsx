import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div>
    {Object.keys(options).map(option => {
      return (
        <button
          className={css.btn}
          onClick={() => onLeaveFeedback(option)}
          key={option}
          type="button"
        >
          {option}
        </button>
      );
    })}
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    })
  ),
};
