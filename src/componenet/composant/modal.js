import React from 'react'

import classes from './modale.css';
const modal = props => {
    return (
      <div className={classes.Modal}>
                  {props.children}
              </div>
    );
};


export default modal;