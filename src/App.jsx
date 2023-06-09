
import React from "react";
import { useState} from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Notification from "components/Notification";
import {Container} from './components/Feedback.styled'



export function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

 const handleChange = (propertyName) => {
  

  switch(propertyName) {
    case "good":
    setGood(prev => prev + 1);
    break;
    case "neutral":
    setNeutral(prev => prev + 1);
    break; 
    case "bad":
    setBad(prev => prev + 1);
    break;
    default:
    return;
  }
 }

 const countTotalFeedback=()=>{
   return  good + neutral + bad
      
    };

 const countPositiveFeedbackPercentage =()=>{
  return Math.round((good / countTotalFeedback())*100)

  }

    return (
        <Container>
        <Section title="Please leave feedback"/>
        
        <FeedbackOptions 
        options = {["good", "neutral", "bad"]}
        handleChange={handleChange}
         /> 
        
        <Section title= "Statistics">
          {countTotalFeedback() ?
        < Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
        /> : 
         <Notification message="There is no feedback"/>
                }
       
               </Section>               
        </Container>
        
    )
}



