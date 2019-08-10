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
      <img src={process.env.PUBLIC_URL + `${props.image}`}></img>
      <h2>Name: {props.name}</h2>
      <h2>Sanskrit Name: {props.sanskrit}</h2>
      <h2>Type: {props.type}</h2>
      <h2>Benefits: {benefitsList}</h2>
      <h2>Difficulty: {props.difficulty}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default PoseCard;
