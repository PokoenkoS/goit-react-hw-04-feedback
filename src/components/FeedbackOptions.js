import React from "react";
import { Button, DivButton } from "./Feedback.styled";

 const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return(
        <DivButton>
        {options.map(option => {
            return (
                <span key = {option}><Button type="button" onClick ={()=>onLeaveFeedback(option)}>{option} </Button>
                 </span>
        )})
   
}
</DivButton>
 )}
export default FeedbackOptions;