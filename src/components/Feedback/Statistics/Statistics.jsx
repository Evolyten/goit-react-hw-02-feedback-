import React from "react";
import css from './Statistics.module.css'
import PropTypes from 'prop-types'



const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
   <ul className={css.list}>
        <li className={css.item}>
            <p>Good: </p>
            <span>{good}</span>
        </li>
        <li  className={css.item}>
            <p>Neutral: </p>
            <span>{neutral}</span>
        </li>
        <li className={css.item}>
            <p>Bad: </p>
            <span>{bad}</span>
        </li>
        <li className={css.item}>
            <p>Total: </p>
            <span>{total}</span>
        </li>
        <li className={css.item}>
            <p>Positive feedback: </p>
            <span>{good?positivePercentage:0}%</span>
        </li>
    </ul>
    
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired

}

export default Statistics