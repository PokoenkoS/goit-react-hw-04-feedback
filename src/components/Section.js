import React from "react";
import PropTypes from 'prop-types'; 
import { Container } from "./Feedback.styled";

function Section({ title, children }) {
    return (
      <Container>
        {title && <h2>{title}</h2>}
        {children}
      </Container>
    );
  };

  Section.prototype={
    title:PropTypes.string,
  }

  export default Section;