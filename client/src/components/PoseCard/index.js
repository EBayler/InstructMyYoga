import React from 'react';
import './style.css';

function PoseCard(props){


  let benefitsList = ""
  for (let i=0; i<props.benefits.length; i++){
    if (i + 1 === props.benefits.length) {
      benefitsList += props.benefits[i]
    } else {
      benefitsList += props.benefits[i] + ", "
    }
  }

  return (
    <div className="PoseCard">'
      <div className="PoseCard-inner">
        <div className="PoseCard-front">
        <img className="poseImage" alt={`${props.name}`} src={process.env.PUBLIC_URL + `${props.image}`}></img>
        </div>
      <div className="PoseCard-back">
      <p><strong>Name: </strong> {props.name}</p>
      <p>Sanskrit Name: {props.sanskrit}</p>
      <p>Type: {props.type}</p>
      <p>Benefits: {benefitsList}</p>
      <p>Difficulty: {props.difficulty}</p>
          <p>{props.description}</p>
          </div>
        </div>
    </div>
  );
}


export default PoseCard;
