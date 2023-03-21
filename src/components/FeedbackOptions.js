import React from "react";
import { Button, DivButton } from "./Feedback.styled";

 const FeedbackOptions = ({options, handleChange}) => {
    return(
        <DivButton>
        {options.map(option => {
            return (
                <span key = {option}>
                    <Button type="button"
                    name={option}
                     onClick ={()=>{handleChange(option)}}>{option} </Button>
                 </span>
        )})
   
}
</DivButton>
 )}
export default FeedbackOptions;