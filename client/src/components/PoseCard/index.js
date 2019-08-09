import React from 'react';
import './style.css';

function PoseCard(props){
  return (
    <div className="PoseCard">
      {props.children}
    </div>
  );
}

export default PoseCard;
