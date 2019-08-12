import React from 'react';
import ReactDOM from "react-dom";
import dragula from "react-dragula";
import PoseCard from '../PoseCard';
import './style.css';

class Poses extends React.Component {

  componentDidMount(){
    var container = ReactDOM.findDOMNode(this);
    console.log(container);
    dragula([container], {
      copy: function (el, source) {
        return source === document.getElementsByClassName("draggable")
        }
      }
    ); 
  }
   

  render(){
    return (
      <div className="draggable">
        { 
          this.props.poses.length ? (
            this.props.poses.map(pose => (
              <PoseCard
                key={pose.name}
                name={pose.name}
                sanskrit={pose.sanskrit}
                image={pose.image}
                description={pose.description}
                difficulty={pose.difficulty}
                type={pose.type}
                benefits={pose.benefits}
              >{pose.name}</PoseCard>
            ))
          ) : (
            <h1> No Poses Were Found </h1>
          )
      }
      </div>);
  }
  
}

export default Poses;
