import React from "react";
import PropTypes from 'prop-types'; 
import { DivStatistics } from "./Feedback.styled";

const Statistics = ({good, neutral, bad, total, positivePercentage}) =>{
    return(
        <DivStatistics>

<span>Good:{good}</span>
<span>Neutral:{neutral}</span>
<span>Bad:{bad}</span>
<span>Total:{total}</span>
<span>Positive feedback:{positivePercentage}%</span>
</DivStatistics>
    )
}

Statistics.propTypes = {
good:PropTypes.number,
neutral:PropTypes.number,
bad:PropTypes.number,
total:PropTypes.number,
positivePercentage:PropTypes.number,
}

export default Statistics;