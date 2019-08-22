import React from 'react';
import './style.css';

function ClassCard(props){

  return (
    <div className="ClassCard" onClick={props.onClick}>
      <div>
      <p>{props.classTitle}</p>
      <p>{props.children}</p>
        <h3>Get Your Bend On</h3>
      </div>
    </div>
  );
}

export default ClassCard;
