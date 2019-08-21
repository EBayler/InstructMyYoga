import React from 'react';
import './style.css';

function ClassCard(props){

  return (
    <div className="ClassCard" onClick={props.onClick}>
      <div>
      <p>{props.classTitle}</p>
      <p>{props.children}</p>
      </div>
    </div>
  );
}

export default ClassCard;
