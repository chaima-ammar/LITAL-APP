import React from "react";
import {BackgroundStyled} from './Styledcomponent'
const Background = ({ show}) => {
  return (
    <BackgroundStyled  show={show ? 1 : 0}
    />
  );
};

export default Background;
